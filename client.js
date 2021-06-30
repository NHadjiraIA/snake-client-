const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:"135.23.223.133",  // IP address here,
    port: 50542 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('you ded cuz you idled');
  });

  return conn;
};
console.log("Connecting ...");
connect();
// fileA.js

const myNumber = 42;
const myString = "hello";
const myFunction = () => {
  // myFunction's code
};

module.exports = {
  myNumber, // stores 42 as myNumber
  myString, // stores "hello" as myString
  myFunction, // stores the function as myFunction
};