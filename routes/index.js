// Import necessary modules
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Create an Express app
const app = express();
const port = 3000;

// MongoDB connection setup
mongoose.connect('mongodb+srv://admin2:king51131@cluster0.teen9gn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true 
})

client.connect(err => {
    if (err) {
        console.error('MongoDB connection error:', err);
    } else {
        console.log('Connected to MongoDB');
        // You can perform database operations here
        // e.g., create collections, insert, update, or query data

        // Start the Express server after the MongoDB connection is established
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
});

// Define your Express routes and other application logic below
// ...

// You can use Express routes to handle different parts of your application
// Example:
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// ...

// Don't forget to close the MongoDB connection when your application exits
process.on('SIGINT', () => {
    client.close();
    process.exit();
});
