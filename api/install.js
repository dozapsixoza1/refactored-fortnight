// Соответствует /app/install.php — лог клика "установить"
// Лаунчер дергает этот урл в фоне и не ждёт особого ответа, просто 200 OK.
module.exports = (req, res) => {
  const { type_install, hash, ip, model } = req.query || {};
  console.log('install click:', { type_install, hash, ip, model });
  res.status(200).send('OK');
};
