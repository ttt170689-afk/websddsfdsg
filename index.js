const { createServer } = require('prismarine-web-client');
const port = process.env.PORT || 8080;
createServer({
  port: port,
  host: '0.0.0.0'
});