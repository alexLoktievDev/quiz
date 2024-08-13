# Quiz Application

This is a Quiz application built with Next.js, utilizing various components and features to deliver a dynamic and interactive user experience.

## Available Scripts

In the project directory, you can run:

### `yarn dev`
Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `yarn build`
Builds the app for production to the `.next` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn start`
Starts the application in production mode. The app should be built with `yarn build` first.

### `yarn lint`
Runs the linter to analyze code for potential errors and code style issues.

### `yarn lint:fix`
Runs the linter and automatically fixes linting issues wherever possible.

### `yarn lint:styles`
Lints styles using Stylelint on all files matching `src/**/*.{js,jsx,ts,tsx,css}`.

### `yarn prepare`
Sets up Husky hooks. Husky is used to manage Git hooks.

### `yarn storybook`
Runs Storybook, an isolated environment for developing UI components.  
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.

### `yarn build-storybook`
Builds the Storybook application, creating a static version of the Storybook in the `storybook-static` directory.

## Main Components

### `pages/index.ts`

This component serves as the entry point for the application. It handles the setup of the quiz process by configuring the stepper that navigates through the quiz steps. It manages the flow from the initial screen, through the quiz questions, to the final screen, and provides the questions data to the relevant components.

### `QuizScreen.tsx`

This component is responsible for rendering the quiz questions to the user. It handles user interactions, such as selecting answers, and manages the state of the quiz. It determines if the selected answers are correct and navigates to the next question or step based on user input. It also includes logic for handling multiple answers and disabling incorrect options once chosen.

### `StepperLayout.tsx`

The `StepperLayout` component provides a layout structure that includes both the main content (such as quiz questions) and a sidebar. This layout is used to maintain a consistent structure across different steps of the quiz process.

### `InfoScreenLayout.tsx`

This component is used to display informational screens within the application, such as the initial or final screens. It manages the layout and presentation of information, including text and interactive elements like buttons.

### `HexagonalItem.tsx`

The `HexagonalItem` component is a reusable UI component designed for displaying items in a hexagonal shape, commonly used for quiz answers. It includes support for different states such as selected, correct, and disabled. It handles the interaction logic for selecting and deselecting items, and is used throughout the quiz screens.

## Additional Information

This application is built with Next.js and utilizes TypeScript for type safety. Components are styled using styled-components, and Storybook is used for developing and testing UI components in isolation.
