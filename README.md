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