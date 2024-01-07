# MERN Chat App

A simple real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can register, log in, and send messages to each other using WebSockets.

## Features

- User Authentication (Register, Login)
- Real-time Messaging using WebSockets
- Sending and Receiving Images, Videos, and PDFs using Firebase Storage
- MongoDB for data storage
- Express.js for server-side logic
- React for the frontend interface
- Node.js for the backend server

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js and npm
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-chat-app.git
   ```

2. Change to the project directory:

```bash

cd mern-chat-app
```
3.Install dependencies:


```bash

npm install
Create a .env file in the root directory with the following variables:
```

.env for API folder

MONGO_URL=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000  // Update with your client URL
JWT_SECRET=your_jwt_secret

.env for CLIENT folder
FIREBASE_API_KEY=your_firebase_api_key  // Add this line for Firebase functionality
Sending and Receiving Media Files using Firebase Storage

Create a Firebase project and enable Firebase Storage.

Obtain your Firebase API key and update the .env file with the FIREBASE_API_KEY.
Usage

Start the MongoDB server:

```bash

mongod
Start the backend server:
```
```
bash

npm run server
Start the frontend:
```
```
bash

npm run client
Open your browser and navigate to http://localhost:3000 to use the chat application.
```

Contributing
Feel free to contribute to the development of this project by opening issues or submitting pull requests. Follow the standard GitHub flow for contributions.

License
This project is licensed under the MIT License - see the LICENSE file for details.

javascript

```
Replace placeholder values such as `your-username`, `your_mongodb_connection_string`, `your_jwt_secret`, and `your_firebase_api_key` with your actual information. Additionally, update the `CLIENT_URL` variable in the `.env` file with the correct URL for your client application.
```






