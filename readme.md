# Draw Messenger Backend →

Backend Project: Draw Messenger - Text and Drawing Chat App
This is the backend project for Draw Messenger, a text and drawing chat application. The project is built using Node.js, Express.js server, MongoDB as a database, Redis cache for super-fast querying of user groups data, and Socket.IO for real-time communication between users.

## Features

- Real-time text messaging: Users can send and receive text messages in real-time.
- Drawing canvas: Users can collaborate and draw together on a shared canvas.
- User groups: Users can be organized into groups for easier communication.
- Redis cache: Utilizes Redis cache for efficient and fast querying of user groups data.

## Technologies Used

- Node.js: A JavaScript runtime for building server-side applications.
- Express.js: A web application framework for Node.js.
- MongoDB: A document-oriented NoSQL database.
- Redis: An in-memory data structure store used for caching and high-performance data manipulation.
- Socket.IO: A JavaScript library that enables real-time, bidirectional communication between the server and clients.

## Prerequisites

Before running this backend project, ensure that you have the following software installed on your machine:

- Node.js: Version 14 or above.
- npm: Package manager for Node.js.
- MongoDB: A running MongoDB server.
- Redis: A running Redis server.

## Getting Started

Follow these steps to run the backend project:

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:

```bash
cd draw-messenger-backend
```

3. Install the dependencies:

```bash
npm install
```

4. Create a .env file in the root directory of the project and add the following environment variables:

```bash
npm start
```

5. Start the server. The backend server should now be running on http://localhost:8000.

## Configuration

The application requires configuration settings for the MongoDB and Redis connections. Update the following configuration files with your database and cache details:

A. MongoDB configuration: `config/database.js`

```js
module.exports = {
  // Update the MongoDB connection URL
  url: "mongodb://localhost:27017/draw-messenger",
};
```

B. Redis configuration: `config/redis.js`

```js
module.exports = {
  // Update the Redis connection details
  host: "localhost",
  port: 6379,
};
```

Make sure to update the connection details according to your MongoDB and Redis server configurations.

## API Routes

The backend project exposes the following API routes:

```yaml
/user: POST /user/auth - Single entry user auth point

/groups: POST /group/getMessages - Create all messages by group id.
  POST /group/getSingleGroup - Get single group details by ID.
  POST /groups - Fetch all the groups
```

## WebSocket

The WebSocket functionality is implemented using Socket.IO. The server listens for WebSocket connections on the same HTTP server running on `http://localhost:3000`.

## Acknowledgements

- Node.js - A JavaScript runtime for building server-side applications.
- Express.js - A web application framework for Node.js.
- MongoDB - A document-oriented NoSQL database.
- Redis - An in-memory data structure store used for caching and high-performance data manipulation.
- Socket.IO - A JavaScript library that enables real-time, bidirectional communication.
- Mongoose - A MongoDB object modeling tool.
- Redis Client - A Redis client for Node.js.
