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




const express = require('express');
const app = express();
const port = 3000;

// Sample words with their English and Bangla meanings (replace this with your 1500 words)
const words = [
  { word: 'apple', meaning: 'আপেল' },
  { word: 'banana', meaning: 'কলা' },
  { word: 'computer', meaning: 'কম্পিউটার' },
  { word: 'dog', meaning: 'কুকুর' },
  { word: 'cat', meaning: 'বিড়াল' },
  { word: 'house', meaning: 'বাড়ি' },
  { word: 'car', meaning: 'গাড়ি' },
  { word: 'book', meaning: 'বই' },
  { word: 'tree', meaning: 'গাছ' },
  { word: 'flower', meaning: 'ফুল' },
  { word: 'teacher', meaning: 'শিক্ষক' },
  { word: 'student', meaning: 'ছাত্র' },
  { word: 'love', meaning: 'ভালোবাসা' },
  { word: 'friend', meaning: 'বন্ধু' },
  { word: 'water', meaning: 'পানি' },
  // Add up to 1500 words here...
];

// API endpoint that returns 10 random words with their Bangla meanings
app.get('/api/words', (req, res) => {
  // Get 10 random words and their meanings
  const randomWords = getRandomWords(words, 10);
  res.json(randomWords);
});

// Function to shuffle and pick random words
function getRandomWords(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random()); // Shuffle array
  return shuffled.slice(0, count); // Return first 'count' words
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});