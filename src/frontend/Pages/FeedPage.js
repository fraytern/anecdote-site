// FeedPage.js
import React, { useEffect, useState } from 'react';
import './FeedPage.css';
import TeacherNavbar from '../Navbar';

function FeedPage() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // Send a GET request to your server to fetch jokes
    fetch('http://localhost:5555/jokes')
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
    <div>
      <TeacherNavbar />
      <div className="joke-display">
        <h2 className="joke-title">Анекдоты, написанные нашими пользователями</h2> 
        <div className="jokes-container"> 
          {jokes.map((joke, index) => (
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
      </div>
    </div>
  );
}

export default FeedPage;
