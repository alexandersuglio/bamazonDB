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

var message = "Welcome to Bamazon! What Are You Looking For?";
//prompt to make item selection
inquirer.prompt([

    {
        message: message,
        name: "name"
    }

]).then(function(answers) {

    // selects particular item from db
    connection.query("select * from surf_gear where product = ?", answers.name, function(error, response) {
        // console.log(response.length);
        if (response.length === 0) {
            console.log("ERROR: Product not found");
            return
        }

        console.log("Product ID: " + response[0].Product_ID + "\nProduct: " + response[0].Product + "\nPrice: $" + response[0].Price + "\nDepartment: " + response[0].Department + "\nNumber Left In Stock: " + response[0].Stock);

        //second prompt to ask how many items you want to buy
        inquirer.prompt([{
            message: "How many do you wanna buy?",
            name: "name2"
        }]).then(function(answers) {


            if (answers.name2 <= response[0].Stock) {
                console.log("You wanna buy " + answers.name2);
                var remainingInventory = response[0].Stock - answers.name2;
                console.log("Inventory Remaining: " + remainingInventory);
                console.log("Price: $" + answers.name2 * response[0].Price + ".00");

                connection.query("UPDATE surf_gear SET Stock = " + remainingInventory + " where Product_ID = " + response[0].Product_ID, function(error, response) {

                    if (error) {
                        console.log("ERROR COMPLETING ORDER");
                    } else { console.log("Thank you for ordering Bamazon!"); }
                connection.end();

                });

            } else {
                console.log("ERROR: Insufficient Stock");
                return
            }


        });


    });



});




//     users SET foo = ? function (error, results) {
//   if (error) throw error;
//   // ... 
// });
