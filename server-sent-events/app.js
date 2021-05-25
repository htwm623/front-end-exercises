const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static("public"))

app.get('/api', function (req, res, next) {
  res.writeHead(200, {
    'Connection': 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache'
  });

  res.write('retry: 1000\n');

  res.write('data: Test default event name\n\n');
  // default event: message
  res.write('event: init\n');
  res.write('data: this is a init event \n\n');
  res.flushHeaders();

  const timer= setInterval(function () {
    res.write('event: update\n');
    res.write('data: this is a update evnet\n\n');
    res.flushHeaders();
  }, 1000);

  res.connection.on('close', function () {
    console.log('Connection was closed.');
    clearInterval(timer);
  });
})

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`)
})