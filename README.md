# Frontend Project

## Introduction

This is a frontend project developed for Le Reacteur. The application is designed to showcase various functionalities using modern web development technologies.

## Features

- User authentication (sign up, login, and profile management)
- Display of character cards
- Navigation between different pages (home, characters, comics, favorites, etc.)
- Responsive design

## Technologies Used

- React.js
- JavaScript (ES6+)
- TailwindCSS

## Project Structure

The project is organized as follows:

```
frontend/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── img/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── Cards/
│   │   │   ├── Card.jsx
│   │   │   └── CharacterCard.jsx
│   │   ├── Connection/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── ProfilePicture.jsx
│   │   │   └── SignupForm.jsx
│   │   └── Header/
│   │       ├── Header.jsx
│   │       ├── ConnectButtons.jsx
│   │       └── NavButtons.jsx
│   │
│   ├── pages/
│   │   ├── Character.jsx
│   │   ├── Favorites.jsx
│   │   ├── Connection.jsx
│   │   ├── Comics.jsx
│   │   └── Home.jsx
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Setup and Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License.
