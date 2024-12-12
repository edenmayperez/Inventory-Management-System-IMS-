const mongoose = require('mongoose');
const Product = require('../models/product');

mongoose.connect('mongodb://127.0.0.1:27017/product-db')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    });

    const seedDB = async() =>{


        const products = new Product({
            product: "Ice Cream",
            quantity: '1',
            price: '50'     
        })
        
        await products.save();
    }

    seedDB().then(() =>{
        mongoose.connection.close();
    })
