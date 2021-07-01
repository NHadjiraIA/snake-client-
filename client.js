const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,  // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    let myName = 'had'; 
    // code that does something when the connection is first established
    console.log("Successfully connected to game server"); 
    // send string as a data for server 
    conn.write(`Name: ${myName}`);
  }); 

  conn.on('data', (data) => {
   console.log('My data : ', data)
  });
  return conn;
};
console.log("Connecting ...");

module.exports = {connect};