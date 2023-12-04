import React from 'react';

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          {/* Header section */}
          <h1>Contact Us</h1>
          <p className="lead">We're happy to hear from you. Get in touch with us via email.</p>
          
          {/* Email section with a mailto link */}
          <div className="my-4">
            <a href="mailto:info@teufel-engineering.com" className="btn btn-primary">
              info@teufel-engineering.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;