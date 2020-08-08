import React from 'react';
import Slide from 'react-reveal/Slide';
import './Contact.css';
import logo from '../../logo.svg';
import Menu from '../menu/Menu';

function Contact(){
  return (
    <div className="container-box flex flex-rows">
      <div className="row flex center height-70p">
        <Menu />
        <div className="logo-box-nav">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="main-content contact">
        <header>
          <h1>THANKS FOR TAKING YOUR PRESIOUS TIME TO BE HERE. HOW CAN I HELP YOU TODAY? </h1>
        </header>
        <div className="form-box">
          <form>
            <div className="form-row">   
            <Slide left>
                <label>
                Name  <br/><br/>
                <input type="text" name="name" />
              </label> 
            </Slide>  
            <Slide right>
              <label>
                Email <br/><br/>
                <input type="email" name="email" />
              </label>
            </Slide>  
            </div>
            <Slide bottom>
            
            <div className="form-row">
            <label className="textarea-lavel">
            Message  <br/><br/>
            <textarea rows="10"></textarea>
          </label> 
            </div>
            <div className="form-row center">
            <input className="btn-contactform" type="submit" value="Submit" />
            </div>
            </Slide>  
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;