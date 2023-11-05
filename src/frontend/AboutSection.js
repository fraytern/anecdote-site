import React from 'react';
import './AboutSection.css'; // Import your CSS file

function AboutSection() {
    return (
        <section className="about-section">
            <div className="about-content">
                <h2 className="section-heading">О нас</h2>
                <p className="about-text">
                Добро пожаловать в сообщество анекдотов! Мы - место, где любители анекдотов могут читать, писать и делиться своим юмором. Здесь вы найдете веселые истории и возможность добавить свои собственные анекдоты. Присоединяйтесь к нам и дарите улыбки! 
                </p>
            </div>
        </section>
    );
}

export default AboutSection;
