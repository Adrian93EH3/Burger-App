// Set up MySQL connection
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "Aqua5961!",
//   database: "burger_db"
// });

// PDF HELP FOR HEROKU DEPLOYMENT
// ===================================
var connection;

if (process.env.JAWSB_URL) {
    connection = mysql.createConnection(process.env.JAWSB_URL);
} else {
    connection = mysql.createConnection( {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Aqua5961!",
        database: "burger_db"
    });
};

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;
