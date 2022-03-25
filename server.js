const express = require('express');

const db = require('./db');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.json());
// app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('API ON');
});

require('./controllers/pokeController')(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);