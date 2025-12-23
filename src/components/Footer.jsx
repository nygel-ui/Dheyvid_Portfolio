// new file: professional minimal footer
import React from 'react';

const Footer = () => (
  <footer className="site-footer container-max mx-auto">
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
      <div>
        <div style={{fontWeight:700}}>Dheyvid Creatives</div>
        <div className="small-muted" style={{fontSize:13}}>Portfolio &mdash; © {new Date().getFullYear()}</div>
      </div>
      <div className="small-muted">Built with React · Design by Dheyvid</div>
    </div>
  </footer>
);

export default Footer;