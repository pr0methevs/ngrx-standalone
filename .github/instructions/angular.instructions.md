---
description: 'Angular-specific coding standards and best practices'
applyTo: '**/*.ts, **/*.html, **/*.scss, **/*.css'
---

# Angular Development Instructions

Instructions for generating high-quality Angular applications with TypeScript, using Angular Signals for state management, adhering to Angular best practices as outlined at https://angular.dev.

You are an expert in TypeScript, Angular, and scalable web application development. You write maintainable, performant, and accessible code following Angular and TypeScript best practices.

## Project Context
- TypeScript for type safety
- Angular CLI for project setup and scaffolding
- Follow Angular Style Guide (https://angular.dev/style-guide)
- Use Angular Material or other modern UI libraries for consistent styling (if specified)

## Development Best Practices

### Architecture
- Use standalone components unless modules are explicitly required
- Organize code by standalone feature modules or domains for scalability
- Implement lazy loading for feature modules to optimize performance
- Use Angular's built-in dependency injection system effectively
- Implement lazy loading for feature routes

### TypeScript
- Enable/use strict mode in `tsconfig.json` for type safety
- Define clear interfaces and types for components, services, and models
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain
- Use type guards and union types for robust type checking
- Implement proper error handling with RxJS operators (e.g., `catchError`)
- Use typed forms (e.g., `FormGroup`, `FormControl`) for reactive forms

### Styling
- Use Angular's component-level CSS encapsulation (default: ViewEncapsulation.Emulated)
- Prefer SCSS for styling with consistent theming
- Implement responsive design using CSS Grid, Flexbox, or Angular CDK Layout utilities
- Follow Angular Material's theming guidelines if used
- Maintain accessibility (a11y) with ARIA attributes and semantic HTML

### State Management
- Use Angular Signals for reactive state management in components and services
- Use writable signals for mutable state and computed signals for derived state
- Handle loading and error states with signals and proper UI feedback
- Use Angular's `AsyncPipe` to handle observables in templates when combining signals with RxJS
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead
- When using Angular >= 17,
  - Leverage `signal()`, `computed()`, and `effect()` for reactive state updates and management
  - Use `computed()` for derived state
  - Do NOT use `mutate` on signals, use `update` or `set` instead

### Component Design
- Follow Angular's component lifecycle hooks best practices
- Keep templates clean and logic in component classes or services
- When using Angular >= 19,
  - Use `input()` `output()`, `viewChild()`, `viewChildren()`, `contentChild()` and `contentChildren()` functions instead of decorators; otherwise use decorators
  - must NOT set `standalone: true` inside Angular decorators. It's the default.
- Leverage Angular's change detection strategy (default or `OnPush` for performance)
- Use Angular directives and pipes for reusable functionality
- Use Reactive forms instead of Template-driven ones
- Keep components small and focused on a single responsibility
- Structure components with a clear separation of concerns (smart vs. presentational components)
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead

### Templates
- Keep templates simple and avoid complex logic
- Use the async pipe to handle observables
- When using Angular >= 20,
  - Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
  - When using @for utilize `track` for better performance
- When templates use *ngFor use `trackBy` for better performance

### Services
- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- When using Angular >= 14,
  - Use the `inject()` function instead of constructor injection

#### Data Fetching
- Use Angular's `HttpClient` for API calls with proper typing
- Implement caching strategies (e.g., `shareReplay` for observables)
- Store API response data in signals for reactive updates
- Implement RxJS operators for data transformation and error handling
- Handle API errors with global interceptors for consistent error handling

### Security
- Sanitize user inputs using Angular's built-in sanitization
- Implement route guards for authentication and authorization
- Use Angular's `HttpInterceptor` for CSRF protection and API authentication headers
- Validate form inputs with Angular's reactive forms and custom validators
- Follow Angular's security best practices (e.g., avoid direct DOM manipulation)

### Performance
- Enable production builds with `ng build --prod` for optimization
- Use lazy loading for routes to reduce initial bundle size

### Testing
- Write unit tests for components, services, and pipes using Jasmine and Karma
- Use Angular's `TestBed` for component testing with mocked dependencies
- Test signal-based state updates using Angular's testing utilities
- Write end-to-end tests with Cypress or Playwright (if specified)
- Mock HTTP requests using `provideHttpClientTesting`
- Ensure high test coverage for critical functionality

## Implementation Process
1. Plan project structure and feature modules
2. Define TypeScript interfaces and models
3. Scaffold components, services, and pipes using Angular CLI
4. Implement data services and API integrations with signal-based state
5. Build reusable components with clear inputs and outputs
6. Add reactive forms and validation
7. Apply styling with SCSS and responsive design
8. Implement lazy-loaded routes and guards
9. Add error handling and loading states using signals
10. Write unit and end-to-end tests
11. Optimize performance and bundle size

## Additional Guidelines
- Follow the Angular Style Guide for file naming conventions (see https://angular.dev/style-guide), e.g., use `feature.ts` for components and `feature-service.ts` for services. For legacy codebases, maintain consistency with existing pattern.
- Use Angular CLI commands for generating boilerplate code
- Document components and services with clear JSDoc comments
- Ensure accessibility compliance (WCAG 2.1) where applicable
- Use Angular's built-in i18n for internationalization (if specified)
- Keep code DRY by creating reusable utilities and shared modules
