import "./ComplianceManager.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from "react";
import newsletterBg from "../assets/newsletter.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import envServicesBannerImg from "../assets/Env_services_banner_img.png";
import envRegulationImg from "../assets/Env_reg_banner_img.png";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import enterpriseHero from "../assets/enterprise-hero.png";

    function Enterprise() {
      const [activeTab, setActiveTab] = useState("who-it-for");
  

  return (
    <>
      <Navbar />

      <div className="compliance-page">

        {/* HERO SECTION */}

       {/* HERO SECTION */}

<section
  className="compliance-hero"
  style={{
    backgroundImage: `url(${enterpriseHero})`,
  }}
>
  <div className="compliance-content">

    {/* SMALL HEADING */}

    

    {/* MAIN HEADING */}

    

  </div>
</section>
{/* INFO SECTION */}

<section className="info-section">

  {/* BREADCRUMB */}

  <div className="info-breadcrumb">

    <Link to="/">Home</Link>
    <span className="slash">›</span>

    <span>Industries</span>

    <span className="slash">›</span>

    <span className="active-page">
      Enterprise device
    </span>

  </div>

  {/* TOP CONTENT */}

  <div className="info-top">

    {/* LEFT */}

    <div className="info-left">

      <h2>
        Accelerate Enterprise Device Innovation with Advanced Technology Solutions
      </h2>

      <p>
        Request a Demo and discover how Purplenow can help accelerate your enterprise device transformation journey. Our experts will assess your business and technology requirements and provide tailored recommendations across Networking, Cloud Infrastructure, Embedded Systems, IoT Solutions, Data Engineering, Data Analytics, Cybersecurity, and Managed Services.
      </p>

    </div>

    {/* RIGHT FORM */}

    <div className="info-form">

      <div className="form-row">

        <input
          type="text"
          placeholder="Full Name *"
        />

        <input
          type="email"
          placeholder="Business Email *"
        />

      </div>

      <textarea
        placeholder="Your Message/Requirement"
      ></textarea>

      <button>
        Book a Demo
      </button>

    </div>

  </div>

</section>
       
       {/* ================= TABS SECTION ================= */}

{/* ================= TABS SECTION ================= */}

<div className="product-tabs">

  <a
    href="#who-it-for"
    className={activeTab === "who-it-for" ? "active" : ""}
    onClick={() => setActiveTab("who-it-for")}
  >
    Who It's For
  </a>

  <a
    href="#how-it-works"
    className={activeTab === "how-it-works" ? "active" : ""}
    onClick={() => setActiveTab("how-it-works")}
  >
    How It Works
  </a>

  <a
    href="#features"
    className={activeTab === "features" ? "active" : ""}
    onClick={() => setActiveTab("features")}
  >
    Features
  </a>

  <a
    href="#key-differentiators"
    className={activeTab === "key-differentiators" ? "active" : ""}
    onClick={() => setActiveTab("key-differentiators")}
  >
    Key Differentiators
  </a>

  <a
    href="#services"
    className={activeTab === "services" ? "active" : ""}
    onClick={() => setActiveTab("services")}
  >
    Services
  </a>

  
  <a
  href="#related-products"
  className={activeTab === "related-products" ? "active" : ""}
  onClick={() => setActiveTab("related-products")}
>
  Related Products
</a>

</div>

{/* ================= WHO IT'S FOR ================= */}

<section
  id="who-it-for"
  className="content-section"
>

  <div className="content-wrapper">

    
  </div>

</section>


{/* ================= HOW IT WORKS ================= */}

{/* ================= WHO IT'S FOR ================= */}

<section id="who-it-for" className="tab-section">

  <div className="tab-left-shape"></div>

  <div className="tab-content">

    <h2>Who It’s For</h2>

    <div className="yellow-line"></div>

    <p>
      Purplenow empowers enterprise device manufacturers, technology providers, OEMs, and organizations with innovative technology solutions across Networking, Cloud Infrastructure, Embedded Systems, Internet of Things (IoT), Data Engineering, Data Analytics, Cybersecurity, and Managed Services.
    </p>

  </div>

</section>


{/* ================= HOW IT WORKS ================= */}

<section id="how-it-works" className="tab-section">

  <div className="tab-left-shape"></div>

  <div className="tab-grid">

    <div className="tab-text">

      <h2>How it Works</h2>

      <div className="yellow-line"></div>

      <p>
       Our proven delivery framework helps organizations accelerate enterprise device innovation through strategic planning, seamless implementation, and continuous optimization.
      </p>

      <div className="work-card">

        <h3>
          1. Discovery & Assessment
        </h3>

        <ul>

          <li>
           Understand your business objectives, device requirements, and technology challenges.
          </li>

          <li>
           Assess existing device ecosystems, network infrastructure, cloud environments, and security posture.
          </li>

          <li>
            Identify opportunities to improve connectivity, performance, scalability, and operational efficiency.
          </li>

        </ul>

      </div>

      <div className="work-card">

        <h3>
          2. Solution Design & Development
        </h3>

        <ul>

          <li>
          Design scalable, secure, and future-ready enterprise device architectures.
          </li>

          <li>
          Develop and deploy Networking, Cloud, Embedded, IoT, Data Engineering, Analytics, and Cybersecurity solutions.
          </li>

          <li>
           Integrate seamlessly with enterprise applications, device management platforms, and business systems.
          </li>

        </ul>

      </div>

    </div>

    <div className="tab-image-box">

      <img
        src="/hero1.jpg"
        alt=""
      />

    </div>

  </div>

</section>


{/* ================= FEATURES ================= */}

<section id="features" className="tab-section">

  <div className="tab-left-shape"></div>

  <div className="tab-content">

    <h2>Features</h2>

    <div className="yellow-line"></div>

    <div className="feature-grid">

      <div className="feature-card">

        <h3>
          Connected Enterprise Device & IoT Solutions
        </h3>

        <p>
          Enable real-time device monitoring, remote management, predictive maintenance, and intelligent connectivity through advanced IoT ecosystems.
        </p>

      </div>

      <div className="feature-card">

        <h3>
         Cloud & Data-Driven Operations
        </h3>

        <p>
       Leverage scalable cloud platforms, data engineering, and analytics solutions to improve visibility, optimize performance, and support data-driven decision-making.
        </p>

      </div>

      <div className="feature-card">

        <h3>
         Embedded Systems & Cybersecurity
        </h3>

        <p>
          Develop secure, high-performance embedded solutions while protecting enterprise devices, networks, and connected ecosystems from evolving cyber threats.
        </p>

      </div>

    </div>

  </div>

</section>


{/* ================= KEY DIFFERENTIATORS ================= */}

<section id="key-differentiators" className="tab-section">

  <div className="tab-left-shape"></div>

  <div className="tab-content">

    <h2>Key Differentiators</h2>

    <div className="yellow-line"></div>

    <div className="feature-grid">

      <div className="feature-card">

        <h3>
         Enterprise Device Domain Expertise
        </h3>

        <p>
          Deep understanding of enterprise device ecosystems, connected technologies, edge computing, device lifecycle management, and digital transformation initiatives.
        </p>

      </div>

      <div className="feature-card">

        <h3>
          End-to-End Technology Solutions
        </h3>

        <p>
         From networking and cloud infrastructure to embedded systems, IoT, cybersecurity, data engineering, analytics, and managed services, we deliver comprehensive solutions under one roof.
        </p>

      </div>

      <div className="feature-card">

        <h3>
        Scalable & Future-Ready Delivery
        </h3>

        <p>
          Accelerate innovation with flexible, scalable solutions designed to support intelligent devices, connected ecosystems, and next-generation enterprise technologies.
        </p>

      </div>

    </div>

  </div>

</section>
{/* ================= ENVIRONMENTAL SERVICES BANNER ================= */}

<section
  id="services"
  className="env-services-banner"
>
  <div className="env-services-overlay">

    {/* LEFT IMAGE */}
    <div
  className="env-banner-image"
  style={{
    backgroundImage: `url(${envServicesBannerImg})`,
  }}
></div>

    {/* RIGHT CONTENT */}
    <div className="env-banner-content">

      <h2>Comprehensive Enterprise Device Technology Solutions</h2>

      <p>
        Empower your organization with Purplenow's expertise in Networking, Cloud Infrastructure, Embedded Systems, IoT, Data Engineering, Data Analytics, Cybersecurity, and Managed Services. We help businesses build secure, connected, and intelligent enterprise device ecosystems that drive innovation, operational efficiency, and sustainable growth.
      </p>

      <button
        className="env-services-btn"
        onClick={() => navigate("/environmental-services")}
      >
        Explore Our Services
      </button>

    </div>
  </div>
</section>





{/* ================= RELATED PRODUCTS ================= */}

{/*
<section
  id="related-products"
  className="related-products-section"
>

  <div className="related-products-container">

    <div className="related-heading">
      <h2>Related Products</h2>
      <div className="related-line"></div>
    </div>

    <div className="related-grid">

      <div className="related-card">

        <img
          src={service1}
          alt=""
        />

        <div className="related-card-content">

          <h3>
            Purplenow Obsolescence Manager
          </h3>

          <p>
            Safeguard your business against obsolescence and
            effectively manage part/component lifecycle risks.
          </p>

          <button
            onClick={() =>
              navigate("/solutions/obsolescence-manager")
            }
          >
            Learn More
          </button>

        </div>

      </div>

      <div className="related-card">

        <img
          src={service2}
          alt=""
        />

        <div className="related-card-content">

          <h3>
            Purplenow Regulatory Master
          </h3>

          <p>
            Simplify global regulatory compliance with our
            streamlined SaaS application and services.
          </p>

          <button
            onClick={() =>
              navigate("/solutions/regulatory-master")
            }
          >
            Learn More
          </button>

        </div>

      </div>

      <div className="related-card">

        <img
          src={service3}
          alt=""
        />

        <div className="related-card-content">

          <h3>
            Environmental Compliance Services
          </h3>

          <p>
            Join the green revolution and ensure your products
            are environmentally compliant globally.
          </p>

          <button
            onClick={() =>
              navigate("/environmental-services")
            }
          >
            Learn More
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
*/}

{/* ================= RESOURCES SECTION ================= */}

{/*
<section
  id="resources"
  className="resources-section"
>

  <div className="resources-container">

    <div className="resources-heading">

      <h2>
        Resources you might be interested in
      </h2>

      <div className="resources-line"></div>

    </div>

    <div className="resources-grid">

      <div className="resource-card">

        <h4>Blogs</h4>

        <img
          src={service1}
          alt="Blogs"
        />

        <div className="resource-content">

          <h3>
            Original Design and Manufacturing:
            Building Better Products with the Right Strategy
          </h3>

          <p>
            Bringing a new product to market takes more
            than a strong idea. It requires the right
            engineering and manufacturing strategy.
          </p>

          <button>
            View Blog
          </button>

        </div>

      </div>

      <div className="resource-card">

        <h4>Whitepapers</h4>

        <img
          src={service2}
          alt="Whitepapers"
        />

        <div className="resource-content">

          <h3>
            The Cost of Doing Nothing:
            Quantifying Obsolescence Risk
          </h3>

          <p>
            Why automation equipment OEMs must treat
            obsolescence management as a core
            business strategy.
          </p>

          <button>
            View Whitepapers
          </button>

        </div>

      </div>

      <div className="resource-card">

        <h4>Webinars</h4>

        <img
          src={service3}
          alt="Webinars"
        />

        <div className="resource-content">

          <h3>
            Original Design & Manufacturing -
            From Idea to Commercial Product
          </h3>

          <p>
            Learn what it takes to transform a great
            product idea into a successful and scalable
            commercial solution.
          </p>

          <button>
            View Webinar
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
*/}
{/* ================= NEWSLETTER SECTION ================= */}

<section
  className="newsletter-section"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(${newsletterBg})`
  }}
>

  <div className="newsletter-overlay">

    <div className="newsletter-container">

      <h2>Subscribe to our Newsletter</h2>

      <form className="newsletter-form">

        <div className="newsletter-group">
          <label>Business Email</label>
          <input
            type="email"
            placeholder="Business Email *"
          />
        </div>

        <div className="newsletter-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name *"
          />
        </div>

        <div className="newsletter-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name *"
          />
        </div>

        <div className="newsletter-group">
          <label>Interested In</label>

          <select>
            <option>Select Solutions</option>
            <option>Compliance Management</option>
            <option>Software Solutions</option>
            <option>Industrial Automation</option>
            <option>Embedded Systems</option>
          </select>
        </div>

      </form>

      <p className="newsletter-text">
        By submitting, I agree to receive newsletters and updates
        from Purplenow Technologies and can unsubscribe at any time.
        View <span>Privacy Policy.</span>
      </p>

      <button className="newsletter-btn">
        Subscribe
      </button>

    </div>

  </div>

</section>

{/* ================= CONTACT CTA SECTION ================= */}

<section className="contact-cta-section">
  <div className="contact-cta-container">

    <div className="contact-left">
      <h2>Let us know how we can help you!</h2>
      <p>We'd love to hear from you</p>
    </div>

    <div className="contact-right">
      <button className="contact-btn">
        Contact Us
      </button>
    </div>

  </div>
</section>


      </div>

      <Footer />
    </>
  );
}

export default Enterprise;