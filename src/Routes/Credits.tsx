import React from 'react';

const Credits = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          {/* Header section */}
          <h1 className="mb-4">Credits</h1>
          <p className="lead">A tribute to the brilliant minds behind ChatRTS.</p>
          
          {/* Credits list */}
          <ul className="list-unstyled mt-4">
            <li className="mb-2"><strong>Game Design & Development:</strong> Darq Devil Games</li>
            <li className="mb-2"><strong>Artwork:</strong> Creative Arts Department</li>
            <li className="mb-2"><strong>Music & Sound Effects:</strong> Sonic Creators Co.</li>
            <li className="mb-2"><strong>Community Management:</strong> The Social Engagement Team</li>
            {/* Add more individual or team credits as needed */}
          </ul>
          
          {/* Optional thank you message */}
          <div className="mt-5">
            <p className="font-italic">Special thanks to all our players and supporters who make this journey possible.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;