var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "root",
    database: "bamazon_db",
    // port: 3306

});

connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("connected");
    }
});


// connection.query("SELECT * FROM surf_gear", function(err, res) {
//     if (err) throw err;
//     console.log(res);
// });


connection.query("SELECT PRODUCT, PRICE FROM surf_gear", function(error, result){
    if (error) throw error;
    console.log(result);
})



