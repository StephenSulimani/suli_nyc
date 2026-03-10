import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-8JDCMMCWTL";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Defer analytics until after first paint to reduce TBT and improve FCP/LCP
function initGA() {
  ReactGA.initialize(TRACKING_ID);
}
if (typeof requestIdleCallback !== "undefined") {
  requestIdleCallback(() => initGA(), { timeout: 3000 });
} else {
  setTimeout(initGA, 1);
}
