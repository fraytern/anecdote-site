import React from 'react';
import './MainSection.css';

function MainSection() {
  return (
    <section className="main-section">
      <div className="main-image">
        <div className="text-overlay">
          <h1 className="main-heading">Добро пожаловать в Мир Анекдотов</h1>
          <a href="#joke-form" className="book-button">Поделись своими лучшими шутками!</a>
        </div>
      </div>
    </section>
  );
}

export default MainSection;


