'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  optionA: String,
  optionB: String,
  title: String,
  authorId: String,
  votedForA: Number,
  votedForB: Number,
  pictureUrl: String,
  authorName: String
});




module.exports = mongoose.model('Nespera', schema);
