import ReactDOM from "react-dom/client";
import App from "./App";
import pkg from "../package.json";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://60685eeb02b5445695709486668a3a0d@o4504655782346752.ingest.sentry.io/4504655784509440",
  integrations: [new BrowserTracing()],
  environment: "live",
  release: pkg.version,
  tracesSampleRate: 1.0,
});


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
