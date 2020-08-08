import React from 'react';
import './Home.css';
import Bounce from 'react-reveal/Bounce';
import Menu from '../menu/Menu';
import logo from '../../logo.svg';

function Home() {
  const timer = (() => {
    setTimeout(()=>{
      return (
        <Bounce right >
          <h1>I'm</h1>
          <h1>Dumilde</h1>
        </Bounce>
      );
    }, 2000)
  })
  document.title = 'Home :: Dumilde Matos';
  return (
    
    <div className="container-box flex">
      <div className="light-left flex">
        <div className="aside">
          <Menu />
          <div className="logo-box">
          <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="main-content">        
          <div>
            <Bounce right >
            <h2>I'm</h2>
            <h2>Dumilde</h2>
            <h2>Matos</h2>
            <p className="p half">WEB DEVELOPER | WEB DESIGNER |UI/UX DESIGNER | FRONTEND DEVELOPER | FULLSTACK DEVELOPER</p>
            </Bounce>
          </div>
        </div>
      </div>
      <div className="dark-right">
      <Bounce top>  
        <h3>Hello</h3>
        <h3>Welcome</h3>
      </Bounce>
      </div>
    </div>
  );
}
export default Home;