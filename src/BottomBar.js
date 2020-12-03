import React from 'react';
  
  const BottomBar = ({plusicon, logo}) => {
    return (
    <div className="bottombar">
      <div className="logo"><img src={logo} alt="Home feed" /></div>
      <div className="plusicon"><img src={plusicon} alt="Add new page" /></div>
    </div>
  );
}

export default BottomBar 