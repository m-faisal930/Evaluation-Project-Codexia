# Evaluation-Project

> Evaluation Project for AI Content Generation

This project is a web application for generating AI content, featuring a user-friendly interface to select content types and categories. It is built with React and Vite, and styled with Tailwind CSS.

## Features

- **Content Type Selection**: Simple interface to define the type of content.
- **Categorized Content Generation**: Tabs for different content categories like Fun, Education, Sports, News, Investment, and Facts.
- **Dynamic Content Options**: Each category presents specific options for content creation.
- **Adjustable Content Length**: A range slider to specify the desired length of the generated content.
- **Responsive Design**: The layout is responsive and works on different screen sizes.
- **Routing**: Uses React Router for page navigation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

- Node.js
- npm

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone <your-repository-url>
    ```
2.  Navigate to the project directory:
    ```sh
    cd Evaluation-Project
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

##  Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open http://localhost:5173 (or another port if 5173 is in use) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Serves the production build from the `dist` folder locally. This is a good way to check if the production build works correctly before deploying.

##  Folder Structure

Here's the basic structure of the project:

```
Evaluation-Project/
├── public/
├── src/
│   ├── assets/         # Images, fonts, and other static assets
│   ├── components/     # Reusable React components
│   ├── elements/       # Basic UI elements (e.g., Buttons)
│   ├── pages/          # Page components for routing
│   ├── App.jsx         # Main App component with routing setup
│   └── main.jsx        # Entry point of the application
├── .env                # Environment variables
├── index.html          # Main HTML file
├── package.json
└── README.md
```

## Built With

- React - The web framework used.
- Vite - Frontend tooling and development server.
- React Router - For routing and navigation.
- Tailwind CSS - For styling.
- React Icons - For icons.

---

_This README was generated for a Vite-based project. For a project created with `create-react-app`, the available scripts would typically be `npm start`, `npm test`, `npm run build`, and `npm run eject`._

