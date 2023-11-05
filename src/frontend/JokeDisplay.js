import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './JokeDisplay.css';

function JokeDisplay() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // Send a GET request to your server to fetch jokes
    fetch('http://localhost:5555/jokes') // Update the endpoint to '/jokes'
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch jokes');
        }
      })
      .then((data) => {
        setJokes(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="joke-display">
      <h2 className="joke-title">Лучшие анекдоты</h2>
      <div className="jokes-container">
        {jokes.slice(0, 6).map((joke, index) => (
          <div key={index} className="joke-item">
            <div className="joke-content">
              <p className="joke-author">Автор</p>
              <p>{joke.author}</p>
              <p className="joke-content-label">Контент</p>
              <p>{joke.content}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/feed" className="see-more-button">
        Ещё
      </Link>
    </div>
  );
}

export default JokeDisplay;

