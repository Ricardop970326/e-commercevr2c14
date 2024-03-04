const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// Read CSV file and parse it into JSON
const csvFilePath = './products.csv'; // Update with the actual path to your CSV file

const products = [];
fs.createReadStream(csvFilePath)
  .pipe(csv({ separator: ', ' }))
  .on('data', (data) => products.push(data))
  .on('end', () => {
    app.get('/api/products', (req, res) => {
      res.json(products);
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .on('error', (err) => {
    console.error('Error reading/parsing CSV:', err);
    process.exit(1);
  });