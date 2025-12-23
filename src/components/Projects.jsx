import React, { useState } from 'react';
import Photoshop from './projects/Photoshop';
import { useFadeInOnScroll } from '../Hook';

const categories = ['Photoshop'];

const Projects = () => {
  const [active, setActive] = useState('Photoshop');
  const [headingRef, headingVisible] = useFadeInOnScroll();

  const renderContent = () => {
    switch (active) {
      case 'Photoshop': return <Photoshop />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="container-max mx-auto py-12">
      <h2 ref={headingRef} className="section-title">{headingVisible ? 'Projects' : ''}</h2>

      <div className="mb-6 flex gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`btn ${active===cat ? 'btn-primary' : 'btn-outline'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div>
        {renderContent()}
      </div>
    </section>
  );
};

export default Projects;