import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Portfolio.css';
import logo from '../../logo.svg';
import Menu from '../menu/Menu';
import $ from 'jquery';
import ReactDOM from 'react-dom';

function Portfolio(){

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
      <div className="row main-content">
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

if(document.location.href.includes('/portfolio')){
  console.log('here!')
  // $(function() {
  //   document.location.reload();
  //   $('.card').each(function(i){
  //     setTimeout(function(){
  //       $('.card').eq(i).addClass('is-visible');
  //     }, 1000 * i)
  //   })
  // });
  Portfolio();
  $(".portfolio").ready(function() {
    console.log($('.card'))
    $('.card').each(function(i){
      setTimeout(function(){
        $('.card').eq(i).addClass('is-visible');
      }, 1000 * i)
    })
  });
}


export default Portfolio;