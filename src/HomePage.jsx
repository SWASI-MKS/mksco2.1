// HomePage.jsx
import React, { useState, useRef } from 'react';
import './App.css';
import villaVideo from './villaVideo.mp4';
import logo from './logo.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ExploreService from './ExploreService';
import InternshipExperience from './InternshipExperience';
import FeedbackCarousel from './FeedbackCarousel';
import aw1 from './aw1.jpg';
import aw2 from './aw2.jpg';
import aw3 from './aw3.jpg';
import aw4 from './aw4.jpg';
import aw5 from './aw5.jpg';
import instagramIcon from './instagram.png';
import whatsappIcon from './whatsapp.png';
import gmailIcon from './gmail.png';
import facebookIcon from './facebook.png';
import youtubeIcon from './youtube.png';
import MagneticImage from './MagneticImage';

function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="stats-section" ref={ref}>
      <h2 className="stats-title">
        BENEFITTED BY <span className="heart">🧑🏻‍🎓👩🏻‍🎓 👥</span>
      </h2>
      <div className="stats-grid">
        <div className="stat-box">
          <h3>{inView && <CountUp start={0} end={50} suffix="+" duration={2.5} delay={1.0} />}</h3>
          <p>Employed Students</p>
        </div>
        <div className="stat-box">
          <h3>{inView && <CountUp start={0} end={300} suffix="+" duration={2.5} delay={1.0} />}</h3>
          <p>Students Trained</p>
        </div>
        <div className="stat-box">
          <h3>{inView && <CountUp start={0} end={560} suffix="+" duration={3.0} delay={0.5} />}</h3>
          <p>Delivered Projects</p>
        </div>
        <div className="stat-box">
          <h3>{inView && <CountUp start={0} end={60} suffix="+" duration={2.0} delay={1.5} />}</h3>
          <p>On-Going Projects</p>
        </div>
      </div>
    </div>
  );
}

