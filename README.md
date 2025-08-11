# DTS Task Manager - Frontend (React)

This is the frontend for the DTS Task Manager project, built with [React](https://react.dev/) and [Axios](https://axios-http.com/).  
It connects to the Java Spring Boot backend to manage tasks for caseworkers.

# 🚀 Tech Stack
    - React 18+
    - Axios (for API calls)
    - HTML5 / CSS3 / JavaScript (ES6+)
    - Vercel (deployment)
    - Integration with Java Spring Boot backend

## 🚀 How to Run

1. **Clone the repository:**

   git clone https://github.com/christianecheverryp/dts-task-frontend.git

2. **Install dependencies**
    npm install

3. **Start the development server**
    npm start

    The app will open at http://localhost:3000 in your browser.

4. **Deployment**
    This project is deployed on Vercel.
    When changes are pushed to the main branch, Vercel automatically builds and deploys the app.

    Production URL:
    https://dts-task-frontend.vercel.app
    
5. **API Communication**
    The frontend interacts with the backend using the following endpoints:

    |Method	|Endpoint	        |Description
    |:---- |:---- |:----|
    |GET	|/tasks	            |List all tasks
    |GET	|/tasks/{id}        |Get task by ID
    |POST	|/tasks	            |Create new task
    |PUT	|/tasks/{id}        |Update task
    |PATCH	|/tasks/{id}/status	|Update only task status
    |DELETE	|/tasks/{id}    	|Delete a task

6. **Features**
   - Create a new task with title, description, due date, and status.
    - Edit existing tasks.
    - Delete tasks.
    - Update status directly from the list (Pending, In Progress, Done).
    - Validation errors from the backend are displayed under the form fields.

5. **Configuration**
    If your backend is running on a different host or port, update the API variable at the top of src/App.js:
    const API = "http://localhost:8080/tasks";

6. **Tech Stack**
    - React
    - Axios
    - Java Spring Boot (Backend)

***************************************************************************************************
******************************************************************************************************************
**DTS Task Manager – User Guide**
   The DTS Task Manager is a simple tool to create, edit, and manage tasks.
   It works entirely online, with your data stored in a secure cloud database.

**Accessing the Application**
   URL:
   https://dts-task-frontend.vercel.app

   You can use the app from any device with internet access.

**Main Interface Overview**
   When you open the app, you will see:
   1. Task Form (top of the page) – for creating or editing tasks.
   2. Task List (below) – shows all your tasks.
   3. Status Selector – quickly update the task’s status.

**How to Use**
   1. Creating a New Task
   Go to the form at the top of the page.

   2. Fill in:
   - Title – short name for the task (required).
   - Description – extra details (optional).
   - Due Date & Time – when the task should be completed (required).
   - Click "Create Task".

    If any required fields are missing, error messages will appear in red.

**Editing a Task**
   1. Find the task in the list.
   2. Click "Edit".
   3. The task information will appear in the form.
   4. Change what you need, then click "Update Task".
   5. If you change your mind, click "Cancel".

**Deleting a Task**
   1. Find the task in the list.
   2. Click the "Delete" button.
   3. The task will be removed permanently.

**Changing Task Status**
   1. Find the task in the list.
   2. Use the dropdown menu under Status.
   3. Choose one of:
      - Pending
      - In Progress
      - Done
   The update happens instantly.

**Validation Rules**
   The backend checks:
   - Title cannot be empty.
   - Due Date & Time must be in the future.
   - If invalid, an error message is returned and displayed below the input.

**Example Use Cases**
- Plan a meeting:
Title: "Team Meeting"
Description: "Discuss quarterly goals"
Due: 2025-08-20 14:00
Status: Pending

- Track bug fixes:
Title: "Fix Payment Gateway"
Description: "Resolve timeout error during checkout"
Due: 2025-08-15 18:00
Status: In Progress

- Organize personal tasks:
Title: "Buy Groceries"
Description: "Milk, Bread, Eggs"
Due: 2025-08-12 17:00
Status: Pending

**Tips**
- You can update status without editing the task.
- Dates and times adjust to your local timezone automatically.
- Refresh the page if you think tasks are not updating.