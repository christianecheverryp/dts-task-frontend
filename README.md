# DTS Task Manager - Frontend (React)

This is the frontend for the DTS Task Manager project, built with [React](https://react.dev/) and [Axios](https://axios-http.com/).  
It connects to the Java Spring Boot backend to manage tasks for caseworkers.

## 🚀 How to Run

1. **Clone the repository:**
   ```sh
   git clone https://github.com/christianecheverryp/dts-task-frontend.git
   cd dts-task-frontend

2. **Install dependencies**
    npm install

3. **Start the development server**
    npm start

    The app will open at http://localhost:3000 in your browser.

    Note:
    The backend must be running at http://localhost:8080 for the app to work.

4. **Features**
    - Create a new task
    - View all tasks
    - Edit task details
    - Delete tasks
    - Change status (Pending, In Progress, Done) from the main interface

5. **Configuration**
    If your backend is running on a different host or port, update the API variable at the top of src/App.js:
    const API = "http://localhost:8080/tasks";

6. **Tech Stack**
    - React
    - Axios
    - Java Spring Boot (Backend)