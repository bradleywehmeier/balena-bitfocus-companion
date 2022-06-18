var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
	var fullUrl = (req.protocol || 'http') + '://' + req.headers.host + req.url;
	var redirectUrl = new url.URL(fullUrl);
	redirectUrl.port = 8000
	res.writeHead(302, { 'Location': redirectUrl.toString() });
	res.end();
});

server.listen(80);
