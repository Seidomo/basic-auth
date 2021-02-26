'use strict';

require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();

const authRouter = require('./router/router.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);

module.exports = {
  app: app,
  start: () => {
    app.listen(PORT, () => console.log('App is running on PORT ==> ' + PORT));
  }
}
