const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Product = mongoose.model('Product', {
  img: String,
  title: String,
  days: Number,
  points: Number,
  newPrice: Number,
  category: String
});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// API endpoint to fetch products with filters
router.get('/products', async (req, res) => {
  const { query, selectedCategory } = req.query;

  let filter = {};

  if (query) {
    filter.title = new RegExp(query, 'i');
  }

  if (selectedCategory) {
    filter.$or = [
      { category: selectedCategory },
      { newPrice: selectedCategory },
      { title: selectedCategory },
    ];
  }

  try {
    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const productsRouter = require('./products'); // นำเข้าไฟล์ products.js

app.use('/routes', productsRouter); 

module.exports = router;
