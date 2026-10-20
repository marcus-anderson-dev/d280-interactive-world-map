# Interactive World Map

Angular page with clickable map. Click country, or search by country code, to see live data[World Bank API](https://datahelpdesk.worldbank.org/knowledgebase/articles/898590-country-api-queries).

## Built for WGU's D280 JavaScript Programming course.

## Features

- **Clickable SVG world map.** 
- **Country code search.** Search by country code, 2- or 3-letter code (for example `US` or `BRA`).
- **API used** fetched from the World Bank API
- **Loading/Error states.** Displays "Loading..." while a starting a request, and a message if the map fails to load.

## Components of App

| **Map component** | `src/app/map/` | Loads SVG, handles clicks and searching, displays the selected country |
| **Country service** | `src/app/services/country.ts` | Sends a call with `HttpClient` and maps the response into `CountryData` object |
| **Header component** | `src/app/components/header/` | Page title bar |
| **Routing** | `src/app/app.routes.ts` | Redirects to / |

Angular concepts used:

- **Standalone components**, with no NgModules.
- **Signals** (`signal()`) for the selected country.
- **Control flow syntax** (`@if` / `@else`) in templates.
- **RxJS** `Observable `map` operator to transform API responses.
- **Two-way binding** used `ngModel` for the country code search box.
- **Dependency injection** of the country service and `HttpClient`.

## Running it

**Requirements:** [Node.js](https://nodejs.org/) 20.19 or newer.

```bash
git clone https://github.com/aLLmentaLx/d280-interactive-world-map.git
```

```bash
cd d280-interactive-world-map
```

```bash
npm install
```

```bash
npm start
```

Open with http://localhost:4200.

Built with Angular 21.
