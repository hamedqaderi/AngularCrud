const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = require('../models/category');
const Post = require('../models/post');

const db = "mongodb://hamed1363:40Minutes@ds113693.mlab.com:13693/hamed-blog";
mongoose.Promise = global.Promise;
mongoose.connect(db, {useNewUrlParser: true}, function(err) {
  if(err) {
    console.log("Error! " + err);
  }
});

// Hanlde Category Requests
router.get('/categories', (req, res) => {
  console.log('Get request fo all categories');
  Category.find({}).exec((err, categories) => {
    if(err) {
      console.log("Error retreiving data from categories table");
    } else {
      res.json(categories);
    }
  });
});

router.get('/categories/:id', (req, res) => {
  console.log("Get a specific category by Id");
  Category.findById(req.params.id).exec((err, category) => {
    if (err) {
      console.log("Error get a specific category.");
    } else {
      res.json(category);
    }
  });
});

router.post('/category', (req, res) => {
  console.log("Request saving a new category");
  var newCategory = new Category();
  newCategory.name = req.body.name;
  newCategory.save((err, insertedCategory) => {
    if (err) {
      console.log('Error saving data into category');
    } else {
      res.json(insertedCategory);
    }
  });
});

router.put('/category/:id', (req, res) => {
  console.log("Update a category");
  Category.findByIdAndUpdate(
    req.params.id,
    { $set: { name: req.body.name } },
    { new: true },
    (err, updatedCategory) => {
      if (err) {
        res.send('Error updating category ' + err);
      } else {
        res.json(updatedCategory);
      }
    }
  );
});

router.delete('/category/:id', (req, res) => {
  console.log('Delete a category');
  Category.findByIdAndRemove(
    req.params.id,
    (err, deletedCategory) => {
      if (err) {
        console.log('Error deleting category.');
      } else {
        res.json(deletedCategory);
      }
    }
  );
});

// Handle Posts Requests
router.get('/posts', (req, res) => {
  console.log('Show all posts');
  Post.find({}).exec((err, posts) => {
    if (err) {
      console.log("Error retreiving data from categories table.");
    } else {
      res.json(posts);
    }
  });
});

router.get('/posts/:id', (req, res) => {
  console.log('Get a specfic post by id');

  Post.findById(req.params.id).exec((err, category) => {
    if (err) {
      console.log("Error get a specific post");
    } else {
      res.json(category);
    }
  });
});

router.post('/post', (req, res) => {
  console.log('Create a new post');
  let newPost = new Post();
  newPost.title = req.body.title;
  newPost.body = req.body.body;
  newPost.category_id = req.body.category_id;

  newPost.save((err, insertedPost) => {
    if(err) {
      console.log("Error saving new post.");
    } else {
      res.json(insertedPost);
    }
  });
});


router.put('/post/:id', (req, res) => {
  console.log('Update a post');
  Post.findByIdAndUpdate(
    req.params.id,
    { $set: 
      { 
        title: req.body.title,
        body: req.body.body,
        category_id: req.body.category_id
      }
    }, 
    { new: true },
    (err, updatedPost) => {
      if (err) {
        res.send('Error updating post ' + err);
      } else {
        res.json(updatedPost);
      }
    }
  );
});

router.delete('/post/:id', (req, res) => {
  console.log('Delete a post');
  Post.findByIdAndRemove(
    req.params.id,
    (err, deletedPost) => {
      if (err) {
        console.log('Error deleting a post.');
      } else {
        res.json(deletedPost);
      }
    }
  )
});


module.exports = router;