import React from 'react';

const Motivation = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* Header section */}
          <h1 className="display-4 text-center">Discover Your Strategy in ChatRTS</h1>
          <p className="lead text-center my-4">
            Dive into the world of ChatRTS, where every decision you make via Twitch chat 
            shapes the battlefield. This isn't just a game; it's a chance to be part of 
            a community that values strategy, teamwork, and the thrill of real-time action.
          </p>
          
          {/* Motivational text */}
          <p className="text-center">
            Whether you're commanding forces, choosing your class, or engaging in the card-draw, 
            your choices have the power to turn the tide of war. Are you ready to leave your mark 
            on the world of ChatRTS?
          </p>

          {/* Call to action button */}
          <div className="d-flex justify-content-center">
            <a href="/home" className="btn btn-danger btn-lg mt-3">
              Join the Battle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;