import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GradientBlob from '../components/GradientBlob';
import { assets } from '../assets';

const projects = [
  {
    id: 1,
    category: 'B2B2C | Web | iPad | Mobile',
    title: 'Spotlighting innovative thesis projects',
    description:
      'The Entropy website is a cornerstone project developed to showcase the work of the graduating Design and Technology Class of 2023 at Parsons School of Design.',
    link: '#',
    image: assets.entropydesign,
  },
  {
    id: 2,
    category: 'B2C | Mobile',
    title: 'Simplifying meal planning within households',
    description:
      'MealForge is your kitchen co-pilot to conquer mealtime challenges by organizing meal schedules within your household.',
    link: '#',
    image: assets.mealForgeHero,
  },
  {
    id: 3,
    category: 'B2C | Mobile',
    title: 'Empowering self-directed learning',
    description:
      "Learner's Jam is an application focused on empowering your self-learning journey through curated learning pathways with community support.",
    link: '#',
    image: assets.learnerJamHero,
  },
  {
    id: 4,
    category: 'B2B | Web',
    title: 'Equine therapy meets gaming',
    description:
      'Harmony Trails is a 3D game translating neuroscience research insights and equine therapy into captivating gameplay concepts and narratives.',
    link: '#',
  },
];

const designItems = [
  { id: 1, type: 'Branding', title: 'Sweet Auburn', link: '#' },
  { id: 2, type: 'Typography Exploration', title: 'Margaret Holmes', link: '#' },
  { id: 3, type: 'Type Specimen', title: 'Garamond', link: '#' },
];

const otherItems = [
  {
    id: 1,
    title: 'Won Most Creative Use of Quantum Technology',
    description:
      'IBM Quantum Jam presents "Quantum Poetics," an art installation that blends the concept of quantum superposition with poetry. Exhibited at Microscopic Gallery, Chelsea, NY.',
    link: '#',
    image: assets.quantumjam,
  },
  {
    id: 2,
    title: 'Motion Capture Lab @Cornish College of the Arts',
    description:
      'Setting up a Motion capture lab at Cornish College of the Arts. Calibrating camera positioning, setting up volume and making an action plan for accessible use.',
    link: '#',
  },
  {
    id: 3,
    title: 'XR Guild Speaker @NYU, Brooklyn Navy Yard',
    description:
      'XR Guild is an association of professionals in XR, Metaverse & Spatial Computing. Pecha-Kucha format: 20 slides x 20 minutes.',
    link: '#',
    image: assets.speaker,
  },
];

function RevealSection({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero + About combined section */}
      <section className="hero" style={{ position: 'relative' }}>
        {assets.heroBackground && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden', opacity: 0.2 }}>
            <img src={assets.heroBackground} alt="Hero Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
        <div className="hero-content">
          <p className="hero-greeting">Hey, I'm Simran</p>
          <h1 className="hero-title">
            <span className="rotating-text-wrapper">
              <span className="rotating-text">Product Designer</span>
              <span className="rotating-text">Design Technologist</span>
              <span className="rotating-text">UX Storyteller</span>
            </span>
          </h1>
          <p className="hero-description">
            I focus on elevating Human Interaction with technology. My background in design and development allows me to bridge creative ideas, thoughtful design, and real-world impact through a user-focused design process.
          </p>
          <div className="hero-education">
            <div className="hero-edu-item">
              <div className="edu-icon-placeholder" />
              <p>MFA Design Technology<br />Parsons School of Design, NY</p>
            </div>
            <div className="hero-edu-item">
              <div className="edu-icon-placeholder" />
              <p>B.Tech Computer Science<br />NIT Kurukshetra</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <GradientBlob />
          <div className="hero-photo">
            <img src={assets.heroImage} alt="Simran Jagnik" />
            <div className="about-image-overlay">
              <p>"We must design for the way people behave, not for how we would wish them to behave."</p>
              <cite>— Don Norman</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Featured VR */}
      <RevealSection>
        <section className="featured-vr">
          <div className="featured-vr-item">
            <h3>Sandbox VR Prototype at Games for Change Conference</h3>
          </div>
          <div className="featured-vr-item">
            <h3>VR Exhibition during NYCxDesign at a Soho Gallery</h3>
          </div>
          <Link to="/arvrgames" className="btn-explore">Explore →</Link>
        </section>
      </RevealSection>

      {/* Projects */}
      <section className="projects" id="projects">
        <RevealSection>
          <p className="section-subtitle">Explore my work</p>
        </RevealSection>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <RevealSection key={project.id} delay={i * 0.1}>
              <article className="project-card">
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                  ) : (
                    <div className="project-image-placeholder" />
                  )}
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="project-link">Explore →</a>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Design work */}
      <section className="design-work">
        <div className="design-grid">
          {designItems.map((item, i) => (
            <RevealSection key={item.id} delay={i * 0.1}>
              <article className="design-card">
                <div className="design-card-image">
                  <div className="design-image-placeholder" />
                </div>
                <div className="design-card-info">
                  <span className="design-type">{item.type}</span>
                  <h3 className="design-title">{item.title}</h3>
                  <a href={item.link} className="project-link">Explore →</a>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Other work */}
      <section className="other-work">
        <RevealSection>
          <h2 className="section-title">Other things I do</h2>
        </RevealSection>
        <div className="other-grid">
          {otherItems.map((item, i) => (
            <RevealSection key={item.id} delay={i * 0.1}>
              <article className="other-card">
                <div className="other-card-image">
                  {item.image ? (
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                  ) : (
                    <div className="other-image-placeholder" />
                  )}
                </div>
                <div className="other-card-info">
                  <h4 className="other-title">{item.title}</h4>
                  <p className="other-description">{item.description}</p>
                  <a href={item.link} className="project-link">Explore →</a>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
