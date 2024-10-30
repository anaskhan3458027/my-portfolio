// server/routes/blogs.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Blog model (see below)

router.post('/', async (req, res) => {
  try {
    const { title, slug, content } = req.body;
    const newBlog = new Blog({ title, slug, content });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog' });
  }
});

module.exports = router;
