const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Page = new Schema({
  title: {type: String, unique: true},
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('page', Page);
