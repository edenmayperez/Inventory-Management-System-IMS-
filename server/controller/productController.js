const mongoose = require('mongoose');
const Product = require('../../models/product');

mongoose.connect('mongodb://127.0.0.1:27017/product-db')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    });


exports.products = async(req, res) => {
    const products = await Product.find({});
    res.render('index',{products});
}


exports.addProductForm = (req, res) =>{
    res.render('new-product');
}


exports.addProduct = async(req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/products');

} 


exports.viewProduct = async (req, res) =>{
    const product = await Product.findById(req.params.id);
    res.render('show-product', {product});
}



exports.editProductForm = async (req, res) =>{
    const product = await Product.findById(req.params.id);
    console.log(product);
    res.render('edit-product', {product});
}



exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, { ...req.body });
    res.redirect(`/products/${id}`); // Corrected the typo here
};



exports.deleteProduct = async(req, res) => {
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
}




    
