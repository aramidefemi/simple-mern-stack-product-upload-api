var app = require("express").Router(),
    product = require('../controllers/ProductController');
reply = require('../utils/ResponseTransformerUtil');
const validator = require('express-validation');
const upload = require('../middleware/ImageUploadMiddleware');
const Joi = require('joi'); 

app.get('/', function (req, res) {
    var reply = {
        status: true,
        message: "Product APIs",
        payload: {
            "/product/lists": "retrieve product list",
            "/product/detail": "retrieve product details",
            "/product/create": "create new product details",
        }
    };
    res.json(reply);
});

app.get('/product/list', product.getList);

app.get('/product/detail/:id', validator({
    params: {
        id: Joi.string().required()
    }
}), product.getDetail);
 
app.post('/product/create',
upload.single("myImage"),
    product.create);
module.exports = app;