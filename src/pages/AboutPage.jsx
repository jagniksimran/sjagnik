import React from 'react';

const experiences = [
  { role: 'Product Designer', company: 'Incluesion', period: '' },
  { role: 'Unity Developer', company: 'The Verse', period: 'January 2023 to May 2023' },
  { role: 'Teaching Assistant', company: 'The New School', period: 'August 2022 to December 2022' },
  { role: 'UX/UI Graphic Designer', company: 'Pentagons.in', period: 'April 2021 to July 2021' },
  { role: 'Software Developer Intern', company: 'DMI Finance', period: 'January 2020 to July 2020' },
];

const education = [
  { degree: 'MFA, Design Technology 2023', school: 'Parsons School of Design, The New School, New York' },
  { degree: 'BTech, Computer Science 2021', school: 'National Institute of Technology, Kurukshetra, India' },
];

const skillsDesign = [
  'Product Design', 'UX Research', 'Usability Testing', 'User Journey',
  'Wireframing', 'Prototyping', 'Interaction Design', 'Experience Design',
  'Brand Identity & Advertising',
];

const skillsTech = [
  'Front-End Development', '3D Animation', 'Motion Design', 'Game Design',
  'Game Development', 'XR Development', 'Exhibition Design', 'Data Visualization',
];

const tools = 'Figma, Adobe CC, Unity, Unreal, Arduino, Webflow, Cinema 4D, Blender, Fusion 360, Sketchup, Salesforce, Jira';
const code = 'C, C++, C#, Node.js (React, Vue), JavaScript, p5.js, three.js, HTML, CSS, Android SDK, MRTK, ARDK, Agile Scrum, WebGL, Java, Python, Apex, AWS, Git, SQL';

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h2 className="about-hero-subtitle">
            Design transcends mere pixels and code;
          </h2>
          <p className="about-hero-description">
            it's about giving technology a human touch and advocating for usability and accessibility.
          </p>
        </div>
      </section>

      {/* Photo gallery with captions */}
      <section className="about-gallery">
        <div className="gallery-item">
          <div className="gallery-image-placeholder" />
          <p>This led me to learn the power of narratives and embrace a design thinking approach at Parsons School of Design, The New School, New York.</p>
        </div>
        <div className="gallery-item">
          <div className="gallery-image-placeholder" />
          <p>My work has been featured on platforms like IBM Quantum Jam, Games for Change, NYCxDesign, Dezeen, Wanderville Arcade, and XR Guild.</p>
        </div>
        <div className="gallery-item">
          <div className="gallery-image-placeholder" />
          <p>Working at an AdTech firm ignited my passion for design.</p>
        </div>
        <div className="gallery-item">
          <div className="gallery-image-placeholder" />
          <p>I participate in hackathons to stay inspired and acquire hands-on experience.</p>
        </div>
      </section>

      {/* Bridge statement */}
      <section className="about-bridge">
        <h2>I bridge the gap between design and development</h2>
        <p>
          I create digital experiences that evoke emotion and foster meaningful communication.
          I have worked across B2B, SaaS, AdTech, Fintech, and gaming industries.
        </p>
      </section>

      {/* Bio */}
      <section className="about-bio">
        <h2>Hey, I'm Simran</h2>
        <h3>Creative Technologist 👩‍💻 UX/UI Designer | UX Engineer | XR Dev | Web Dev | Creative Coder</h3>
        <p>🤏 Pinch of Storytelling magic makes every solution more credible 🧝</p>
        <p>
          Working at an AdTech startup ignited my passion for design. This journey led me to pursue
          an MFA in Design Technology at Parsons School of Design in New York. There, I discovered
          each word's profound impact in shaping a compelling narrative. Parsons equipped me with the
          tools and exposure needed to embrace the design process—a shift that felt unconventional
          coming from my engineering background.
        </p>
        <p>
          Since then, I've navigated the dynamic landscape of startups, immersing myself in the
          creation of websites, apps, games, and experiences. For me, design transcends mere pixels
          and code; it's a medium for cultivating empathy and opening channels of interpersonal
          communication. I take pride in showcasing my work at exhibitions and hackathons, constantly
          refining my skills and staying attuned to emerging trends.
        </p>
        <a
          href="https://81951071-3a04-4117-bc85-8af7676fb589.filesusr.com/ugd/e1bff2_be27070e10cd45d29d7b3e4746dec918.pdf"
          className="btn-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's my resume →
        </a>
      </section>

      {/* Skills */}
      <section className="about-skills">
        <h2>Skills</h2>
        <div className="skills-columns">
          <div className="skills-column">
            <h4>Product Design</h4>
            <ul>
              {skillsDesign.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="skills-column">
            <h4>Creative Tech</h4>
            <ul>
              {skillsTech.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
        <div className="skills-text">
          <p><strong>Tools:</strong> {tools}</p>
          <p><strong>Code:</strong> {code}</p>
        </div>
      </section>

      {/* Experience */}
      <section className="about-experience">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="experience-item">
              <div className="experience-role">
                <h4>{exp.role}</h4>
                <p className="experience-company">{exp.company}</p>
              </div>
              <span className="experience-period">{exp.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="about-education-section">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((ed) => (
            <div key={ed.degree} className="education-item">
              <h4>{ed.degree}</h4>
              <p>{ed.school}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="about-languages">
        <h2>Languages</h2>
        <div className="languages-list">
          <span>English</span>
          <span>Hindi</span>
          <span>French</span>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
