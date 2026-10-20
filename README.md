# Interactive World Map

An Angular single-page app with a clickable world map. Click any country, or search by country code, to see live data about it from the [World Bank API](https://datahelpdesk.worldbank.org/knowledgebase/articles/898590-country-api-queries).

Built for WGU's D280 JavaScript Programming course.

## Features

- **Clickable SVG world map.** Each country in the SVG has its country code as its ID, so a click handler can tell which country was clicked.
- **Country code search.** Enter a 2- or 3-letter code (for example `US` or `BRA`) to look up a country without using the map.
- **Live country details** fetched from the World Bank API:
  - name, capital, region and income level
  - lending type, latitude and longitude
- **Loading and error states.** Shows "Loading..." while a request is in flight, and a message if the map fails to load.

## How it's built

| Piece | File | What it does |
| --- | --- | --- |
| **Map component** | `src/app/map/` | Loads the SVG, handles clicks and searches, and displays the selected country |
| **Country service** | `src/app/services/country.ts` | Calls the World Bank API with `HttpClient` and maps the response into a typed `CountryData` object |
| **Header component** | `src/app/components/header/` | Page title bar |
| **Routing** | `src/app/app.routes.ts` | Redirects `/` to `/map` |

Angular concepts used:

- **Standalone components**, with no NgModules.
- **Signals** (`signal()`) for the selected country, loading state and errors.
- **New control flow syntax** (`@if` / `@else`) in templates.
- **RxJS** `Observable`s and the `map` operator to transform API responses.
- **Two-way binding** with `ngModel` for the search box.
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

Then open http://localhost:4200.

Built with Angular 21.
