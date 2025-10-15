import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { reducers } from './store/app.reducers';
import { effects } from './store/app.effects';

/** Defines the root configuration for the app.
 * It sets up core providers, routing, NgRx store, effects, and developer tools.
 * Essential for bootstrapping the app with the correct services and state management.
 *
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Sets up global error handling for the app
    provideBrowserGlobalErrorListeners(),
    // Enables Angular’s zoneless change detection for performance
    provideZonelessChangeDetection(),
    // Sets up app’s routing using the routes defined in app.routes.ts
    provideRouter(routes),
    // Registers root reducers (from app.reducers.ts) so NgRx knows how to manage your global state
    provideStore(reducers),
    // Registers all of the app’s side-effect classes (from app.effects.ts),
    // Enabling NgRx Effects for handling async operations and side effects
    provideEffects(effects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
}
