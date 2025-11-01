<p align="center">
    <img src="https://github.com/elgaspar/baboon-md/blob/d23be5e507a7c5d5e3febb8b8304eb0e53d7a9a3/frontend/src/assets/logo-full.png" alt="BaboonMD Logo" width=500 />
    <br/>    
    <a href="https://github.com/elgaspar/baboon-md/actions/workflows/e2e-tests.yml">
        <img src="https://github.com/elgaspar/baboon-md/actions/workflows/e2e-tests.yml/badge.svg" alt="E2E Tests" />
    </a>
    <a href="https://github.com/elgaspar/baboon-md/actions/workflows/lint.yml">
      <img src="https://github.com/elgaspar/baboon-md/actions/workflows/lint.yml/badge.svg" alt="Lint" />
    </a>
    <a href="https://github.com/elgaspar/baboon-md/actions/workflows/code-style.yml">
        <img src="https://github.com/elgaspar/baboon-md/actions/workflows/code-style.yml/badge.svg" alt="Code Style" />
    </a>
</p>



BaboonMD is a minimal web application that converts Markdown into clean PDF documents.

## Features

- Exports real text that is sharp, searchable, and selectable
- Watch your PDF update as you type in real-time
- No data collection or sign-ups required

## Tech Stack

- React 19 and Tailwind CSS 4 for frontend
- Node.js, Express 5 and Playwright for backend server and PDF generation
- Playwright for E2E testing

## Installation & Setup

### Requirements

TODO

### Setup

1. Start everything with Docker Compose:

    ```bash
    docker compose up
    ```

2. Create a `.env` file in the backend directory:

    ```env
    FRONTEND_EDITOR_URL=http://localhost:5173/editor
    FRONTEND_CORS_URL=http://localhost:5173
    ```
   
3. Create a `.env` file in the frontend directory:

    ```env
    TODO
    ```

4. Access the application at http://localhost:5173


### Production

Build and run the production version:

```bash
docker compose -f docker-compose.prod.yml up
```

## Author

[Elias Gasparis](https://github.com/elgaspar)

## License

This project is licensed under the [MIT License](./LICENSE).
