const mongoose = require('mongoose');
module.exports = ()=>{
    const connectDB = mongoose.connect('mongodb+srv://admin2:king51131@cluster0.teen9gn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((client) => {
    console.log('Connected to MongoDB Cloud');
    const db = client.connection.db;
  })
  .catch((error) => console.error('Error connecting to MongoDB Cloud:', error));
}