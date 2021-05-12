import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./App.scss";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";

// SENTRY ERROR TRACKING
Sentry.init({
  dsn: "https://1cf2bc5da23c48ec9c51d60497b53c06@o259988.ingest.sentry.io/1764663",
  integrations: [new Integrations.BrowserTracing()],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
