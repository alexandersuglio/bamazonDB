var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "root",
    database: "bamazon_db",
});


inquirer.prompt([
    // var entry = process.argv[2];

    {
        name: "name",
        message: "Enter Product ID"
    }
    // {
    //     name: "name2",
    //     message: "How many do you wish to purchase?"
    // }

]).then(function(answers) {
var x = event.keyCode;

    if (answers.name < 1 || answers.name > 10 ) {
        console.log("No item found");
    } else {
        console.log("This product exists");
        connection.connect(function(err) {
            if (err) {
                throw err;
            } else {
                console.log("connected");
                console.log("surf_gear");
            }
        });
// var name = answers.name;        
// connection.query("SELECT product FROM surf_gear", function(err, res) {
//     if (err) throw err;
//     // console.log(res);
//     console.log(res);
// });
    }

});




// connection.query("SELECT PRODUCT, PRICE FROM surf_gear", function(error, result){
//     if (error) throw error;
//     console.log(result);
// })


