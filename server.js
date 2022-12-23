const express = require('express');
const db = require('./config/connection'); //MongoDB
const routes = require('./routes');

const PORT = 3001; //Just running locally so can just declare port
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {app.listen(PORT, () => {
    console.log(`Now listening at http://localhost:${PORT}/`);
  });
});