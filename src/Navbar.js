import React, {useState} from 'react';
import Bookmarks from './components/Bookmarks';

  const NavBar = ({bookmarkicon, settingsicon, menuicon}) => {
    const [bookmarksOpen, setBookmarksOpen] = useState(false)
    return (
      <>
    <nav className="navbar">
      <a href=""><img src={menuicon} alt="Menu" /></a>
      <div onClick={() => setBookmarksOpen(!bookmarksOpen)}><img src={bookmarkicon} alt="Kirjanmerkit" /></div>
      <a href=""><img src={settingsicon} alt="pika-asetukset" /></a>
    </nav>
    {bookmarksOpen && <Bookmarks />}
    </>
  );
}

export default NavBar 