function GallerySection() {
  const images = [aw2, aw1, aw4, aw3, aw5];
  return (
    <section className="gallery-section">
      <h2 style={{ color: "#0000FF", fontSize: "38px", fontWeight: "bold" }}>Awards</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <MagneticImage src={src} alt={`Project ${index + 1}`} className="featured-img" />
          </div>
        ))}
      </div><br></br>
      {/* Video Section */}
      <div className="videos-section" style={{ marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ color: "#0000FF", fontSize: "38px", fontWeight: "bold" }}>Animated house model</h3><br></br>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <video controls style={{ maxWidth: '45%', height: 'auto' }}>
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls style={{ maxWidth: '45%', height: 'auto' }}>
            <source src="/vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const [showMapDiv, setShowMapDiv] = useState(false);
  const mapRef = useRef(null);

  const handleToggleMap = () => {
    const willShow = !showMapDiv;
    setShowMapDiv(willShow);
    if (!showMapDiv) {
      setTimeout(() => {
        if (mapRef.current) {
          const yOffset = -100;
          const y = mapRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <>
      <nav>
        <header>
  <div className="logo-container">
    <div className="logo-frame">
      <a href="#">
        <img src={logo} alt="Logo" className="logo" />
      </a>
    </div>
    <div className="nav-right">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</header>
</nav>

<section className="hero-section">
  <video className="hero-video" autoPlay muted loop playsInline>
    <source src={villaVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="hero-overlay">
    <h1 className="hero-title">Turning Ideas into Landmarks</h1>
    <p className="hero-subtitle">From Concept to Concrete</p>
  </div>
</section>


      <div className="main-content">
        <StatsSection />

        <section id="about" className="about-section">
          <h2 style={{ color: "#0000FF" }}>About Us</h2>

          <p>
            Welcome to <strong>MKS CONSULTANT</strong>, your trusted gateway to the world of <strong>Civil Engineering</strong>!
            We are a passionate collective of engineers and innovators dedicated to shaping a smarter, more resilient, and sustainable future.
          </p>
          <p>
            Our platform serves as a dynamic hub for professionals and industry enthusiasts to explore cutting-edge trends,
            showcase transformative projects, and engage with domain experts.
          </p>
          <p>
            From advanced structural designs to eco-conscious construction practices, we strive to bridge the gap between
            traditional engineering foundations and modern-world application.
          </p>
          <p><strong>Join us where your growth is our blueprint, and your success is our structure.</strong></p>
        </section>

        <GallerySection />

        <section className="why-mks-section">
          <h2 style={{ color: "#0000FF", fontSize: "38px", fontWeight: "bold" }}>WHY MKS CONSULTANT STANDS ABOVE THE REST</h2>
          <p>
            Since its inception in 2012, <strong>MKS CONSULTANT</strong> has been more than just a civil engineering firm — 
            it has been a symbol of integrity, innovation, and impact. What sets us apart is not just our mastery of 
            brick and blueprint, but our unwavering commitment to turning ideas into enduring landmarks. With a track 
            record of delivering hundreds of projects that balance aesthetic excellence and structural strength, we 
            blend cutting-edge technology with time-tested techniques to deliver outcomes that exceed expectations. 
          </p>
          <p>
            Our approach is deeply human — we listen, we adapt, and we build not just structures, but trust. Every 
            client, every blueprint, every milestone is handled with a rare blend of precision and passion. While 
            others construct, we create legacies — and that is why <strong>MKS CONSULTANT</strong> continues to rise 
            above the rest.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <h2>Get in Touch with Us</h2>
          <div className="social-links">
            <a href="https://wa.me/+919514454292" target="_blank" className="social-icon whatsapp"><img src={whatsappIcon} alt="WhatsApp" /><span>WhatsApp</span></a>
            <a href="mailto:mksconsultantmadurai@gmail.com" className="social-icon gmail"><img src={gmailIcon} alt="Gmail" /><span>Gmail</span></a>
            <a href="https://www.youtube.com/@maduraicivilengineers6591" target="_blank" className="social-icon youtube"><img src={youtubeIcon} alt="Youtube" /><span>Youtube</span></a>
          </div>

          <div className="map-details">
            <p className="map-label">meet us at</p>
            <p className="map-coordinates">
              <a href="https://maps.app.goo.gl/xXHkdZQ5GxiFfX199" target="_blank" rel="noopener noreferrer">
                9.912035148957713, 78.12313127397513
              </a>
            </p>
            <p className="view-map">view in map</p>
            <p className="arrow" onClick={handleToggleMap}>⌄</p>
          </div>

          {showMapDiv && (
            <div className={`revealed-div ${showMapDiv ? 'show' : ''}`} ref={mapRef}>
              <button className="close-banner" onClick={() => setShowMapDiv(false)}>✕</button>
              <div className="maps-containers">
                <iframe
                  src="https://www.google.com/maps?q=9.912030,78.123044&hl=en&z=16&output=embed"
                  allowFullScreen=""
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MKS Consultant Location"
                ></iframe>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Services Section ID added here for menu scrolling */}
     <div className="App" id="services">
  <ExploreService />
  <br />
  <InternshipExperience />
</div>

      <br /><br />
      <div><FeedbackCarousel /></div>

<footer className="footer">
  <div className="footer-container">
    {/* About Section */}
    <div className="footer-about">
      <div className="footer-brand">
        {/* ✅ Logo scrolls to top on click */}
        <img
          src={logo}
          alt="logo"
          className="footer-logo"
          style={{ cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        /><br></br>
        <span className="footer-text">MKS CONSULTANT</span>
      </div>
      <p>
        MKS CONSULTANT, founded in 2012 in Madurai by Srinivasan M K, is a trusted civil engineering firm
        delivering innovative and reliable structural solutions. We specialize in architectural planning,
        project management, and site execution for residential, commercial, and industrial projects.
        Driven by the motto "Turning Ideas into Landmarks," we blend engineering precision with creative
        vision to build lasting impact.
      </p>
      <p>
        <strong>REGISTERED ADDRESS</strong>
        <br />
        20-A, Panthadi 8th Street,<br />
        Thavittusanthai, Madurai-625001, Tamil Nadu
      </p>

      {/* Social Icons */}
      <div className="social-icons">
        {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/mksconsultant/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a> */}
        <a href="https://wa.me/919865026160" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>&nbsp;&nbsp;
        <a href="https://www.youtube.com/@maduraicivilengineers6591" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>&nbsp;&nbsp;
        {/* Yahoo Icon */}
        <a href="https://www.yahoo.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-yahoo"></i>
        </a>
      </div>
    </div>

    {/* Links Section */}
    <div className="footer-links">
      <div>
        <h3>SERVICES</h3><br /><br />
        <ul>
          <li><a href="/services/vaasthu" target="_blank" rel="noopener noreferrer">Vaasthu Plan</a></li>
          <li><a href="/services/architecture-drawing" target="_blank" rel="noopener noreferrer">Architectural Drawing</a></li>
          <li><a href="/services/concept-plan" target="_blank" rel="noopener noreferrer">Concept Plan</a></li>
          <li><a href="/services/renovation" target="_blank" rel="noopener noreferrer">Building Renovation</a></li>
          <li><a href="/services/land-survey" target="_blank" rel="noopener noreferrer">Land Survey</a></li>
          <li><a href="/services/plan-approval" target="_blank" rel="noopener noreferrer">Building Plan Approval</a></li>
          <li><a href="/services/internships" target="_blank" rel="noopener noreferrer">Internships for Civil Students</a></li>
        </ul>
      </div>
      <div>
        <h3>ASSOCIATORS</h3><br /><br />
        <ul>
          <li><a href="https://www.amce.edu.in" target="_blank" rel="noopener noreferrer">AMCE</a></li>
          <li><a href="https://souko.org" target="_blank" rel="noopener noreferrer">SOUKO</a></li>
          <li><a href="https://lionsclubs.org" target="_blank" rel="noopener noreferrer">LIONS Madurai Host Club</a></li>
        </ul>
      </div>
      <div>
        <h3>WEBPAGE THEME</h3><br /><br />
        <ul>
          <li><a href="/theme/light" target="_blank" rel="noopener noreferrer">Light</a></li>
          <li><a href="/theme/dark" target="_blank" rel="noopener noreferrer">Dark</a></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    &copy; 2025 MKS Consultant Pvt. Ltd., All rights reserved.
  </div>
</footer>


    </>
  );
}

export default HomePage;
