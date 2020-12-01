# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run it

In the project directory, you should execute:

1. ### `yarn`

This is going to install all required dependecies.

2. ### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

- The idea here was to create the simplest code without using any thrid-party library other than React, so there's a lot of areas where I would spend more time improving for a better project.

## Areas of improvement

- Usage of a state management like `Redux`, even though it's not a complex project
- Usage of a style library like `styled-components` to improve readability and maintainability of the code
  - Also, improving UI/UX since I could use advanced css features like media queries for a responsive page (mobile first)
- Usage of `PropTypes` or `TypeScript` for safer types.
- Creation of tests with `jest` to guarantee a always working application in all possible states
- Better visual error or empty states
- Optmization of what props are being passed down on components, I'm using just a few, but kept all of them on the model. 
- Probably we could make it visually better with loading states, images, icons and so on
- Optimization to fetch fork data (I'm fetching for all rows at once), pagination, lazy loading (GraphQL maybe)

## Screenshot

![Home screen](https://i.imgur.com/oDlORIn.png "Home screen")