# react hello world
This project is an application skeleton for a moden web app. It uses
 typescript with react and redux.

The seed contains a sample react application and is preconfigured to 
install the react framework and a bunch of development and testing 
tools for instant web development gratification.

The seed provides some example modules as a kind of guideline for how
a application module should be structured.

## Installation

### Requirements
[node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) 
(npm comes with node.js) and [yarn](https://yarnpkg.com/en/docs/install) 
are required

### Dependencies
````shell
yarn install
````

## Build tool
[fuse-box](http://fuse-box.org/) is used for all build processes 
(automatically installed with `yarn install`). 
fuse-box can be configured in `fuse.ts`

## Development server
Run development server with

````shell
npm start
````
For production environment:

````shell
npm run serve:prod
````

## Testing
Run tests with

````shell
npm test
````

Test configurations can be found in `/test` directory.

### Code coverage
Run test with code coverage with

````shell
npm run cover
````

Code coverage requirements can be defined in `package.json` under `nyc`.

### Linting
For linting code,  tslint is used and can be configured in `tslint.json`.

## Deployment & build
Build final bundle with
````shell
npm run build
````
