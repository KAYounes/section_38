// // // // // // // // // // // // // // //
// Imports

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");


// // // // // // // // // // // // // // //
// models

const Product = require("./models/product.js")


// // // // // // // // // // // // // // //
// utility

const tap = '\t';
const newline = '\n';


// // // // // // // // // // // // // // //
// Server

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, function(){
    console.log("Server is up and running on port ", port);
})


app.use(express.static(path.join(__dirname, "public")))

// // // // // // // // // // // // // // //
// connect to mongoose

mongoose.connect("mongodb://localhost:27017/products")
    .then(function(){
        console.log(newline, tap, "Connected to mongod")
    })
    .catch(function(error){
        console.log(newline, tap, "Failed to Connect")
    })


// // // // // // // // // // // // // // //
// Logic

app.get("/products", async function(request, response){
    const products = await Product.get_all_products();
    response.render("products/index.ejs", { products });
})

app.get("/products/:id", async function(request, response){
    const { id } = request.params;
    const product = await Product.get_product_by_id(id);
    response.render("Products/product_details.ejs", { product })
})
