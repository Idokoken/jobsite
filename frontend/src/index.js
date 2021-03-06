import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'normalize.css'
import {AppProvider} from './context/AppContext'

ReactDOM.render(
  <React.StrictMode>
   <AppProvider>
    <App />
   </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);