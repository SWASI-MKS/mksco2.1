import React, { useState } from 'react';
import './FeedbackCarousel.css';

const feedbacks = [
  {
    text: '"During this internship, I gained practical knowledge in site supervision, estimation, and structural drawing interpretation. The hands-on experience gave me a clear vision on how theory meets real-world construction."',
    author: '— Anika Rajesh',
  },
  {
    text: '"I was exposed to various civil site activities like leveling, bar bending schedules, and quantity surveying. The internship helped me understand how a project flows from planning to execution." mentors and very supportive environment.”',
    author: '— Vignesh Pandi',
  },
  {
    text: '"It was an eye-opening experience to see how much coordination is needed in real-time projects. I learned about site safety protocols, material testing, and how to read working drawings effectively."',
    author: '— Meera Suresh',
  },
  {
    text: '“Landed a remote internship through this platform!"This internship sharpened my knowledge in AutoCAD and reinforced concrete detailing. I also got a chance to visit structural and architectural design departments — which was super insightful."',
    author: '— Aravind Kumar',
  },
  {
    text: '“Loved the hands-on workshops "From soil testing to foundation layout, every activity taught me something new. I feel more confident now in understanding technical drawings and on-site challenges sessions!”',
    author: '— Shruthi Elangovan',
  },
  {
    text: '“Loved the hands-"Working on-site gave me a whole new perspective. I learned how important punctuality, teamwork, and documentation are in the civil engineering field. It prepared me better for my professional journey." workshops "From soil testing to foundation layout, every activity taught me something new. I feel more confident now in understanding technical drawings and on-site challenges sessions!”',
    author: '— Dinesh Ramanan',
  },
];

const FeedbackCarousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < feedbacks.length - 3) setIndex(index + 1);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
      >
        {feedbacks.map((feedback, i) => (
          <div className="feedback-card" key={i}>
            <p className="feedback-text">{feedback.text}</p>
            <p className="feedback-author">{feedback.author}</p>
          </div>
        ))}
      </div>

      <div className="carousel-buttons">
        <button onClick={handlePrev}>←</button>
        <button onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
