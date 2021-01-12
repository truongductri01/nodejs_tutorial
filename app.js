// Within a file, we can access to: exports, require, module, __filename, __dirname

// Node
const name = "Dev ED";
const getUserInfo = require("./sayName");
getUserInfo.sayName();

// Console the __filename and __dirname of the file
console.log(`File's name ${__filename}`);
console.log(`Directory's name ${__dirname}`);
