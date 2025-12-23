import React from 'react';
import profile from '../assets/removebgprofile.png';
import cv from '../assets/Pe.pdf';
import { useFadeInOnScroll } from '../Hook';

const Home = () => {
  const [ref, visible] = useFadeInOnScroll();

  return (
    <section id="home" className="hero container-max mx-auto">
      <div ref={ref} className={`hero-card ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="hero-left">
          <div className="small-muted">Hello, I'm</div>
          <h1 style={{fontSize: '2rem', margin:'.25rem 0 0.5rem', lineHeight:1.05}}>Dheyvid <span style={{color:'var(--accent)'}}>Kyle Pe</span></h1>
          <p className="small-muted" style={{maxWidth:560}}>
            I am a graphic designer, video editor, game asset creator, UI/UX designer, front-end developer, and content creator. I build clear, useful digital experiences and visuals that communicate.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a href={cv} download className="btn btn-primary">Download CV</a>
            <a href="#contact" className="btn btn-outline">Contact</a>
          </div>
        </div>

        <div className="hero-right">
          <div style={{width:220,height:220,borderRadius:12,overflow:'hidden',border:'1px solid var(--border)'}}>
            <img src={profile} alt="profile" className="round-avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;