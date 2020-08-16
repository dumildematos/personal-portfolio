import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import logo from '../../logo.svg';
import Menu from '../menu/Menu';
import $ from 'jquery';

function Portfolio(){

  useEffect(()=>{
    dynamicClass();
  },[])

  // console.log(document.getElementsByClassName('thumb'))
  document.title = 'Portfolio :: Dumilde Matos';
    
  return(
    <div className="container-box flex flex-rows portfolio">
      <div className="row flex center height-70p">
        <Menu />
        <div className="logo-box-nav">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="main-content portfolio">
        <div className="card thumb">
          <span>UI/UX</span>
        </div>        
        <div className="card thumb">
          <span>Web Development</span>
        </div>        
        <div className="card thumb">
          <span>Mobile Development</span>
        </div>
      </div>
      </div>
      );
  
}

function dynamicClass (){
  if(document.location.href.includes('/portfolio')){
    $(".portfolio").ready(function() {
      console.log($('.card'))
      $('.card').each(function(i){
        setTimeout(function(){
          $('.card').eq(i).addClass('is-visible');
        }, 1000 * i)
      })
    });
  }

}

export default Portfolio;