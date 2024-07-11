import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 101,
      name: "Wireless Earbuds",
      price: 59.99,
      image: "https://example.com/images/wireless-earbuds.jpg",
    },
    {
      id: 102,
      name: "Smart Watch",
      price: 199.99,
      image: "https://example.com/images/smart-watch.jpg",
    },
    {
      id: 103,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://example.com/images/bluetooth-speaker.jpg",
    },
    {
      id: 104,
      name: "Gaming Mouse",
      price: 49.99,
      image: "https://example.com/images/gaming-mouse.jpg",
    },
    {
      id: 105,
      name: "Fitness Tracker",
      price: 129.99,
      image: "https://example.com/images/fitness-tracker.jpg",
    },
    {
      id: 106,
      name: "4K Monitor",
      price: 349.99,
      image: "https://example.com/images/4k-monitor.jpg",
    },
    {
      id: 107,
      name: "Mechanical Keyboard",
      price: 89.99,
      image: "https://example.com/images/mechanical-keyboard.jpg",
    },
    {
      id: 108,
      name: "Portable Charger",
      price: 39.99,
      image: "https://example.com/images/portable-charger.jpg",
    },
    {
      id: 109,
      name: "Virtual Reality Headset",
      price: 299.99,
      image: "https://example.com/images/vr-headset.jpg",
    },
    {
      id: 110,
      name: "Noise Cancelling Headphones",
      price: 199.99,
      image: "https://example.com/images/noise-cancelling-headphones.jpg",
    },
  ];
  //   http://localhost:3000/api/products?search=

  if (req.query.search) {
    const filterProduct = products.filter((product) =>
      product.name.includes(req.query.search)
    );

    res.send(filterProduct);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Running On port ${port}`);
});
