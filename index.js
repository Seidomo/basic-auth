'use strict';

require('dotenv').config();
const server = require('./src/server.js');
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');




// connects to a running mongo db
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(() => {
    server.start(PORT);
  });
  