# Note-App README

## Overview

Note-App is a demonstration of basic REST API functionality using React, Tailwind CSS, Express, and MongoDB. TypeScript is used for type safety throughout the application. It consists of two main folders: "frontend" for the React frontend and "server" for the Express backend.

### Frontend (frontend)

The frontend directory contains the React application for Note-App. It utilizes React for building user interfaces and TypeScript for type safety. Development tools such as ESLint and Prettier ensure code quality and consistency. Tailwind CSS is used for styling, and axios handles HTTP requests for communication with the backend. Vite is employed as the build tool.

### Backend (server)

The server directory houses the Express backend for Note-App. It leverages Express, a web framework for Node.js, and Mongoose for MongoDB object modeling. TypeScript definitions enhance type safety, while ESLint and Prettier maintain code quality. CORS middleware enables Cross-Origin Resource Sharing, facilitating frontend-backend communication. Additionally, ts-node-dev enables efficient TypeScript execution and development.

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
