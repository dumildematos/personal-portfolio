import React, { useState } from 'react';
import './Menu.css';

function Menu(){
  
  const [isClickState, setisClickState] = useState(false);
  
  let isVisible = false;
  let clickCount = 0;
  let clickMenu = () => {
    clickCount += 1;
    isVisible = !isVisible
    if(isVisible && isClickState){
      isVisible = false;
    }
    setisClickState(isVisible)
  };

  return (
    <div className="Menu">
      <div className={isClickState ? "button_container active" : "button_container"} id="toggle" onClick={clickMenu}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <div className={ isClickState ? 'overlay open': 'overlay'} id="overlay">
      <nav className="overlay-menu" >
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Portifolio</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </div>
    </div>
    
  );

}

export default Menu;