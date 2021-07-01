const net = require("net");
const {setupInput} = require("./play"); 
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:"localhost",  // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    let myName = 'had'; 
    // code that does something when the connection is first established
    console.log("Successfully connected to game server"); 
    // send string as a data for server 
    conn.write(`Name: ${myName}`);
   
    // setInterval(() => { 
    //   conn.write(`Move: up`);
    // }, 500);
    setInterval(() => { 
      conn.write(`Move: down`);
    }, 500);
    
    setInterval(() => {
      conn.write(`Move: left`);
       
    }, 800);
   
    setInterval(() => {
      conn.write(`Move: right`);
      
    }, 800);
    setupInput();
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