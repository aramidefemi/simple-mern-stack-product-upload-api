const product = require('../models/ProductModel');
const reply = require('../utils//ResponseTransformerUtil');
const upload = require('../middleware/ImageUploadMiddleware');

var functions = {
    'getList': (req, res) => {
        var query = product.find().select(['name', 'price']);
        query.exec()
            .then(doc => {
                reply.pass(res, doc);
            })
            .catch(err => {
                reply.fail(res, err);
            });
    },
    'getDetail': (req, res) => {
        var query = product.findById(req.params.id);
        query.exec()
            .then(doc => {
                reply.pass(res, doc);
            })
            .catch(err => {
                reply.fail(res, err);
            });
    },
    'create': (req, res) => {
        var params = req.body; 
        var doc = new product({
            name: params.name,
            description: params.description,
            price: params.price,
            category: params.category,
            image: req.file.filename,
            color: params.color,
        });
        doc.save((err) => {
            if (err) {
                reply.fail(res, err);
            } else {
                reply.pass(res, doc);
            }
        })

    }
}


module.exports = functions;