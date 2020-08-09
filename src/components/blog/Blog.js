import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import logo from '../../logo.svg';
import Menu from '../menu/Menu';
import './Blog.css';

function Blog() {
  
  useEffect(()=>{
    getPosts();
  },[])

  const [feed, setFeed] = useState([]);

  const getPosts = async () => {
    const data = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dumildematos');
    const mediumPosts = await data.json();
    console.log(mediumPosts.items)
    setFeed(mediumPosts.items);
  }

  function goToURL(url) {
    window.open(url, '_blank');
  }

  document.title = "Blog :: Dumilde Matos";
  return(
    <div className="container-box flex flex-rows">
      <div className="row flex center height-70p">
        <Menu />
        <div className="logo-box-nav">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="main-content post-container">
      {feed.map(item => (
        <Slide bottom>
            <div className="post-card" onClick={() => goToURL(item.link)}>
              <header>
                <h1>{item.title}</h1> <time datetime={item.pubDate}>{item.pubDate}</time>
              </header>              
            </div>
        </Slide>
        ))}
      </div>
    </div>
  );

}

export default Blog;