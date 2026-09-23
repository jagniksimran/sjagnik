import React from 'react';

const xrProjects = [
  {
    id: 1,
    title: 'LuminaMR',
    description: 'Mixed Reality experience that helps you create a personalised virtual garden based on Meta Presence SDK.',
    tech: 'MR | Unity | Blender',
    link: 'https://www.meta.com/experiences/luminamr/8586749284736650/',
  },
  {
    id: 2,
    title: 'Presence in Bed',
    description: 'Meditative VR experience exhibited during NYCxDesign, at Soho, NYC, and Miami Art Basel.',
    tech: 'VR | Unity | Cinema 4D',
    link: '#',
  },
  {
    id: 3,
    title: 'XR Brain Jam\'23',
    description: 'VR sandbox game tackling future literacy, shaping one\'s future, showcased at Games for Change.',
    tech: 'XR | Multiplayer game',
    link: '#',
  },
  {
    id: 4,
    title: 'Inertia At Work',
    description: 'An immersive hologram installation inviting viewers to explore the art of laziness showcased at Parsons, NY.',
    tech: 'Unreal | Metahuman | Arduino | XR',
    link: '#',
  },
  {
    id: 5,
    title: 'XR for Real World',
    description: 'A team collaboration to propose new park design of Thomas Greene Park in Brooklyn, using XR technology.',
    tech: 'VR | Unity | Sketchup | Blender',
    link: '#',
  },
  {
    id: 6,
    title: 'Bird Watchers',
    description: 'An immersive bird-watching game exhibited in WanderVille, Brooklyn featuring a camera controller.',
    tech: 'Unity | Arduino',
    link: '#',
  },
  {
    id: 7,
    title: 'Wander Around',
    description: 'A gaming experience to create awareness about accessible technology focused on color blindness.',
    tech: 'Unity | Blender',
    link: '#',
  },
  {
    id: 8,
    title: 'MIT Reality Hack\'23',
    description: 'FrameSpace is an interactive AR experience that lets you create portals to alternate realities of the space you are present in.',
    tech: 'AR | Unity | MRTK',
    link: '#',
  },
  {
    id: 9,
    title: 'Niantic VPS\'22',
    description: 'AR museum tour prototype testing waypoints in ARDK at Zerospace, Brooklyn.',
    tech: 'AR | Unity | ARDK',
    link: '#',
  },
  {
    id: 10,
    title: 'Performance & Tech',
    description: 'An immersive performance designed through various interpretations of UNBROKEN AVATAR GLITCH IN THE SEAM.',
    tech: 'XR | Unity',
    link: '#',
  },
];

const art3d = [
  {
    id: 1,
    title: 'Perpetual Calendar',
    description: 'Perpetual Calendar can always be used and I wanted to explore a tabletop version. I modeled the calendar and used 3D printing and laser engraving.',
  },
  {
    id: 2,
    title: 'Relaxing Samosa',
    description: 'Arduino-powered plushie shaped like a samosa, with a mini LCD jumping game inspired by the Chrome Dino. It helps me manage fidgeting and anxiety.',
  },
  {
    id: 3,
    title: 'Arduino games',
    description: 'For constructing toys, games and installations for exhibitions, I explored IoT using Arduino circuits and C++ coding.',
  },
];

function ArVrPage() {
  return (
    <div className="arvr-page">
      {/* Intro */}
      <section className="arvr-intro">
        <p className="arvr-intro-text">
          From shaping immersive digital products to solving real-world problems through design,
          each project I take on is a blend of thoughtful UX strategy, technical know-how,
          and a touch of storytelling.
        </p>
      </section>

      {/* XR Projects Grid */}
      <section className="arvr-projects">
        <h2 className="section-title">AR/VR/Games</h2>
        <div className="arvr-grid">
          {xrProjects.map((project) => (
            <article key={project.id} className="arvr-card">
              <div className="arvr-card-image">
                <div className="arvr-image-placeholder" />
              </div>
              <div className="arvr-card-info">
                <h3 className="arvr-card-title">{project.title}</h3>
                <p className="arvr-card-description">{project.description}</p>
                <span className="arvr-card-tech">{project.tech}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3D Art */}
      <section className="art3d-section">
        <h2 className="section-title">3D Art</h2>
        <div className="art3d-grid">
          {art3d.map((item) => (
            <article key={item.id} className="art3d-card">
              <div className="art3d-image">
                <div className="art3d-image-placeholder" />
              </div>
              <div className="art3d-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Other stuff */}
      <section className="arvr-other">
        <h2 className="section-title">Other stuff</h2>
        <div className="arvr-other-placeholder">
          <p>Additional experimental projects and explorations</p>
        </div>
      </section>
    </div>
  );
}

export default ArVrPage;
