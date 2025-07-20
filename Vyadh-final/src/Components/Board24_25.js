import React from 'react';
import './Board24_25.css';

import Dalton from "../Assets/dalton1.png";
import Tanmay from "../Assets/tanmay.jpg";
import Abiram from "../Assets/abiram.jpg";
import Sarthak from "../Assets/sarthak.jpg";
import Jishnu from "../Assets/jishnu.jpg";
import Rishit from "../Assets/rishit.jpg";
import Spoorthi from "../Assets/spoorthi.jpg";
import Meenakshi from "../Assets/meenakshi.jpg";
import Anirudh from "../Assets/anirudh.jpg";
import Raghav from "../Assets/raghav.jpg";



const Board = () => {
  return (
    <>
    
    <main className='container '>
      <div className='container'>
     <h1 className="heading"> </h1>
    </div>


      {/* card 1 */}
    <div className="wrapper">
      <div className="card front-face">
        <img src={Dalton} alt=" " />
      </div>
      <div className="card back-face">
        <img src={Dalton} alt="Back" />
        
        <div className="info">
          <div className="title text-sm pt-8">"Guided by vision, we master the cosmos"</div>
          
        </div>
        <ul>
          <a href="https://github.com"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
         
        </ul>
      </div>
     </div>


  {/* card 2 */}
    <div className="wrapper">
    <div className="card front-face">
      <img src={Tanmay} alt=" " />
       
    </div>
    <div className="card back-face">
      <img src={Tanmay} alt="Back" />
      
      <div className="info">
        <div className="title text-sm pt-8">"United, we transform challenges into victories"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


  {/* card 3 */}
  <div className="wrapper">
    <div className="card front-face">
      <img src={Abiram} alt=" " />
    </div>
    <div className="card back-face">
      <img src={Abiram} alt="Back" />
      
      <div className="info">
        <div className="title text-sm pt-8">"Every move blends innovation with execution"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


  {/* card 4 */}
  <div className="wrapper">
    <div className="card front-face">
      <img src={Sarthak} alt=" " />
    </div>
    <div className="card back-face">
      <img src={Sarthak} alt="Back" />
      
      <div className="info">
        <div className="title text-sm pt-8">"Each gear, each mechanism, brings us closer to success"
        </div>
        
      </div>
      <ul>
        <a href="https://github.com/Yogavarshni"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/yogavarshni-d-b48837238"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/yogavarshni._.0512?igsh=MTNxbjViZWYyeDJ1MA=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

{/* card 5 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Jishnu} alt=" " />
    </div>
    <div className="card back-face">
      <img src={Jishnu} alt="Back" />
      
      <div className="info">
        <div className="title text-sm pt-8">"Enabling machines to reason, act, and discover"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/reovwin-john-a3a964205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/_.reoo._?igsh=M3pwZ2g1eDVnZ2xk"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

{/* card 6 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Rishit} alt=" " />
    </div>
    <div className="card back-face">
      <img src={Rishit} alt="Back" />
      
      <div className="info">
        <div className="title text-sm pt-8">"Programming the journey to the stars"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


{/* card 7 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Spoorthi} alt=" " />
    </div>
    <div className="card back-face">
      <img src={Spoorthi} alt="Back" />
      
      <div className="info">
        <div className="title text-sm pt-8">"Illuminating the way to discovery"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/jaswanth-raju?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/_dhanvanthri22?igsh=MWN2cWF5cjJ0d2p1YQ=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>


{/* card 8 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Meenakshi} alt=" " />
    </div>
    <div className="card back-face">
      <img src={Meenakshi} alt="Back" />
      
      <div className="info">
        <div className="title text-sm pt-8">"Data and discovery lie at the core of our mission"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/jaswanth-raju?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/_jaswanth_raju?igsh=MXY1c3V5d2h6azQ1aQ=="><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>
    {/* card 9 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Anirudh} alt=" " />
    </div>
    <div className="card back-face">
      <img src={Anirudh} alt="Back" />
      
      <div className="info">
        <div className="title text-sm pt-8">"Teamwork is the cornerstone of our cosmic achievements"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

  {/* card 10 */}
<div className="wrapper">
    <div className="card front-face">
      <img src={Raghav} alt=" " />
    </div>
    <div className="card back-face">
      <img src={Raghav} alt="Back" />
      
      <div className="info">
        <div className="title text-sm pt-8">"Collaboration is the foundation of our stellar success"</div>
        
      </div>
      <ul>
        <a href="https://github.com"><i className="fab fa-github"></i></a>
        <a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a>
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        
      </ul>
    </div>
  </div>

  </main>
  </>
  );
};

export default Board;

