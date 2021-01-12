// The fs module provides a lot of very useful functionality to access and interact with the file system.

const fs = require("fs");

// Create a new file with a specific content
// fs.writeFile("message.txt", "Hello there node", (err) => {
//   console.log(err);
// });

// Read a file
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;

  console.log(data);
});
