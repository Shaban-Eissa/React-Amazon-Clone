import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import { StateProvider } from "./ContextAPI/StateProvider";
import reducer, { initialState } from "./ContextAPI/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
