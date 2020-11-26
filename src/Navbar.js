import React, {useState} from 'react';
import Bookmarks from './components/Bookmarks';
import Menu from './components/Menu';
import Settings from './components/Settings';

  const NavBar = ({bookmarkicon, settingsicon, menuicon}) => {
    const [bookmarksOpen, setBookmarksOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [settingsOpen, setSettingsOpen] = useState(false)

   
   return (
      <>
    <nav className="navbar">
      <div className="menuicon" onClick={() => setMenuOpen(!menuOpen)}><img src={menuicon} alt="Menu" /></div>
      <div className="bookmarkicon" onClick={() => setBookmarksOpen(!bookmarksOpen)}><img src={bookmarkicon} alt="Kirjanmerkit" /></div>
      <div className="settingsicon" onClick={() => setSettingsOpen(!settingsOpen)}><img src={settingsicon} alt="pika-asetukset" /></div>
    </nav>
    {bookmarksOpen && <Bookmarks />}
    {menuOpen && <Menu />}
    {settingsOpen && <Settings />}
    </>
  );
}

export default NavBar 