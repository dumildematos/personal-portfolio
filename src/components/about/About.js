import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import logo from '../../logo.svg';
import Menu from '../menu/Menu';
import './About.css';

function About(){
  document.title = "About :: Dumilde Matos";
  return (
    <div className="container-box flex flex-rows">
      <div className="row flex center height-70p">
        <Menu />
        <div className="logo-box-nav">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="main-content about">
        <div className="left-box">
          <div className="container-content content">
            <div className="content-text">
              <header>
                <h1>About</h1>
                <h2>Me</h2>
              </header>              
              <section>
                <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Enim facilisis gravida neque convallis a cras semper auctor. At augue eget arcu dictum. Elementum sagittis vitae et leo duis ut diam quam nulla. Vitae turpis massa sed elementum tempus egestas. Amet mattis vulputate enim nulla aliquet porttitor. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Vehicula ipsum a arcu cursus. Aliquam ultrices sagittis orci a scelerisque purus semper. Proin libero nunc consequat interdum varius sit amet mattis. Interdum velit laoreet id donec ultrices tincidunt arcu. Quisque id diam vel quam elementum pulvinar etiam non.</p>
                </article>
              </section>
            </div>
            <div className="content-text stack">
              <header>
                <h4>Stack</h4>
              </header>
              <section>
              <article className="article-skill">
              <div className="left">
                <div className="skill">
                  <label>html 5</label>
                  <div className="skill-progress">
                  <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>css 3</label>
                  <div className="skill-progress">
                  <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Javascript</label>
                  <div className="skill-progress">
                  <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Angular js</label>
                  <div className="skill-progress">
                  <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Angular</label>
                  <div className="skill-progress">
                  <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>React JS</label>
                  <div className="skill-progress">
                  <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Drupal</label>
                  <div className="skill-progress">
                  <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Git</label>
                  <div className="skill-progress">
                  <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Docker</label>
                  <div className="skill-progress">
                  <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Sass</label>
                  <div className="skill-progress">
                  <div className="skill-progress-fill"></div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="skill">
                  <label>Ionic</label>
                  <div className="skill-progress">
                    <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>React Native</label>
                  <div className="skill-progress">
                    <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Java</label>
                  <div className="skill-progress">
                    <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>php</label>
                  <div className="skill-progress">
                    <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>PL/SQL</label>
                  <div className="skill-progress">
                    <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>MySQL</label>
                  <div className="skill-progress">
                    <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Photoshop</label>
                  <div className="skill-progress">
                    <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Adobe XD</label>
                  <div className="skill-progress">
                    <div className="skill-progress-fill"></div>
                  </div>
                </div>                
                <div className="skill">
                  <label>Linux</label>
                  <div className="skill-progress">
                    <div className="skill-progress-fill"></div>
                  </div>
                </div>             
                <div className="skill">
                  <label>C#</label>
                  <div className="skill-progress">
                    <div className="skill-progress-fill"></div>
                  </div>
                </div>
              </div>
              </article>
            </section>  
            </div>
          </div>
        </div>
        <Bounce right >        
          <div className="right-box">
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default About;