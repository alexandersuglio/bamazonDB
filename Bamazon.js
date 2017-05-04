var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "root",
    database: "bamazon_db",
});

connection.connect(function(err) {
    if (err) {
        throw err;
        console.log("ERROR: " + err);
    }
    // console.log("connection successful")

});

inquirer.prompt([

    {
        message: "Enter product",
        name: "name"
    }

]).then(function(answers) {

    // var i; 
    connection.query("select * from surf_gear where product = ?", answers.name, function(error, response) {
        if (error) {
            throw error
        } else {

            for (var i = 0; i < response.length; i++) {

                console.log("Product ID: " + response[i].Product_ID + "\nProduct: " + response[i].Product + "\nPrice: $" + response[i].Price + "\nDepartment: " + response[i].Department + "\nNumber Left In Stock: " + response[i].Stock);
            }
        }


        inquirer.prompt([

            {
                message: "How many do you want to buy?",
                name: "name2"
            }

        ]).then(function(answers) {

            console.log("You wanna buy " + answers.name2);
            console.log(response[i].Stock);


            // if (answers.name2 > response[i].Stock) {
            //     console.log("insuffient stock");

            // } else {
            //     console.log("Remaining Stock: " + response[i].Stock - answers.name2);
            // }
            // for (var j; j < response.length; j++) {
            //     // console.log("you wanna buy " + answers.name2);
            //     console.log(response[j].Stock);
            // }
        });
        // if (answers.name === undefined) {
        //     console.log("Item not found, please try again");
        // }

    })
});
