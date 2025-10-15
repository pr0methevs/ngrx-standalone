import { TodoEffects } from '../features/todo/state/todo.effects';

/**
Explanation:
  Each feature’s effects class is imported from its respective location.
  All effects classes are combined into a single array called effects.
  This array is then used in your application configuration (e.g., with provideEffects(effects) in your app.config.ts or main setup).
Why this structure?
  It keeps your effects modular and organized by feature.
  It makes it easy to add or remove feature effects as your application grows.
  It supports the standalone API and best practices for modern Angular + NgRx projects.
*/
export const effects = [
  TodoEffects,
  // ...other feature effects
];
