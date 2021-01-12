# NODE.JS

Node.js makes JavaScript run outside of the browser (no need for HTML to see the result returned from the script)

> Neither a framework or programming language

### SetUp

1. Install node.js: [here](https://nodejs.org/en/)
2. Check if it is installed correctly. Type the code in the terminal  
   <code>node --version  
   npm --version
   </code>

# Run Code using Node

Create a javascript file, "app.js" for example
Inside the app.js, put in the example code: <code>console.log("Hello World")</code>

> Then just need to run <code>node app</code> in the terminal

# Difference from Node.js and normal Browser Js

Browser JS:

1. Before the code run, the **window** object is already created
2. The code can access any element shown on the window using <code>document.querySelector(\<classname>)</code>
3. Every thing is created on top of that existed **window** object

Node JS:

1. **Module** based: everything only exist within the code file
2. To use a **module**, it is needed to be exported and imported
   - Export a function call sayName:  
     <code>module.exports = sayName;</code>
   - Import the function (the path to the file may change based on your code's order):  
     <code>const sayName = require("./sayName")</code>

# Modules covered in the code

1. Path module: provides a lot of very useful functionality to access and interact with the file system. [Path module's documentation](https://nodejs.dev/learn/the-nodejs-path-module)
2. url module
3. fs module
4. http module

<hr>

### Should init every project with npm

> Run code <code>npm init</code> in the terminal

<hr>

### Dependecy to install

1. Nodemon: a live server for node.js
   <code>nodemon app.js</code>  
   So every time the app.js file is changed, nodemon will automatically re-run
