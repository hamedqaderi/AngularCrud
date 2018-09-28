const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  body: String,
  category_id: String,
});

module.exports = mongoose.model('post', postSchema, 'posts'); 