# Node.js, Express, and TypeScript Setup
This repository provides a basic setup for a Node.js and Express application using TypeScript and an MVC (Model-View-Controller) structure. It serves as a foundation for building more complex web applications.

## Features
*   **TypeScript:**  Leverages TypeScript for improved code maintainability and scalability.
*   **Express.js:** Uses the Express.js framework for handling routing and requests.
*   **MVC Architecture:**  Organizes code into models, views, and controllers for better separation of concerns.
*   **EJS Templating:** Utilizes EJS for rendering dynamic views.
*   **Nodemon:**  Includes Nodemon for automatic server restarts during development.

## Getting Started
1.  Clone the repository: `git clone https://github.com/MarcoValeri/node-express-typescript-setup.git`
2.  Install dependencies: `npm install`
3.  Start the development server: `npm start`
4.  Open your browser and visit `http://localhost:3000`   

## Project Structure
├── controllers          # Controllers for handling application logic
│   └── homeController.ts
├── routes              # Routes for defining URL endpoints
│   └── homeRoutes.ts
├── views               # EJS templates for rendering views
│   └── home.ejs
└── app.ts              # Main application file

## Scripts
*   `npm start`: Starts the development server with Nodemon.

## License
This project is licensed under the ISC License.