import express from 'express'

const app = express();
const PORT = 3000;
let products = [
    { "id": 1, "name": "laptop", "price": 3222 },
    { "id": 2, "name": "Webcap", "price": 1233 },
    { "id": 3, "name": "laptop", "price": 3222 },
    { "id": 4, "name": "Webcap", "price": 1233 }
];
app.get('/', (req, res) => {
  res.send('Hello, this is test server (: !');
});

app.get('/products', (req, res) => {
  res.send({
    massge: 'Products List ',
    payload : products
  });

});

app.get('/products:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id == id);
  res.send({
    massge: 'Product info  ',
    payload : product
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
