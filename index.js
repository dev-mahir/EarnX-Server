const express = require('express');
const app = express();



// Middleware
app.use(express.json());

// Get data from db.json
app.get('/word', (req, res) => {
  fs.readFile('db.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading db.json');
    }
    const db = JSON.parse(data);
    res.json(db.word);
  });
});



// Middleware (Optional)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use PORT environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Bind to 0.0.0.0 to make it externally accessible
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
