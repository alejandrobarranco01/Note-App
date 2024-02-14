# Note-App README

## Overview

Note-App is a demonstration of basic REST API functionality using React, Tailwind CSS, Express, and MongoDB. It consists of two main folders: "frontend" for the React frontend and "server" for the Express backend.

### Frontend (frontend)

The frontend folder contains the React application for the Note-App.

- **Dependencies:**
  - axios: For making HTTP requests.
  - postcss-cli: Command-line tool for processing CSS with PostCSS.
  - react: JavaScript library for building user interfaces.
  - react-dom: Entry point to the DOM and server renderers for React.
- **DevDependencies:**
  - @types/react: TypeScript type definitions for React.
  - @types/react-dom: TypeScript type definitions for React DOM.
  - @typescript-eslint/eslint-plugin: TypeScript specific linting rules for ESLint.
  - @typescript-eslint/parser: TypeScript parser for ESLint.
  - @vitejs/plugin-react: Vite plugin for React support.
  - autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes.
  - eslint: JavaScript and TypeScript code quality tool.
  - eslint-config-prettier: Turns off all rules that are unnecessary or might conflict with Prettier.
  - eslint-plugin-prettier: Runs Prettier as an ESLint rule.
  - eslint-plugin-react-hooks: ESLint plugin for React hooks.
  - eslint-plugin-react-refresh: ESLint plugin for React Refresh.
  - postcss: Tool for transforming CSS with JavaScript plugins.
  - prettier: Opinionated code formatter.
  - tailwindcss: Utility-first CSS framework for rapid UI development.
  - typescript: TypeScript language server.

### Backend (server)

The server folder contains the Express backend for the Note-App.

- **Dependencies:**
  - cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).
  - express: Web framework for Node.js.
  - mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
- **DevDependencies:**
  - @types/cors: TypeScript type definitions for CORS.
  - @types/express: TypeScript type definitions for Express.
  - @types/mongoose: TypeScript type definitions for Mongoose.
  - @types/node: TypeScript type definitions for Node.js.
  - eslint: JavaScript and TypeScript code quality tool.
  - eslint-config-prettier: Turns off all rules that are unnecessary or might conflict with Prettier.
  - eslint-plugin-prettier: Runs Prettier as an ESLint rule.
  - prettier: Opinionated code formatter.
  - ts-node-dev: TypeScript execution and development tool that restarts when files are modified.

## Sample Functionality

Here are some sample functionalities implemented in the backend:

- **Create a Note:** Endpoint to create a new note with a title and optional description.
- **Update a Note:** Endpoint to update an existing note by ID with new title and description.
- **Delete a Note:** Endpoint to delete a note by ID.
- **Get all Notes:** Endpoint to retrieve all notes.
- **Get a Note:** Endpoint to retrieve a single note by ID.

Each functionality provides appropriate HTTP status codes and JSON responses as per RESTful conventions.

## Instructions to Run Locally

### Prerequisites

- Node.js installed on your local machine.
- MongoDB installed and running.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/alejandrobarranco01/Note-App.git
   ```
2. Navigate to the cloned repository
   ```bash
   cd Note-App
   ```
3. Start the frontend and backend server in separate terminals

- **Frontend:**
  ```bash
  cd frontend
  npm install
  npm run dev
  ```
- **Backend:**
  ```bash
  cd server
  npm install
  npm run dev
  ```

3. Connect to the MongoDB database: Add the appropriate connection string to your backend server code before starting the server.

- **Frontend:** Open your web browser and visit [http://localhost:5173](http://localhost:5173)
  Backend: You can now send requests to your local server endpoints (e.g., [http://localhost:8000/note](http://localhost:8000/note))
