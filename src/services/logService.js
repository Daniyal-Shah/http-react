import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn: "https://90af5e588f5842b68320c0eeac2c4e0a@o1086700.ingest.sentry.io/6099075",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
