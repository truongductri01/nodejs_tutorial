const sayName = () => {
  console.log("Hello there my friend");
};

const sayAddress = () => {
  console.log("Johnson Street");
};

// exports multiple module
module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;
