react-sample
============
## Overview  
This is React sample and tutorial to learn React.  
This includes React + Redux.  

This is under construction!!!

## Requirement
[node](https://nodejs.org/en/)  
[webpack2](https://webpack.js.org/)  
[babel](https://babeljs.io/)  
[express](http://expressjs.com/)  

## Run
    npm install
    webpack  
    webpack-dev-server  

## Run (Backend test server)
To work with Ajax request, we need to run nodeapp
    cd nodeapp
    npm install
    node app.js
 
You can access http://localhost:3000/data/data.json as test.  

## Source Structure
react-sample  
|- dist : Build result
|- nodeapp : Node application to test Ajax request etc...  
|- src  : Main source codes
|   |- actions  : Action  
|   |- components : React components  
|   |- const : Constant data  
|   |- pages : Page components  
|   |- reducers : Reducers
|   |- styles : CSS, SCSS files
|   |- entry point
|- .babelrc : Babel setting  
|- index.html : Template html to create html template with htmlplugin  
|- package.json  
|- README.md  
|- webpack.config.js  
|- config  
     |- helpers.js  
     |- webpack.common.js  
     |- webpack.dev.js  
     |- webpack.prod.js  
     |- webpack.stg.js  

## Tutorial  
1. Webpack2  
2. Hello React  
3. LocalState  
4. React + Redux  
5. React Router(react-router-dom)
6. React Ajax
7. ReactForm  

## Webpack2

## Hello React!

## License  
[MIT]  

## Author  
[DJ110](http://atmarkplant.com)  