import React, { useState } from 'react';
import {Link} from 'react-router-dom';
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
          <li><a href="#"><Link to="/">Home</Link></a></li>
          <li><a href="#"><Link to="/portfolio">Portifolio </Link></a></li>
          <li><a href="#"><Link to="/about">About</Link></a></li>
          <li><a href="#"><Link to="/contact">Contact</Link></a></li>
          <li><a href="#"><Link to="/blog">Blog</Link></a></li>
        </ul>
      </nav>
    </div>
    </div>
    
  );

}

export default Menu;