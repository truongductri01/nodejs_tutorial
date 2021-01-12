// The path module provides a lot of very useful functionality to access and interact with the file system.

const path = require("path");

// Join the path
const fileLocation = path.join(__dirname, "app.js");
console.log("File location >>>", fileLocation);
// Get the file name from the path
const fileName = path.basename(fileLocation);
console.log("File name >>>", fileName);
// Get the extension name
const fileExt = path.extname(fileName);
console.log(fileExt);
