import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Providers } from "./context";
import { startMirage } from "./mirage";

if (process.env.NODE_ENV === "development") {
  startMirage();
}

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
