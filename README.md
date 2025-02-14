# Anmol Sharma's Portfolio

This is the source code for Anmol Sharma's personal portfolio website. It showcases projects, skills, and contact information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/website.github.io.git
    cd website.github.io
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm run dev
    ```

4. **Open the application**:
    Open your browser and navigate to `http://localhost:3000`.

## Usage

### Available Scripts

- **Start Development Server**:
    ```sh
    npm run dev
    ```
    Starts the development server.

- **Build for Production**:
    ```sh
    npm run build
    ```
    Builds the app for production.

- **Preview Production Build**:
    ```sh
    npm run preview
    ```
    Previews the production build locally.

- **Lint Code**:
    ```sh
    npm run lint
    ```
    Lints the code using ESLint.

## Project Structure

```plaintext
.
├── .gitignore
├── .vscode
│   ├── launch.json
│   └── tasks.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── index.css
│   ├── main.jsx
│   └── utils
├── tailwind.config.js
└── vite.config.js
