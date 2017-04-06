var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var {showBook} = require('./src/services/goodreadsService')();

module.exports = function (app) {
    var indexGet = function (req, res) {
        var url =
            'mongodb://localhost:27017/libraryApp';

        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');

            collection.find({}).toArray(
                function (err, results) {
                    res.render('bookListView', {
                        title: 'Books',
                        nav: app.nav,
                        books: results
                    });
                }
            );
        });

    };

    var singleGet = function (req, res) {
            var id = new objectId(req.params.id);
            var url =
                'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');

                collection.findOne({
                        _id: id
                    },
                    function (err, results) {
                        showBook(
                            results.goodReadsId,
                        function(data) {
                            res.render('bookView', {
                            title: 'Books',
                            nav: app.nav,
                            book: results,
                            goodreadsData: data
                        });

                        });
                    }
                );

            });

        };

    var middleware = function (req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    };
    return {
        indexGet: indexGet,
        singleGet: singleGet,
        middleware: middleware
    };
};