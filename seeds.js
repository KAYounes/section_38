// // // // // // // // // // // // // // //
// Imports

const mongoose = require("mongoose");


// // // // // // // // // // // // // // //
// models

const Product = require("./models/product.js")


// // // // // // // // // // // // // // //
// connect to mongoose

mongoose.connect("mongodb://localhost:27017/products")
    .then(function(){
        console.log("Connected to mongod")
    })
    .catch(function(error){
        console.log("Failed to Connect")
    })


// // // // // // // // // // // // // // //
// populate daatabase

// const product = new Product({
//     name: "Ruby Grapefruit",
//     price: 1.99,
//     category: 'fruit'
// })

// product.save()
//     .then(function(p){
//         console.log("Item Added to DB\n", product);
//     })
//     .catch(function(error){
//         console.log("Error is ", error);
//     })

const products_seed = 
[
    {
        name: "Fairy Eggplant",
        price: 1.00,
        category: "Vegetable"
    },
    {
        name: "Organic Goddess Melon",
        price: 4.99,
        category: "fruit"
    },
    {
        name: "Organic Mini Seedless Watermelon",
        price: 3.99,
        category: "fruit"
    },
    {
        name: "Organic Celery",
        price: 1.50,
        category: "vegetable"
    },
    {
        name: "Chocolate Whole Milk",
        price: 2.69,
        category: "dairy"
    }
]

Product.insertMany(products_seed)
    .then(function(ack){
        console.log("Items Added: ", ack);
    })
    .catch(function(error){
        console.log("Error: ", error);
    })
// Everything must pass validation, else nothing is inserted

