import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import store from "./reducers/Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
