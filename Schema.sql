CREATE DATABASE bamazon_db;

USE bamazon_db;

 CREATE TABLE surf_gear(
Product_ID INT NOT NULL,
Product VARCHAR(45) NULL,
Department VARCHAR(45) NULL,
Price DECIMAL(10,2) NULL,
Stock INT NULL,
PRIMARY KEY (Product_ID)

); 


INSERT INTO `bamazon_db`.`surf_gear` (`Product_ID`, `Product`, `Department`, `Price`, `Stock`) VALUES ('1', 'Long Board', 'Boards', '300', '500');
INSERT INTO `bamazon_db`.`surf_gear` (`Product_ID`, `Product`, `Department`, `Price`, `Stock`) VALUES ('2', 'Short Board', 'Boards', '250', '400');
INSERT INTO `bamazon_db`.`surf_gear` (`Product_ID`, `Product`, `Department`, `Price`, `Stock`) VALUES ('3', 'Foamie', 'Boards', '100', '300');
INSERT INTO `bamazon_db`.`surf_gear` (`Product_ID`, `Product`, `Department`, `Price`, `Stock`) VALUES ('4', 'Leash', 'Parts', '80', '200');
INSERT INTO `bamazon_db`.`surf_gear` (`Product_ID`, `Product`, `Department`, `Price`, `Stock`) VALUES ('5', 'Wax', 'Accessories', '3', '1000');
INSERT INTO `bamazon_db`.`surf_gear` (`Product_ID`, `Product`, `Department`, `Price`, `Stock`) VALUES ('6', 'Fins', 'Parts', '60', '900');
INSERT INTO `bamazon_db`.`surf_gear` (`Product_ID`, `Product`, `Department`, `Price`, `Stock`) VALUES ('7', 'Full Wet Suit', 'Suits', '170', '400');
INSERT INTO `bamazon_db`.`surf_gear` (`Product_ID`, `Product`, `Department`, `Price`, `Stock`) VALUES ('8', 'Half Wet Suit', 'Suits', '130', '200');
INSERT INTO `bamazon_db`.`surf_gear` (`Product_ID`, `Product`, `Department`, `Price`, `Stock`) VALUES ('9', 'Ding Repair Kit', 'Accessories', '30', '800');
INSERT INTO `bamazon_db`.`surf_gear` (`Product_ID`, `Product`, `Department`, `Price`, `Stock`) VALUES ('10', 'Sunscreen', 'Accessories', '10', '400');
