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


var bamazonArgument = process.argv[2];
switch (bamazonArgument) {

    case "Add Inventory":
        addInventory();
        break;

    case "Add New Product":
        addProduct();
        break;

};



// var ProductName = response[0].Product;
var ProductName = process.argv[3];



function addInventory() {

    inquirer.prompt([{

        message: "Which Product Do You wanna add to?",
        name: "ProductName"

    }]).then(function(answers) {

        console.log(answers.ProductName);



    });




    // console.log("You wanna add Inventory");

};


// function addProduct() {

//     console.log("You wanna add new Product");

// };

// var liriArgument = process.argv[2];
// switch (liriArgument) {

//     case "spotify-this":
//         spotifyMe();
//         break;
//     case "movie-this":
//         movieThis();
//         break;
//     case "tweet-this":
//         tweetThis();
//         break;
// };


inquirer.prompt([{
    message: "Welcome to Bamazon Manager! Either Add Inventory or Add New Product",
    name: "bamazonArgument"
}]).then(function(answers) {

    if (answers.bamazonArgument === "Add Inventory") {
        addInventory();
    }
    // if (answers.bamazonArgument === "Add New Product") {
    //     addProduct();
    // }
    else {
        console.log("ERROR");
        connection.end();


    }


});
