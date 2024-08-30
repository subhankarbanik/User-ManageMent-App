## User Management Application
  This is a simple web application for managing users. The application allows you to list users, add new users via a sign-up form, delete users, and export user data. The backend is built using Node.js and Express, with MongoDB as the database. The frontend is built using React.

## Features
  User Listing: View a list of all users.
  Add User: Add new users through a sign-up form.
  Delete User: Delete existing users with a confirmation prompt.
  Export Users: Export selected users' data as a CSV file.
  Pagination: Navigate through user data with pagination controls.
## Tech Stack
  Frontend: React.js, HTML5, CSS3
  Backend: Node.js, Express.js
  Database: MongoDB (Atlas)
## Styling: Responsive CSS for a better user experience
   Other Libraries: Axios, Mongoose, dotenv, cors
## Getting Started
  * Prerequisites
Make sure you have the following installed on your system:

  Node.js (v14.x or higher)
  npm (v6.x or higher)
  MongoDB Atlas account
  Installation
## Deployed link:
   https://66d0b4b1c95d585f73841a4d--usermanagementapp01.netlify.app/
   https://user-manage-ment-app.vercel.app/
## Clone the repository:
  git clone https://github.com/subhankarbanik/User-ManageMent-App.git
  cd User-ManageMent-App
## Install backend dependencies:
  cd backend
  npm install
## Install frontend dependencies:
  cd frontend
  npm install
## Set up environment variables:
  Create a .env file in the root directory of your project and add the following:
  PORT=5001
  MONGO_URI=your-mongodb-atlas-uri
  Running the Application
## Start the backend server:
  cd backend
  npm start
## Start the frontend:
  cd frontend
  npm start
## Access the application: Open your browser and go to http://localhost:3000.

## API Endpoints
  GET /api/users: Fetch all users

  POST /api/users: Add a new user

  DELETE /api/users/
  : Delete a user by ID

  POST /api/users/export: Export selected users' data as a CSV file

##Future Enhancements
   Add user authentication and authorization.
   Improve UI/UX with more advanced CSS or frameworks like Bootstrap or Material-UI.
   Add more detailed error handling and user feedback.
## License
   This project is licensed under the MIT License.

