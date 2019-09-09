import React from 'react';

export default function HomePageReview() {
  return (
    <div className="reviews">
      <div className="dark-overlay">
        <div className="reviews-container">
          <div className="container">
            <h1>reviews</h1>
            <div className="reviews-msg">
              <p> Your website was very easy to navigate, service was prompt and staff was very pleasant. I will definitely use your service again, and I have already recommended it to friends.”</p>
            </div>
            <div className="reviews-img">
              <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1566401787/reviewer.jpg" alt="reviewer's name" />
            </div>
            <p>
              Floral Wilson,
              {' '}
              <span>2 days ago</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
