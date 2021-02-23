'use strict';

require('dotenv').config();

const express = require('express');
const usermodel = require('./models/user-model.js')
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
// const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({ extended: true }));

const fiveHundredErr = require('./error-handlers/500.js');
const fourHundredErr = require('./error-handlers/404.js');
const router = require('./router/router.js');


app.use(express.json());
app.use(fiveHundredErr);
app.use(fourHundredErr);
app.use(router);


/// Mongoose Model ///
const usersSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  });
  const Users = mongoose.model('users', usersSchema);

  module.exports = {
      app : app,
      start : (port) => {
          app.listen(port, () => console.log('app is listening on port => ' + port ));
      }
  }
  

