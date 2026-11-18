# Backend Development Assignment

## Project Overview
This project is part of a Backend Development Assignment. It focuses on building a RESTful API using Node.js, Express.js, and MongoDB.

The project follows the concepts demonstrated in the backend development tutorial and covers server setup, database connectivity, API development, and user management.

## Technologies Used
- **Node.js** – JavaScript runtime environment
- **Express.js** – Backend web framework
- **MongoDB Atlas** – Cloud database
- **Mongoose** – MongoDB object modeling
- **dotenv** – Environment variable management

## Features
- Express server setup
- MongoDB Atlas database connection
- User registration API
- Retrieve all users API
- Modular project structure using routes, controllers, and models

## Project Structure

```text
backend-development-assignment/
├── controllers/
│   └── user.controller.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.route.js
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/ManasCodez/web_assignement.git
```

### 2. Navigate to the project directory

```bash
cd web_assignement
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project directory and add:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Replace the MongoDB URI with your own MongoDB Atlas connection string.

### 5. Start the server

```bash
node index.js
```

The server will run locally at:

`http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/users/register` | Register a new user |
| GET | `/api/users` | Retrieve all users |

*Note: Update the endpoint paths if your Express application uses a different base route.*

## Testing

The API endpoints can be tested using Postman or Thunder Client by sending HTTP requests to the local server.

## Security
- Environment variables are used to store sensitive configuration details.
- The `.env` file should not be uploaded to GitHub.
- The `.env.example` file provides a template for configuration.

## Learning Outcomes
- Understanding backend development fundamentals.
- Working with Node.js and Express.js.
- Connecting an application to MongoDB Atlas.
- Creating REST API endpoints.
- Understanding routes, controllers, and database models.

## Author
**ManasCodez**

