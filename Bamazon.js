var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "root",
    database: "bamazon_db",
});

//makes connection with db
connection.connect(function(err) {
    if (err) {
        throw err;
        console.log("ERROR: " + err);
    }
 // console.log("connection successful")

});

//prompt to make item selection
//still wanna create else statement if a product is entered that's not in the database
inquirer.prompt([

    {
        message: "Enter product",
        name: "name"
    }

]).then(function(answers) {

    // selects particular item from db
    connection.query("select * from surf_gear where product = ?", answers.name, function(error, response) {
        if (error) {
            throw error
        } else {

 //for loop which helps pick out specific item
            for (var i = 0; i < response.length; i++) {
//results below
               console.log("Product ID: " + response[i].Product_ID + "\nProduct: " + response[i].Product + "\nPrice: $" + response[i].Price + "\nDepartment: " + response[i].Department + "\nNumber Left In Stock: " + response[i].Stock);
            }
        }

 //second prompt to ask user amount they wanna buy
        inquirer.prompt([

            {
                message: "How many do you want to buy?",
                name: "name2"
            }

        ]).then(function(answers) {

            console.log("You wanna buy " + answers.name2);
            console.log(response[i].Stock);

 //if else statement below I'm 'betaing' 

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
