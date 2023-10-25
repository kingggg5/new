app.get('/', (req, res) => {
    const product = {
      img: "https://cdn.discordapp.com/attachments/726406201927008276/1014598572395733134/disney.png",
      title: "Disney",
      star: 5,
      reviews: 123,
      prevPrice: 599.0,
      newPrice: 149.0,
      description: "Enjoy Disney movies and shows",
      category: "streaming",
    };
  
    res.render('index', { product: product });
  });
  