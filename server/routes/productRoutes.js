const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');




router.get('/', productController.products);
router.get('/new-product', productController.addProductForm);
router.post('/create-product', productController.addProduct);
router.get('/:id', productController.viewProduct);
router.get('/:id/edit', productController.editProductForm);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;