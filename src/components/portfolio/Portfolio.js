import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Portfolio.css';
import logo from '../../logo.svg';
import Menu from '../menu/Menu';
function Portfolio(){
  document.title = 'Portfolio :: Dumilde Matos';
  return(
    <div className="container-box flex">
      <div className="row flex center height-70p">
        <Menu/>  
        <div className="logo-box-nav">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
export default Portfolio;