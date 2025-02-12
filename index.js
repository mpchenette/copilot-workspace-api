const express = require('express');
const bodyParser = require('body-parser');
const words = require('./words.json');

const app = express();
app.use(bodyParser.json());

app.get('/api/words', (req, res) => {
  const { length, startsWith } = req.query;
  let filteredWords = words;

  if (length) {
    filteredWords = filteredWords.filter(word => word.length === parseInt(length));
  }

  if (startsWith) {
    filteredWords = filteredWords.filter(word => word.startsWith(startsWith));
  }

  res.json({ words: filteredWords });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
