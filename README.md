# BooksToDo
Hi this is a book app where you can add books to your list and remove them. You can also search for books using the search button. This app is built using React, Node.js, and Express. The data is fetched from the Google Books API. The app is designed to be user-friendly and easy to navigate. You can add books to your list by clicking on the add button. You can also remove books from your list by clicking on the remove button. The app is still in development and more features will be added in the future. If you have any suggestions or feedback, please feel free to contact us. Thank you for using our app!

# 📚 BooksToDo-App

## 📌 Project Overview

**BooksToDo-App** is a full-stack application that allows users to search for books using the Google Books API and maintain a personal "to-read" list. It enables readers to discover, save, and manage books they'd like to read—all from a clean, responsive UI.

- **Purpose**: To help users track and manage their reading goals.
- **Use-case**: Personal book planner and reading checklist.
- **Target users**: Avid readers, students, book clubs, and anyone who enjoys reading and organizing their book lists.

## 🚀 Features

- 🔍 Search for books via the Google Books API
- ➕ Add selected books to a personalized reading list
- 🗑️ Remove books from your saved list
- 🖥️ Clean, responsive UI using React
- 🧩 Modular frontend architecture
- 🌐 Planned backend with authentication and database support

## 🛠️ Tech Stack

| Layer            | Tools / Libraries                                 |
|------------------|----------------------------------------------------|
| **Frontend**     | React                                              |
| **Backend**      | Node.js, Express (planned)                         |
| **Templating**   | — (React SPA)                                      |
| **Database**     | MongoDB with Mongoose (planned)                    |
| **Middleware**   | `cookie-parser`, custom auth middleware (future)   |
| **Validation**   | `validator` (future backend)                       |
| **Environment**  | `dotenv`                                           |
| **Styling**      | CSS                                                |

## 📚 Libraries and Dependencies

- `axios` – For API calls to Google Books and backend services
- `react-router-dom` – Client-side routing between pages
- `dotenv` – Manage environment variables securely
- `mongoose`, `validator`, `cookie-parser` – Planned for backend logic

## 🏧 Project Structure

```
/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   └── src/
│       ├── api/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       └── App.js
├── package.json
├── README.md

```


## ⚙️ Environment Configuration

Create a `.env` file at the project root and populate the required variables as below.

```Sample .env
REACT_APP_MY_KEY=your_api_key_here
```
### 📝 Description of Variables

| Variable             | Description                                   |
|----------------------|-----------------------------------------------|
| `REACT_APP_MY_KEY`   | API key for Google Books API                  |


## 📡 API Documentation

### Auth Endpoints (Planned)

- `POST /signup` – Register a new user  
- `POST /login` – Authenticate an existing user  
- `GET /logout` – Logout current session  

### CRUD Endpoints

- `GET /items` – Fetch all books from user’s list  
- `POST /items` – Add a book to the list  
- `GET /items/:id` – Get details of a specific item  
- `PUT /items/:id` – Update item details  
- `DELETE /items/:id` – Remove a book from the list  

**Public API Used**: [Google Books API](https://developers.google.com/books)

## 🔒 Authentication & Authorization

*Planned:* The app will use **JWT-based authentication** with secure cookies or headers. Middleware will protect routes, and ownership checks will prevent unauthorized access to other users’ data.

## 🔧 Setup Instructions

1. Clone the repo  
   ```bash
   git clone https://github.com/Akshat-Gupta-2005/BooksToDo-App.git
   cd BooksToDo-App
   ```

2. Configure environment variables  
   - Create a `.env` file as listed above

3. Install dependencies and start the Frontend server  
   ```bash
   cd Frontend
   npm install
   npm start
   ```

4. Install dependencies and start the Backend server  
   ```bash
   cd Backend
   npm install
   npm start
   ```

## 🧠 Concepts Learned
- React component-based architecture

- Client-side routing with React Router

- API integration and environment configuration

- (Planned) JWT authentication, MongoDB with Mongoose

- Secure handling of secrets using .env files

- Clean code and modular project structure

