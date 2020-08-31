import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Avtar from './Avtar';
import Netflix from './Netflix';
import DateTime from './DateTime';
import Greeting from './Greeting';
import Calculator from './Calculator';
import Click from './Click';
import TimeChange from './TimeChange';
import DigitalClock from './DigitalClock';
import Event from './Event';
import Form from './Form';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import Form1 from "./Form1"

ReactDOM.render(
  <React.StrictMode>
    <Form1 />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
