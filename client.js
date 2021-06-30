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
    let myName = 'had'; 
    // code that does something when the connection is first established
    console.log("Successfully connected to game server"); 
    // send string as a data for server 
    conn.write(`Name: ${myName}`);
   
    setInterval(() => { 
      conn.write(`Move: up`);
    }, 500);
    setInterval(() => { 
      conn.write(`Move: down`);
    }, 500);
    
    setInterval(() => {
      conn.write(`Move: left`);
       
    }, 800);
   
    setInterval(() => {
      conn.write(`Move: right`);
      
    }, 800);
    
     
  });
   
  conn.on('data', (data) => {
    console.log(data);
    // conn.write(`Move: up`);
    // conn.write(`Move: down`);
   setTimeout(() => {
   
     console.log("I move ")
   }, 1000);
   console.log('My data : ', data)
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