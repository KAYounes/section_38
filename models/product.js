// // // // // // // // // // // // // // //
// imports
const mongoose = require("mongoose");


// // // // // // // // // // // // // // //
// defining schema

const product_schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            min: 0,
            required: true
        },

        category: {
            type: String,
            lowercase: true,
            enum: ['fruit', 'vegetable', 'dairy']
        }
    }
)


product_schema.statics.get_all_products = async function(){
    return await this.find({})
}

product_schema.statics.get_product_by_id = async function(id){
    return await this.findById(id);
}


// // // // // // // // // // // // // // //
// defing model 

const Product = mongoose.model('Product', product_schema);

// Product.get_all_products()
//     .then(function(response){
//         console.log("Response is: ", response);
//     })

// // // // // // // // // // // // // // //
// export model

module.exports = Product;