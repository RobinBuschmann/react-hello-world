import * as React from 'react';
import {render} from 'react-dom';
import {App} from "./app/App";
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.min.css';
import './index.scss';

render(
  <App />,
  document.getElementById('root')
);
