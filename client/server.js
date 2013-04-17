var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(8844);
console.log('http://localhost:8844');
