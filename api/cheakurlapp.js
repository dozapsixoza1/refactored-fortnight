// Соответствует /app/cheakurlapp.php — данные о моде/файлах игры
const config = require('./config');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json(config.download);
};
