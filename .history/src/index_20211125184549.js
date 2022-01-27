import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
      <Provider store={store}></Provider>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
