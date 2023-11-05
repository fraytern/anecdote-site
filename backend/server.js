require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const Joke = require('./Joke.model'); // Import your Joke model
const cors = require('cors');

const app = express();
app.use(express.static('src'));
app.use(cors());
app.use(express.json()); // Middleware to parse JSON in the request body

// Connect to your MongoDB database using the loaded DATABASE_URI
mongoose
  .connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Route to create a new joke
app.post('/jokes', async (req, res) => {
  try {
    const { author, content } = req.body;

    // Create a new joke document
    const newJoke = new Joke({
      author,
      content,
    });

    // Save the new joke to the database
    await newJoke.save();

    res.status(201).json(newJoke); // Respond with the created joke
  } catch (err) {
    console.error('Error creating a new joke:', err);
    res.status(500).json({ error: 'Could not create a new joke' });
  }
});

// Route to retrieve three jokes
app.get('/jokes', async (req, res) => {
  try {
    // Fetch three jokes from the database (you can add sorting or filtering as needed)
    const jokes = await Joke.find().limit(10);
    res.json(jokes);
  } catch (err) {
    console.error('Error fetching jokes:', err);
    res.status(500).json({ error: 'Could not retrieve jokes' });
  }
});

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
