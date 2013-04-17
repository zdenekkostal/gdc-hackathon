
var express = require("express"),
    httpProxy = require('http-proxy'),
    http = require('http');

var proxy = new httpProxy.RoutingProxy();
var app = express();

// statically link current dir
app.use(express.static(__dirname));

app.all('/repo*', proxyToBackend);
app.all('/coffee*', proxyToBackend);


function proxyToBackend(req, res) {
    var backendHost = 'goodhack.herokuapp.com';
    // White labeled resources are based on host header
    req.headers['host'] = backendHost;

    proxy.proxyRequest(req, res, {
        host: backendHost,
        port: 80
    });
}

server = http.createServer(app).listen(8844);
console.log('^^ Kitty (lightweight grizzly) server started on 8844');
