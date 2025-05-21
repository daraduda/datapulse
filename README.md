# DataPulse

This is a React project built with Vite, TypeScript, Material-UI, react-router-dom, and ESLint. Follow the steps below to set up and run the project from scratch.

## Prerequisites
- Node.js (version 14.18+ or 16+ recommended) installed. Download from [nodejs.org](https://nodejs.org/).

## Setup Instructions


1. **Clone the repository**  
   Clone this repository to your local machine:   
git clone <repository-url>
cd datapulse


2. **Install core dependencies**  
Install Node.js dependencies for Vite and React:
npm install


3. **Install TypeScript**  
Add TypeScript and type definitions for React:
npm install typescript @types/react @types/react-dom --save-dev


4. **Install Material-UI**  
Add Material-UI and its dependencies, including Roboto font:
npm install @mui/material @emotion/react @emotion/styled @fontsource/roboto


5. **Install react-router-dom**  
Add routing capabilities with react-router-dom:
npm install react-router-dom @types/react-router-dom --save-dev


6. **Install ESLint and plugins**  
Add ESLint with TypeScript and React support:
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-airbnb --save-dev
start: npm run lint -- --no-warnings




## Running the Project
1. **Start the development server**  
Launch the project locally:
npm run dev


Open your browser at `http://localhost:5173` to view the app.
2. **Lint the code**  
Check code quality with ESLint:
npm run lint


To automatically fix linting issues:
npm run lint:fix


3. **Build for production**  
Create an optimized build:
npm run build


4. **Preview the production build**  
Test the production build locally:
npm run preview



## Notes
- Ensure all configuration files (`tsconfig.json`, `vite.config.ts`, `eslint.config.js`) are present in the root directory as provided in the repository.
- The project uses ESLint 9.x with a flat config (`eslint.config.js`).




## Running with Docker

1. **Build the Docker image**  
docker build -t datapulse .


**Run the container**
docker run -p 5173:5173 -v D:/Daraduda/github/datapulse/src:/app/src datapulse


