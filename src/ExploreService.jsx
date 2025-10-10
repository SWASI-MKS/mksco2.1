import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ExploreService.css';


const servicesData = [
  {
    icon: '🧱',
    title: 'Plan & Approvals',
    subtitle: 'For clients who are just starting — this is where it all begins.',
     features: [
      { text: 'Vastu-Compliant Building Plans 🔓', link: '/services/vaasthu' },
      { text: 'Land Surveying Services 🔓', link: '/services/surveying' },
      //{ text: 'Survey Plan Preparation', link: '/services/survey-plan' },
      { text: 'Plot Separation Services 🔓', link: '/services/plot-separation' },
      { text: 'Building Plan Approval & Appeal Plan 🔐', link: '/services/approval' },
      { text: 'Building Plan Approval (Corporation / Panchayat) 🔐', link: '/services/building-approval' },
    ],
  },
  {
    icon: '🏛️',
    title: 'Architectural Design & Visualization',
    subtitle: 'Turning ideas into blueprints and immersive 3D visuals.',
    features: [
  { text: 'Concept Planning  🔐', link: '/services/architectural-concept-planning' },
  { text: 'Architectural Drawings 🔐', link: '/services/architectural-drawings' },
  { text: 'Construction / Working Drawings 🔐', link: '/services/construction-working-drawings' },
  { text: 'Floor Plans 🔐', link: '/services/floor-plans' },
  { text: 'Electrical Layouts 🔐', link: '/services/electrical-layout' },
  { text: 'Sections & Elevations 🔐', link: '/services/sections-elevations' },
  { text: '3D & Interior Views 🔐', link: '/services/3d-interior' },
]
  },
  
  {
  icon: '💰',
  title: 'Estimation & Financial Services',
  subtitle: 'For planning your project budget and securing funding.',
  features: [
    { text: 'Cost Estimation Services 🔐', link: '/services/cost-estimation' },
    { text: 'Construction & Bank Estimation Reports 🔐', link: '/services/construction-bank-estimation' },
    { text: 'Bank Loan Assistance 🔐', link: '/services/bank-loan-assistance' },
  ],
},
 {
    icon: '📋',
    title: 'Inspection, Certification & Documentation',
    subtitle: 'Stay compliant, safe, and certified at every stage.',
    features: [
      { text: 'Ammonia Blueprints (Optional) 🔐', link: '/services/inspection/ammonia' },
      { text: 'Public Building Stability Certification & Moment Calculation Sheet 🔐', link: '/services/inspection/certification' },
      { text: 'Site Inspections (Stability, Rebar Checking, Renovation) 🔐', link: '/services/inspection/site' },
    ],
  },
    {
    icon: '🧠',
    title: 'Structural Design & Detailing',
    subtitle: 'Technical design to make your structure strong, safe, and build-ready.',
    features: [
    { text: 'Structural Design & Detailing 🔐', link: '/services/structural-design-detailing' },
    { text: 'Column Center Line Drawing 🔐', link: '/services/ccl-drawing' },
    { text: 'Foundation Earth Work Layout 🔐', link: '/services/work-layout' },
    { text: 'Column & Footing Reinforcement Schedule 🔐', link: '/services/rc-schedule' },
    { text: 'Footing Cross Sectional Reinforcement Details 🔐', link: '/services/footing-rcc-details' },
    { text: 'Column Cross Sectional Reinforcement Details 🔐', link: '/services/column-rc-details' },
    { text: 'Earth Beam, Plinth Beam & Belt Layout 🔐', link: '/services/beam-layout' },
    { text: 'Staircase Reinforcement Details 🔐', link: '/services/staircase-rc-details' },
    { text: 'Lintel Bleam, Loft & Sunshade Reinforcement Details 🔐', link: '/services/rc-details' },
    { text: 'Roof Slab & Beam Layout', link: '/services/layout 🔐' },
    { text: 'Slab Reinforcement Details (north-south and east-west) 🔐', link: '/services/slab-rc-details' },
    { text: 'Beam Reinforcement Details', link: '/services/beam-rc-details 🔐' },
    { text: 'Stair Headroom, Water Tank, Sump Reinforcement Details 🔐', link: '/services/rc' },
    { text: 'Bar Bending Schedule for Estimation Purpose and for Curtilement Length 🔐', link: '/services/bbs' },
  ]
  },
  {
    icon: '🏗️',
    title: 'Construction & Execution',
    subtitle: 'Time to bring the project to life on your land.',
    features: [
    { text: 'Construction on Client-Owned Land 🔐', link: '/services/construction/client-land' },
    { text: 'RCC & Steel Structures, Roof Trusses 🔐', link: '/services/construction/rcc-steel' },
    { text: 'PEB (Pre-Engineered Building) Design & Detailing 🔐', link: '/services/construction/peb' },
    { text: 'Steel & Spiral Staircase Fabrication 🔐', link: '/services/construction/staircase' },
    { text: 'Electrical & Plumbing Installations 🔐', link: '/services/construction/electrical-plumbing' },
    { text: 'Vitrified Tiles Flooring, Doors & Windows Fixing 🔐', link: '/services/construction/fixing' },
    { text: 'Whitewash & Color Paint Work 🔐', link: '/services/construction/painting' },
  ],
  },
  {
    icon: '📚',
    title: 'Education & Training',
    subtitle: 'Empowering the next generation of civil engineers.',
     features: [
    { text: 'Internship Opportunities for Civil Engineering Students 🔐', link: '/services/education/internship' },
    { text: 'CAD training and Rebar CAD Drafting Training 🔐', link: '/services/education/cad-training' },
    { text: 'Actual Site Measurements into CAD Drafting 🔐', link: '/services/education/sitemeasurement-draft' },
    { text: 'Basic Introduction of Auto LISP Programming 🔐', link: '/services/education/lisp-intro' },
  ],
  },
];
const ExploreService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [areAwardsVisible, setAreAwardsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
    setTimeout(() => setAreAwardsVisible(true), 400);
  }, []);

  return (
    <section className="explore-service">
      <h2 className="section-heading">
             <h2 style={{ color: "#0000FF", fontSize: "38px", fontWeight: "bold" }}>Explore Our Services</h2>

        <span className="underline" />
      </h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-card fade-in ${isVisible ? 'fade-in' : ''}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
            role="button"
            tabIndex={0}
          >
            <div className="icon">{service.icon}</div>
            <div className="title">{service.title}</div>
            <div className="description">{service.subtitle}</div>
<ul className="features">
  {service.features.map((item, i) => {
    const isLocked = item.text.includes('🔐'); // locked if 🔐
    return (
      <li key={i}>
        {isLocked ? (
          <span className="feature locked">{item.text}</span>
        ) : item.link.startsWith('/services') ? (
          <Link className="feature unlocked" to={item.link}>{item.text}</Link>
        ) : (
          <a className="feature unlocked" href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
        )}
      </li>
    );
  })}
</ul>

          </div>
        ))}
      </div>
     
    </section>
  );
};

export default ExploreService;
