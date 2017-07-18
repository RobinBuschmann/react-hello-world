import * as crypto from 'crypto';
import * as express from 'express';
import {Request} from 'express';
import * as path from 'path';
import {existsSync, readdirSync, unlinkSync, statSync} from 'fs';
import {
  FuseBox,
  SVGPlugin,
  CSSPlugin,
  UglifyJSPlugin,
  TypeScriptHelpers,
  SassPlugin,
  JSONPlugin,
  EnvPlugin,
  WebIndexPlugin,
  HTMLPlugin,
  ImageBase64Plugin, CSSResourcePlugin
} from 'fuse-box';
import {FuseBoxOptions} from "fuse-box/dist/typings/core/FuseBox";

// CONFIGURATION
// -------------------------------------------------

const DIST_FOLDER = 'build';
const MAIN_BUNDLE = `main-${getShortRandomString()}`;
const ENTRY = '> index.tsx';
const DEFAULT_CONFIG: FuseBoxOptions = {
  homeDir: "src",
  output: `${DIST_FOLDER}/$name.js`,
  plugins: [
    JSONPlugin(),
    ImageBase64Plugin(),
    SVGPlugin(),
    WebIndexPlugin({
      title: "React Hello World",
      template: "src/index.html"
    }),
    CSSPlugin(),
    [
      SassPlugin(),
      CSSPlugin(),
    ] as any,
    TypeScriptHelpers(),
    HTMLPlugin({useDefault: false}),

  ],
  shim: {
    axios: {
      source: 'node_modules/axios/dist/axios.min.js',
      exports: 'axios'
    }
  }
};
const config: { [env: string]: FuseBoxOptions } = {
  dev: {
    sourceMaps: true,
    plugins: [
      EnvPlugin({
        NODE_ENV: 'development',
      }),
      ...DEFAULT_CONFIG.plugins
    ]
  },
  qa: {
    plugins: [
      EnvPlugin({
        NODE_ENV: 'production',
      }),
      ...DEFAULT_CONFIG.plugins,
      UglifyJSPlugin({})
    ]
  },
  prod: {
    plugins: [
      EnvPlugin({
        NODE_ENV: 'production',
      }),
      ...DEFAULT_CONFIG.plugins,
      UglifyJSPlugin({})
    ],
    natives: {
      process: false
    }
  }
};

function fuseBox(env) {

  if (!config[env]) {
    throw new Error(`Unknown environment name "${env}"`);
  }

  const options = {...DEFAULT_CONFIG, ...config[env]};

  return FuseBox.init(options);
}

// TASKS
// -------------------------------------------------

const tasks = {
  clearDist: function clearDist(currentPath = path.join(__dirname, DIST_FOLDER)) {
    readdirSync(currentPath)
      .forEach(name => {
        const fullPath = path.join(currentPath, name);
        if (!statSync(fullPath).isDirectory()) {
          unlinkSync(path.join(fullPath));
        } else {
          clearDist(fullPath);
        }
      })
    ;
  },
  serve([env]) {
    this.clearDist();
    const fuse = fuseBox(env);

    fuse.dev({}, server => {

      // ensure that any path redirects to index.html
      // so that refreshing in case of html5 routes
      // does not lead to a 404
      const dist = path.resolve(`./${DIST_FOLDER}`);
      const app = server.httpServer.app;
      app.use("/static/", express.static(path.join(dist, 'static')));
      app.get("*", (req: Request, res) => {
        const indexFile = 'index.html';
        const requestedSource = req.url.replace('/', '');
        const requestedPath = path.join(dist, requestedSource);
        let pathname;

        // if requested source exists, use this instead of index file
        if (existsSync(requestedPath)) {
          pathname = requestedPath;
        } else {
          // fallback
          pathname = path.join(dist, indexFile);
        }

        res.sendFile(pathname);
      });
    });

    fuse
      .bundle(MAIN_BUNDLE)
      .instructions(ENTRY)
      .watch().hmr()
    ;

    fuse.run();
  },
  build([env]) {
    this.clearDist();
    const fuse = fuseBox(env);

    fuse
      .bundle(MAIN_BUNDLE)
      .instructions(ENTRY)
    ;

    fuse.run();
  }
};

// RUN TASKS
// -------------------------------------------------

// [0]    [1]       [2]               [3]
// node   fuse.js   serve|build|...  dev|prod
const task = process.argv[2];
const args = process.argv.slice(3, process.argv.length);
tasks[task](args.length ? args : undefined);

// HELPER
// -------------------------------------------------

function getShortRandomString() {
  const BYTES = 8;
  return crypto.randomBytes(BYTES).toString('hex');
}
