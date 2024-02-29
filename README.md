# Namaste React 

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithm = written in C++
- Faster Build
- Image optimzation
- Minification
- Bundling
- Compress
- tree Shaking = remove unused code


# There are two type of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/import

export const Component;
import {Component} from "path";

# React Hooks

- React hooks is a normal javascript function at last.

Two important hooks:
- useState() hook used for create superpowerfull react variable
- useEffect() hook is a typr of hook which accept two arguments :
- first argument is a callback function or arrow function like :   () => {}
- Second argument is dependencies array
- The useEffect hook will be called after the UI is rendered


- Whenever a state variable update, React will rerender this component


# 2 type of routing in app
 - Client Side Routing
 - Server Side Routing


# Recommended css framework
 - Material ui
 - Chakra ui
 - Bootstrap
 - Ant ui

 # Higher Order Component 
  - Higher order componet is funcion that takes a compenent and return a component

 # React Context
  - Instead of using the props drilling, we can use react context for giving an access of data to all the components.\

 # Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to app
  - Create a Slice (cart slice)
  - Dispatch an action
  - Selector

 # Two type of Testing 
  - Unit Testing
  - Integration Testing
  - End to End Testing -> e2e testing.

 # Setting up testing in our app
  - Installing React Tesing Library
  - Installing Jest
  - Installing babel dependencies
  - Configure babel
  - Configure parcel config file to disable default babel transpilation
  - Jest Configuration => npx jest --init
  - Install jsdom library => npm install --save-dev jest-environment-jsdom
  - Install @babel/preset-react this for working the jsx for testing
  - Include @babel/preset-react this into babel
  - Installing the library npm i -D @testing-library/jest-dom