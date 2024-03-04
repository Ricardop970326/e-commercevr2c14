const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = process.env.PORT || 4000; // Use the port provided by the hosting environment or default to 4000

app.use(cors());
app.use(express.json());

// Endpoint to serve products from the CSV file
app.get('/api/products', (req, res) => {
  const products = [];
  fs.createReadStream('./products.csv') // Adjust the path to your CSV file accordingly
    .pipe(csv())
    .on('data', (data) => products.push(data))
    .on('end', () => {
      res.json(products);
    })
    .on('error', (err) => {
      console.error('Error reading/parsing CSV:', err);
      res.status(500).json({ error: 'Failed to read/parse CSV file' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const csv = require('csv-parser');

// const app = express();
// const port = 4000;

// app.use(cors());
// app.use(express.json());

// // Read CSV file and parse it into JSON
// const csvFilePath = './products.csv'; // Update with the actual path to your CSV file

// const products = [];
// fs.createReadStream(csvFilePath)
//   .pipe(csv({ separator: ', ' }))
//   .on('data', (data) => products.push(data))
//   .on('end', () => {
//     app.get('/api/products', (req, res) => {
//       res.json(products);
//     });

//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .on('error', (err) => {
//     console.error('Error reading/parsing CSV:', err);
//     process.exit(1);
//   });