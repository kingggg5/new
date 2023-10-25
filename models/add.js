const mongoose = require('mongoose');
const Post = require('./models/post'); // Import your Mongoose Model

mongoose.connect('mongodb+srv://admin2:king51131@cluster0.teen9gn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const productsToAdd = [
    {
        name: 'Netflix',
        category: 'Streaming Service',
        body: 'Watch your favorite movies and TV shows',
        price: '49.99',
        image: 'https://example.com/netflix_image.png',
    },
    {
        name: 'Disney+',
        category: 'Streaming Service',
        body: 'Enjoy Disney movies and shows',
        price: '49.99',
        image: 'https://example.com/disney_image.png',
    },
    {
        name: 'Amazon Prime Video',
        category: 'Streaming Service',
        body: 'Stream exclusive content',
        price: '49.99',
        image: 'https://example.com/amazon_image.png',
    },
    // Add more product objects as needed
];

// Loop through the array and save each product
productsToAdd.forEach((product) => {
    const newProduct = new Post(product);
    newProduct.save()
        .then((savedProduct) => {
            console.log('Product saved:', savedProduct);
        })
        .catch((error) => {
            console.error('Error saving product:', error);
        });
});
