import {
  ApplicationInsights
} from "@microsoft/applicationinsights-web";

export const appInsightsPlugin = {
  install: (app) => {
    // See https://docs.microsoft.com/ja-jp/azure/azure-monitor/app/javascript
    // and https://github.com/microsoft/ApplicationInsights-JS/blob/master/README.md
    const appInsights = new ApplicationInsights({
      config: {
        connectionString: import.meta.env.VITE_APP_APPLICATION_INSIGHTS_CONNECTION_STRING,
        enableAutoRouteTracking: true,
        enableRequestHeaderTracking: true,
        enableResponseHeaderTracking: true,
        disableFetchTracking: false,
        enableCorsCorrelation: true,
        correlationHeaderExcludedDomains: [""], // 収集不要なサイトは別途指定(サードパーティトラッキングなど)
      },
    });
    appInsights.loadAppInsights();
    appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview
    app.config.globalProperties.$appInsights = appInsights;
  }
}