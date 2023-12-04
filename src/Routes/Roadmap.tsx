import React from 'react';

const Roadmap = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="text-center mb-5">ChatRTS Development Roadmap</h1>
          
          <ul className="timeline">
            <li className="timeline-item bg-white rounded ml-3 p-4 shadow mb-4">
              <div className="timeline-arrow"></div>
              <h2 className="h5 mb-0">Q1 2024 - Alpha Release on Twitch</h2>
              <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>January - March</span>
              <p className="text-small mt-2 font-weight-light">Debuting the Alpha version exclusively on Twitch, inviting streamers and viewers to participate in early testing.</p>
            </li>
            
            <li className="timeline-item bg-white rounded ml-3 p-4 shadow mb-4">
              <div className="timeline-arrow"></div>
              <h2 className="h5 mb-0">Q2 2024 - Adding New Mechanics</h2>
              <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>April - June</span>
              <p className="text-small mt-2 font-weight-light">Introducing new mechanics to enhance fun and ensure fluid gameplay, with updates based on Alpha feedback.</p>
            </li>
            
            <li className="timeline-item bg-white rounded ml-3 p-4 shadow mb-4">
              <div className="timeline-arrow"></div>
              <h2 className="h5 mb-0">Q3 2024 - Availability on Epic Launcher</h2>
              <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>July - September</span>
              <p className="text-small mt-2 font-weight-light">Expanding reach by making ChatRTS available for purchase on the Epic Launcher, allowing more creators to host their own RTS battles on Twitch.</p>
            </li>
            
            <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div className="timeline-arrow"></div>
              <h2 className="h5 mb-0">Q4 2024 - In Progress</h2>
              <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>October - December</span>
              <p className="text-small mt-2 font-weight-light">Continuing development with a focus on community feedback to shape the future updates and features of ChatRTS.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;