const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Dummy in-memory movie data
let movies = {
  nowShowing: [
    { title: 'Oppenheimer', poster: 'oppenheimer.jpg' },
    { title: 'Barbie', poster: 'barbie.jpg' },
  ],
  upcoming: [
    { title: 'Avengers: Secret Wars', poster: 'avengers.jpg' },
    { title: 'Deadpool 3', poster: 'deadpool.jpg' },
  ]
};

// API to get movies
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// API to book tickets
app.post('/api/book', (req, res) => {
  const { movie, tickets } = req.body;
  console.log(`Booking received for ${tickets} tickets to ${movie}`);
  res.json({ success: true, message: 'Booking confirmed!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
