import React from 'react';

/*
  To avoid missing-asset build errors we render a neutral placeholder when image is not available.
  Titles/data preserved.
*/

const photoshopProjects = [
  { title: 'Apple Promo Poster', image: null },
  { title: 'EBP Friday Promo 1', image: null },
  { title: 'EBP Friday Promo 2', image: null },
  { title: 'EBP Friday Promo 3', image: null },
  { title: 'Glykozee Promo 1', image: null },
  { title: 'Glykozee Promo 2', image: null },
  { title: 'NDO Promo 1', image: null },
  { title: 'NDO Promo 2', image: null },
  { title: 'Marshmallows — Made for Holiday Memories', image: null },
  { title: 'Chicken Pastil', image: null },
  { title: 'Rocky Road', image: null },
  { title: 'Berry Biscuit', image: null },
  { title: 'Dare to Try Something New', image: null },
  { title: 'Mango Graham', image: null },
  { title: 'Oreo Crumble', image: null },
  { title: 'Pearl of Ashen', image: null },
  { title: 'Research Writing Seminar', image: null },
  { title: 'Love Every Bite', image: null },
  { title: 'Pair of Puff', image: null },
  { title: 'Pair of Puff2', image: null },
  { title: 'Mallow in Love with You', image: null },
];

const Placeholder = ({title}) => (
  <div className="project-media" aria-hidden>
    <div style={{textAlign:'center'}}>
      <div style={{fontWeight:600}}>{title}</div>
      <div className="small-muted" style={{fontSize:12}}>Image hidden</div>
    </div>
  </div>
);

const Photoshop = () => {
  return (
    <div className="w-full">
      <div className="project-grid">
        {photoshopProjects.map((proj, idx) => (
          <div key={idx} className="project-card">
            {proj.image ? (
              <div className="project-media">
                <img src={proj.image} alt={proj.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
              </div>
            ) : (
              <Placeholder title={proj.title} />
            )}

            <div className="project-info">
              <div style={{fontWeight:700}}>{proj.title}</div>
              <div className="project-meta">Photoshop</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photoshop;