const express = require('express');
const fs = require('fs');
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




app.get('/words', (req, res) => {
 
  const randomWords = getRandomWords(words, 10);
  res.json(randomWords);
});

function getRandomWords(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random()); // Shuffle array
  return shuffled.slice(0, count); // Return first 'count' words
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
