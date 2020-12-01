import React from 'react';
  
  const BottomBar = ({plusicon}) => {
    return (
    <div className="bottombar">
      <div>Sana</div>
      <div className="plusicon"><img src={plusicon} alt="Add new page" /></div>
    </div>
  );
}

export default BottomBar 