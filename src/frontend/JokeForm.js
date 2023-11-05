import React, { useState } from 'react';
import './JokeForm.css';

function JokeForm() {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jokeData = {
      author,
      content,
    };

    try {
      const response = await fetch('http://localhost:5555/jokes', {
        method: 'POST', // Update the endpoint to '/jokes'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jokeData),
      });

      if (response.ok) {
        setAuthor('');
        setContent('');
        alert('Joke submitted successfully!'); // Update the success message
      } else {
        alert('Failed to submit the joke. Please try again.'); // Update the error message
      }
    } catch (error) {
      console.error('Error sending joke data:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div id="joke-form"> {/* Update the ID for styling if necessary */}
      <h2>Поделитесь своим анекдотом!</h2>
      <form onSubmit={handleSubmit}>
        <div className="author">
          <label>Автор:</label>
          <input type="text" value={author} onChange={handleAuthorChange} />
        </div>
        <div>
          <label>Анекдот:</label> {/* Update the label to "Анекдот" */}
          <textarea value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">Поделиться</button>
      </form>
    </div>
  );
}

export default JokeForm;
