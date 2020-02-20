const path = require('path');

const client = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

const server = (err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
};

module.exports={
  client,
  server
}
