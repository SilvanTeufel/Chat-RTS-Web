import React from 'react';


const Home = () => {
  // Replace 'videoEmbedId' with your actual YouTube video's embed ID
  const videoEmbedId = 'ESS5PYtr9mU';

  return (
    <div className="container text-center my-5">
      <h1 className="display-4 fw-bold mb-3">Welcome to ChatRTS!</h1>
      <p className="lead mb-4">
        Engage in an epic real-time war controlled through Twitch chat. 
        Join the battle, select your class, and shape the course of the game in real-time!
      </p>

      {/* YouTube Video Embed */}
      <div className="row">
      <div className="col-1"></div> 
        <div className="col-10"> 
          <div className="embed-responsive embed-responsive-16by9 my-4 border border-4 border-dark">
            <iframe
              width="100%" // This sets the iframe width to 100% of its container
              height="700" // This sets the iframe height to 500px. Adjust as needed.
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${videoEmbedId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="col-1"></div> 
      </div>
      <div className="my-4">
        <h2>Game Features:</h2>
        <ul className="list-unstyled">
          <li className="mb-2">Control your character live via Twitch chat.</li>
          <li className="mb-2">Participate in extensive real-time battles lasting up to four hours.</li>
          <li className="mb-2">Choose from various classes to suit your playstyle.</li>
          <li className="mb-2">Experience the thrill of the card-draw system.</li>
          <li className="mb-2">Constant updates and expansions to game mechanics.</li>
        </ul>
      </div>

      <div className="mb-4">
        <button className="btn btn-danger me-2">Join the Battle</button>
        <button className="btn btn-secondary">Learn More</button>
      </div>
    </div>
  );
};

export default Home;