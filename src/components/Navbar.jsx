import React from 'react';

const Navbar = () => {
  return (
    <header className="site-nav container-max">
      <div className="site-brand">
        <div style={{width:40,height:40,background:'var(--accent)',borderRadius:8}} aria-hidden />
        <div>
          <div className="brand-accent">Dheyvid</div>
          <div className="small-muted" style={{fontSize:12}}>Creatives</div>
        </div>
      </div>

      <nav className="flex items-center gap-4">
        <a href="#home" className="small-muted hover:text-black">Home</a>
        <a href="#projects" className="small-muted hover:text-black">Projects</a>
        <a href="#intership" className="small-muted hover:text-black">Experience</a>
        <a href="#contact" className="small-muted hover:text-black">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;