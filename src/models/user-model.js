'use strict';


const bcrypt = require('bcrypt');

const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // this should always be encrypted
  });

  const User = mongoose.model('users', userSchema);
  
  userSchema.pre('save', async function () {
    // this will refer to the instance being made
    console.log(this);
  });
  
  userSchema.statics.example = async function (request, response) {
    try{
    request.body.password = await bcrypt.hash(password, 5);
    const user = new User(request.body);
    const document = await user.save(request.body);
    res.status(201).json(document);
   }
   .catch(error){res.status(404).send('No Username Found!')}
  }

  module.exports = User;