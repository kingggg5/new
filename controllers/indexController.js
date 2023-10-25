const express = require('express');
const router = express.Router();
const data = require('../data'); // Import ข้อมูลจากไฟล์ data.js

router.get('/', (req, res) => {
    res.render('index',  { streamingData: data.streamingData, gamesData: data.gamesData }); // ส่งข้อมูล streamingData ไปยัง EJS
});

module.exports = router;
