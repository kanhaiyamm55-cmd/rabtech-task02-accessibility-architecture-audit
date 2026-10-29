# Architecture Notes

## Boundaries

- `client/`: static HTML, CSS, and browser JavaScript. Owns rendering, form interaction, and user-facing status messages.
- `server/`: Express HTTP API, request validation, and static-file delivery. Owns HTTP contracts; this demo intentionally does not persist feedback.
- `docs/`: audit report, evidence references, and design decisions.
- `test/`: root-level cross-feature checks and acceptance-test notes. Server-local tests live beside the server package for simple execution.
- `client` must call the API through HTTP and must not import server modules.
- `server` must not depend on browser DOM code.

## First vertical feature slice: feedback submission

1. User enters feedback in the accessible form.
2. Client validates that the trimmed message is non-empty.
3. Client sends `POST /api/feedback` as JSON.
4. Server validates type and maximum length.
5. Server returns a success or error JSON response.
6. Client announces the outcome in a live status region.

## Local setup

Requires Node.js 18+ and npm.

```bash
npm install
npm start
```

Visit `http://localhost:3000`. In a second terminal, run `npm test`.

## API contract

### `GET /api/health`
Returns `{ "status": "ok" }`.

### `POST /api/feedback`
Request: `{ "message": "Example feedback" }`

- `201`: accepted by the demo; no database persistence.
- `400`: empty or overlong message.
- `Content-Type`: `application/json`.

## Quality and accessibility decisions

- Use semantic landmarks and a single primary `h1`.
- Associate the visible form label with its field.
- Include a skip link, visible keyboard focus, and a live status region.
- Validate input on the server as well as the client.
- Keep the demo data-free; production would need privacy, abuse protection, persistence, logging, and security review.

## Future evolution

Add a database adapter behind a service boundary, environment-based configuration, API integration tests, and automated accessibility checks only when those requirements are in scope.
