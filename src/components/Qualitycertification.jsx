import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import heroBg from "../assets/who-we-are-banner.png";
import pdcaImage from "../assets/pdca-cycle.png";
import isoPrinciplesImage from "../assets/iso-principles.png";
import iso13485Image from "../assets/iso13485.png";
import iso9001Image from "../assets/iso9001.png";
import iso27001Image from "../assets/iso27001.png";
import "./Qualitycertification.css";

function Qualitycertification() {
  return (
    <>
      <Navbar />

      <section
        className="who-hero-section"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="hero-overlay">
      
          <div className="hero-content">
      
            <h1>
             Quality Certifications
            </h1>
      
            <p>
              We bring bold, out-of-the-box thinking and a desire to be the best
              in our work in digital solutions, engineering services, and industries
              to serve.
            </p>
      
            <button className="hero-btn">
              Talk to us
            </button>
      
          </div>
      
        </div>
      </section>
      
      {/* Breadcrumb */}
      
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb-container">
      
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
      
          <span>›</span>
      
          <Link to="/about-us" className="breadcrumb-link">
            About Us
          </Link>
      
          <span>›</span>
      
          <span className="active-page">
            Who We Are
          </span>
      
        </div>
      </div>

      {/* QUALITY STANDARDS SECTION */}

<section className="quality-standards-section">
  <div className="quality-standards-container">

    <div className="quality-quote-row">
      <span className="quality-quote">❝</span>

      <p className="quality-intro">
        At PurpleNow, we are committed to delivering high-quality engineering
        services that meet and exceed our clients' expectations. Quality is at
        the core of everything that we do, and we continuously strive to improve
        our processes and procedures to ensure the highest levels of quality in
        our services.
      </p>
    </div>

    <div className="quality-divider"></div>

    <h2 className="quality-heading">
      Quality Standards and Certifications
    </h2>

    <div className="quality-line"></div>

    <p className="quality-description">
      The most important factor to make any customer satisfied is by delivering
      consistent quality services. This will not happen unless the key
      organizational processes are controlled and continuously improved. We
      adhere to several quality standards and certifications in our engineering
      services, including:
    </p>

    <ul className="quality-list">
      <li>ISO 9001:2015 Quality Management System</li>

      

      <li>
        ISO/IEC 27001:2022 Cyber Resilience with Superior Information
        Security Management
      </li>
    </ul>

  </div>
</section>
{/* CERTIFICATION CARDS */}

<section className="certifications-section">

  


  <div className="certification-card">

    <div className="card-strip"></div>

    <div className="card-image">
      <img src={iso9001Image} alt="ISO 9001" />
    </div>

    <div className="card-content">

      <h2>ISO 9001:2015</h2>

      <h4>
        Quality Management System
      </h4>

      <div className="card-quote">
        ❝
      </div>

      <p>
        ISO 9001 provides an excellent framework for organizations
        to define a quality management system and necessary guidelines.
        PurpleNow follows strict quality procedures to ensure
        continuous improvement and customer satisfaction.
      </p>

    </div>

  </div>


  <div className="certification-card">

    <div className="card-strip"></div>

    <div className="card-image">
      <img src={iso27001Image} alt="ISO 27001" />
    </div>

    <div className="card-content">

      <h2>ISO/IEC 27001:2022</h2>

      <h4>
        Information Security Management System
      </h4>

      <div className="card-quote">
        ❝
      </div>

      <p>
        ISO/IEC 27001 demonstrates PurpleNow's commitment
        to protecting customer information through a robust
        information security management framework and
        continuous risk management practices.
      </p>

    </div>

  </div>

</section>

      <section className="iso-section">

  <div className="iso-container">

    <h2 className="iso-title">
      We follow ISO 9001 principles at Purplenow
    </h2>

    <div className="iso-line"></div>

    <p className="iso-description">
      Strong customer focus and continual improvement has always been the
      core objective of our organization. Here at PurpleNow Technologies,
      the quality management system is built upon the above principles to
      meet key requirements of the ISO 9001 standard.
    </p>

    <div className="iso-image-wrapper">
      <img
        src={isoPrinciplesImage}
        alt="ISO 9001 Principles"
      />
    </div>

  </div>

</section>


      <section className="pdca-section">

  <div className="pdca-container">

    <h2 className="pdca-title">
      PDCA Cycle
    </h2>

    <div className="pdca-line"></div>

    <p className="pdca-description">
      The goal of our quality management system (QMS) is to work towards
      improvement of the company to compete in the ever-growing competitive
      market. The PDCA principle of the ISO 9001 standard helps to promote a
      process-driven culture across our organization.
    </p>

    <div className="pdca-image-wrapper">
      <img
        src={pdcaImage}
        alt="PDCA Cycle"
      />
    </div>

  </div>

</section>
      
      <Newsletter />
      <Footer />
    </>
  );
}

export default Qualitycertification;