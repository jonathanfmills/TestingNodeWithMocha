var http = require('http');
var xml2js = require('xml2js');
var parser = new xml2js.Parser({
    explicitArray: false
});

module.exports = function () {
    var showBook = function (id, cb) {
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/656?format=xml&key=mN1DyVoFS4cfbCMh5HmnpA'
        };

        var callback = function (response) {
            var str = '';

            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                parser.parseString(str,
                    function (err, result) {
                        cb(result.GoodreadsResponse.book);
                    }
                );
            });
        };

        http.request(options, callback).end();

    };

    return {
        showBook: showBook
    };

};