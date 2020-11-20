import React from 'react';


  const NavBar = ({bookmarkicon, settingsicon, menuicon}) => {
    return (
    <nav className="navbar">
      <a href=""><img src={menuicon} alt="Menu" /></a>
      <a href=""><img src={bookmarkicon} alt="Kirjanmerkit" /></a>
      <a href=""><img src={settingsicon} alt="pika-asetukset" /></a>
    </nav>
  );
}

export default NavBar 