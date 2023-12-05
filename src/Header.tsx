import React from 'react';
import backgroundImage from './img/banner2.png';

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // or 'contain' depending on your requirement
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <header style={headerStyle} className="text-black text-center py-3 border-bottom border-4 border-dark">
      <h1>ChatRTS</h1>
      <h4>The Twitch-Chat Controlled RTS Game</h4>
    </header>
  );
};

export default Header;
