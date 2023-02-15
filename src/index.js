import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const {default: Axios} =  require("./components/Axios/axios");

(async() => {
  await Axios.GetAsync("vxcxvcxvcxxcvxcvxcvcxcxvxcvxcvxcv");
})()