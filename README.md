# Code Collab

## Overview

Welcome to Code Collab! This platform is designed to help you connect with like-minded individuals, share your work, and bring your ideas to life in a collaborative environment. Code Collab comes packed with features such as authentication, project sharing, discussions, whiteboarding, and chat.

## Features

- **Authentication**: Secure login and registration system.
- **Share Your Work**: Easily share your code and projects with others.
- **Discussions**: Engage in meaningful discussions with other members.
- **Whiteboarding**: Collaborate on ideas and diagrams using our whiteboarding tool.
- **Chat Feature**: Communicate in real-time with other members.

## Getting Started

To get started with Code Collab locally, follow these steps:

### Prerequisites

- Ensure you have Node.js and npm installed on your system.
- MongoDB should be set up and running on your machine or have access to a MongoDB URI.

### Installation

1. **Fork and Clone the Repository**

   Fork the repository on GitHub and then clone it to your local machine:

   ```bash
   git clone https://github.com/your-username/code-collab.git
   cd code-collab
   ```

2. **Frontend Setup**

   Navigate to the `frontend` directory and install the necessary dependencies:

   ```bash
   cd frontend
   npm install
   ```

   Create a `.env` file in the `frontend` directory with the following content:

   ```env
   REACT_APP_API_URL=Your API URL link
   ```

   Start the frontend server:

   ```bash
   npm start
   ```

3. **Backend Setup**

   Navigate to the `backend` directory and install the necessary dependencies:

   ```bash
   cd ../backend
   npm install
   ```

   Create a `.env` file in the `backend` directory with the following content:

   ```env
   PORT=8088
   MONGO_URI=Your MongoDB URI
   JWT_SECRET=Your JWT Secret
   ```

   Start the backend server:

   ```bash
   npm start
   ```

### Running the Application

Once both the frontend and backend servers are running, you can access Code Collab by navigating to `http://localhost:3000` in your web browser.
