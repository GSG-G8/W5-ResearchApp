const path = require('path');
const exports = ('express');

exports.client = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', 'Public', '404.html'));
};

exports.server = (err, req, res, next) => {
  console.log(err.message);
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'Public', '500.html'));
};

module.exports = exports;

