// Соответствует /app/cheakverapp.php — проверка версии ЛАУНЧЕРА
const config = require('./config');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json(config.launcher);
};
