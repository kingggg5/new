const express = require('express');
const router = express.Router();
const path = require('path'); // นำเข้าโมดูล path

// Import Mongoose model for products
const Product = require(path.join(__dirname, '../models/product')); // ใช้ path.join ในการระบุเส้นทางถูกต้อง

// Define routes for products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Retrieve products from MongoDB
    res.render('products', { products }); // Render a view to display the products
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/cart', (req, res) => {
  // Pass the products array to the template
  res.render('cart.ejs', { products: products });
});
// Add more routes as needed (e.g., create, update, delete)

module.exports = router;
