const User = require('../models/User');
const data = require('../data'); // Import ข้อมูล streamingData

module.exports = async (req, res) => {
    let UserData = await User.findById(req.session.userId)
    res.render('home',  {
        UserData,
        streamingData: data.streamingData, // ส่งข้อมูล streamingData ไปยัง EJS
        gamesData: data.gamesData
    });
}
