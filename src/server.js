//////code for hosting

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000; // Use the provided port or default to 4000

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./products.sql');

app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});











/////original code for the running in the pc 

// const express = require('express'); 
// const mysql = require('mysql2'); 
// const cors = require('cors'); 


// const app = express(); 
// const port = 4000; 

// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(express.json()); // Parse JSON data in the request body

// const db = mysql.createConnection({
//   host: 'localhost', //  host
//   user: 'root', //  user
//   password: 'Amohos5901.', // 
//   database: 'List_Of_Products', // 
// });

// app.get('/api/products', (req, res) => {
//   // Define a route for GET requests to /api/products
//   db.query('SELECT * FROM products', (err, results) => {
//     // Execute a query to retrieve all products from the database
//     if (err) {
//       console.error(err); // Log any error that occurred
//       res.status(500).json({ error: 'Internal Server Error' }); // Send an error response with status code 500
//     } else {
//       res.json(results); // Send the retrieved products as a JSON response
//     }
//   });
// });

// app.listen(port, () => {
//   // Start the server and listen on the specified port
//   console.log(`Server is running on port ${port}`); // Log a message indicating that the server is running
// });