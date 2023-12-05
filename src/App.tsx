import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Routes/Home'; // Import the Home component
import Contact from './Routes/Contact'; // Import the Contact component
import Credits from './Routes/Credits'; // Import the Credits component
import Motivation from './Routes/Motivation'; // Import the Motivation component
import Roadmap from './Routes/Roadmap';
import Navbar from './Navbar'; // Import the Navbar component
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container-flex bg-white">
        <Navbar />
        <Header /> {/* Add the Header here */}
        <div className="d-flex justify-content-center">
         <div className="border border-4 border-dark mt-5 mb-5"> {/* Bootstrap border class */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/credits" element={<Credits />} />
              <Route path="/motivation" element={<Motivation />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;