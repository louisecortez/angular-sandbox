import { Injectable } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class AppInsightsService {
    appInsights: ApplicationInsights;

    constructor() {
        this.appInsights = new ApplicationInsights({
            config: {
                instrumentationKey: environment.appInsights.instrumentationKey,
                enableAutoRouteTracking: true
            }
        });

        this.appInsights.loadAppInsights();
    }

    logPageView(name?: string, url?: string) {
        this.appInsights.trackPageView({
            name: name,
            uri: url
        });
    }

    logEvent(name: string, properties?: { [key: string]: any }) {
        this.appInsights.trackEvent({ name: name }, properties);
    }

    logTrace(message: string, properties?: { [key: string]: any }) {
        this.appInsights.trackTrace({ message: message }, properties);
    }
}