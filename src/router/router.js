'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const base64 = require('base-64');


  
  
  // create a new User, with a username / password.  The password should always be encrypted before saving.
  router.post('/signup', async (req, res) => {
  
    let username = req.body.username;
    let password = req.body.password;
  
    // encrupt immediately
    let encryptedPassword = await bcrypt.hash(password, 5);
    // create our user
    const newUser = new UserModel({ username: username, password: encryptedPassword });
    const document = await newUser.save();
  
    // send user to the client.
    res.status(201).json(document);
  });
    
  router.post('/signin', async (req, res, next) => {

    res.send('blabla')
  });
  module.exports = router;