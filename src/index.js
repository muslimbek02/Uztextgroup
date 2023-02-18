import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components'
import Loader from "./components/Loader/loader";
import { FetchService } from './Services/FetchService';
const root = ReactDOM.createRoot(document.getElementById('root'));
function setRes(res) {
  console.log("result: ", res);
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
