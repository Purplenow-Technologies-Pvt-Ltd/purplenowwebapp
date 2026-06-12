
import "./Environmentalregulations.css";

import "./ObsolesenceManager.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from "react";
import newsletterBg from "../assets/newsletter.jpg";

import envServicesBannerImg from "../assets/Env_services_banner_img.png";
import envRegulationImg from "../assets/Env_reg_banner_img.png";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import bannerImage from "../assets/pcb_banner.png";
import solutionsImg from "../assets/solutions_img.png";
import demoImg from "../assets/demo-img.png";
import overviewImg from "../assets/environment-overview.png";
import howit from "../assets/howit.png";


/* ICONS */
import {
  HiOutlineShieldCheck,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import {
  LuBadgeCheck,
} from "react-icons/lu";


function Environmentalregulations() {
  const [activeTab, setActiveTab] = useState("services");
  

  return (
    <>
      <Navbar />


  <div className="obsolescence-page">


{/* ================= TOP NAVIGATION SECTION ================= */}

<div className="top-navigation-section">

  {/* ================= BREADCRUMB ================= */}

  <div className="breadcrumb-wrapper">

    <div className="breadcrumb-links">

      <span onClick={() => navigate("/")}>Home</span>

      <p>{">"}</p>

      <span onClick={() => navigate("/solutions")}>Solutions</span>

      <p>{">"}</p>

      <h4>Environmental Regulations</h4>

    </div>

  </div>

  {/* ================= TABS ================= */}

  <div className="tabs-wrapper">

    <button
      className={activeTab === "overview" ? "tab active-tab" : "tab"}
      onClick={() => {
        setActiveTab("overview");
        navigate("/");
      }}
    >
      Overview
    </button>

    <button
      className={activeTab === "regulations" ? "tab active-tab" : "tab"}
      onClick={() => {
        setActiveTab("regulations");
        navigate("/regulations");
      }}
    >
      Our Technological Solutions
    </button>

    <button
      className={activeTab === "help" ? "tab active-tab" : "tab"}
      onClick={() => {
        setActiveTab("help");
        navigate("/help");
      }}
    >
      How We Can Help?
    </button>

    

    <button
      className={activeTab === "demo" ? "tab active-tab" : "tab"}
      onClick={() => {
        setActiveTab("demo");
        navigate("/demo");
      }}
    >
      Book A Demo
    </button>

    

  </div>

</div>
{/* ================= ENVIRONMENTAL OVERVIEW SECTION ================= */}

<div className="env-overview-section">

  <div className="env-overview-container">

    {/* HEADING */}
    <div className="env-overview-heading">
      <h2>Overview</h2>
      <div className="env-yellow-line"></div>
    </div>

    {/* CONTENT */}
    <div className="env-overview-content">

      {/* LEFT IMAGE */}
      <div className="env-overview-image">
        <img
          src={overviewImg}
          alt="overview"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="env-overview-text">
        <p>
          At Purplenow, we help organizations accelerate growth and gain a
          competitive advantage through innovative technology solutions and
          digital transformation services. Our expertise spans Artificial
          Intelligence, Generative AI, Cloud Computing, Managed Services (MSP),
          Cloud Solutions (CSP), Product Engineering, IoT, Data Analytics, and
          Enterprise Applications.

          We enable businesses to modernize operations, optimize processes, and
          unlock the full potential of their data through intelligent,
          scalable, and secure solutions. From cloud adoption and application
          modernization to AI-driven automation and advanced analytics, we
          deliver technology strategies that drive measurable business outcomes.
        </p>
      </div>

    </div>

  </div>

</div>
{/* ================= HEADING SECTION ================= */}

<div className="environment-heading-section">

  <h2>Our Technology Solutions</h2>

  <div className="environment-yellow-line"></div>

  <p>
    Purplenow delivers innovative technology solutions that help organizations accelerate digital transformation, optimize operations, and achieve sustainable growth
  </p>

</div>
{/* ================= REGULATIONS SECTION ================= */}

<section className="regulations-section">

  <div className="regulations-container">

    <div className="regulations-grid">

      {/* CARD 1 */}
      <div className="regulation-card green-card">

        <div className="card-icon">💻</div>

        <h3>Artificial Intelligence & Generative AI</h3>

        <p>
          Unlock the power of intelligent automation, predictive analytics, AI-powered applications, and Generative AI solutions to drive innovation and business efficiency.


        </p>

      </div>

      {/* CARD 2 */}
      <div className="regulation-card yellow-card">

        <div className="card-icon">⚗️</div>

        <h3>Cloud & Digital Transformation</h3>

        <p>
          Modernize your infrastructure and applications with scalable cloud solutions, migration services, cloud optimization, and digital transformation strategies on AWS and Microsoft Azure.


        </p>

      </div>

      {/* CARD 3 */}
      <div className="regulation-card blue-card">

        <div className="card-icon">🔬</div>

        <h3>Managed Services (MSP)</h3>

        <p>
          Ensure business continuity with proactive monitoring, infrastructure management, application support, security services, and 24/7 operational excellence.
        </p>

      </div>

      {/* CARD 4 */}
      <div className="regulation-card pop-card">

        <div className="card-icon">🌿</div>

        <h3>Cloud Solutions Provider (CSP)</h3>

        <p>
          Simplify cloud adoption and management with expert consulting, licensing, procurement, optimization, and ongoing cloud support services.
        </p>

      </div>

      {/* CARD 5 */}
      <div className="regulation-card pfas-card">

        <div className="card-icon">⚛️</div>

        <h3>Product Engineering & Application Development</h3>

        <p>
          Design, develop, and deploy secure, scalable, and high-performance web, mobile, and enterprise applications tailored to your business needs.
        </p>

      </div>

      {/* CARD 6 */}
      <div className="regulation-card scip-card">

        <div className="card-icon">♻️</div>

        <h3>IoT & Embedded Solutions</h3>

        <p>
          Build intelligent connected products with IoT platforms, embedded systems, edge computing, and real-time device management solutions.
        </p>

      </div>

    </div>

    {/* LOAD MORE BUTTON */}
    <div className="load-more-wrapper">

      <button className="load-more-btn">
        Load More
      </button>

    </div>

  </div>

</section>


{/* ================= HOW WE CAN HELP SECTION ================= */}

<section className="help-section">

  {/* LEFT BACKGROUND SHAPE */}
  <div className="help-bg-shape"></div>

  <div className="help-container">

    {/* HEADING */}
    <div className="help-heading">

      <h2>How We Can Help?</h2>

      <div className="help-yellow-line"></div>

      <p>
        Discover the Purplenow Advantage—where innovation, technology, and expertise come together to accelerate your digital transformation journey. We help organizations leverage emerging technologies to drive efficiency, scalability, and sustainable business growth.
      </p>

    </div>

    {/* CONTENT */}
    <div className="help-content">

      {/* LEFT IMAGE */}
      <div className="help-image">

        <img
  src={howit}
  alt="help"
/>

      </div>

      {/* RIGHT POINTS */}
      <div className="help-points">

        {/* POINT 1 */}
        <div className="help-point">

          <h3>
            <span>☑</span>
           AI-Powered Innovation :
          </h3>

          <p>
            Harness the power of Artificial Intelligence, Generative AI, and intelligent automation to streamline operations, enhance decision-making, and unlock new business opportunities.
          </p>

        </div>

        {/* POINT 2 */}
        <div className="help-point">

          <h3>
            <span>☑</span>
            Cloud & Digital Transformation:
          </h3>

          <p>
            Accelerate modernization with scalable cloud solutions, application modernization, and digital transformation services across AWS and Microsoft Azure platforms.
          </p>

        </div>

        {/* POINT 3 */}
        <div className="help-point">

          <h3>
            <span>☑</span>
            Managed Services & Cloud Expertise:
          </h3>

          <p>
           Benefit from proactive infrastructure management, cloud optimization, security monitoring, and ongoing support through our Managed Services (MSP) and Cloud Solutions Provider (CSP) offerings.
          </p>

        </div>

        {/* POINT 4 */}
        <div className="help-point">

          <h3>
            <span>☑</span>
            End-to-End Product Engineering:
          </h3>

          <p>
            From concept to deployment, we deliver high-quality product engineering and application development services that help bring innovative ideas to market faster.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= CTA SECTION ================= */}

<section className="cta-section">

  <div className="cta-container">

    {/* LEFT CONTENT */}
    <div className="cta-left">

      <h2>Unveil the Potential of iCM</h2>

      <p>
        Unlock new opportunities with Purplenow's comprehensive technology solutions. We combine AI, Cloud, MSP, CSP, IoT, and Digital Engineering expertise to help businesses transform operations, enhance customer experiences, and drive measurable outcomes.
      </p>

    </div>

    {/* RIGHT BUTTON */}
    <div className="cta-right">

      <button className="cta-btn">
        Explore the Solution
      </button>

    </div>

  </div>

</section>

{/*demo section*/}

{/* ================= DEMO SECTION ================= */}

<section
  id="demo"
  className="demo-section"
>

  <div className="demo-container">

    {/* HEADING */}

    <div className="demo-heading">

      <h2>Book a Demo</h2>

      <div className="demo-line"></div>

    </div>

    {/* CONTENT */}

    <div className="demo-content">

      {/* LEFT IMAGE */}

      <div className="demo-image-wrapper">

        <img
          src={demoImg}
          alt="Demo"
          className="demo-image"
        />

      </div>

      {/* RIGHT CONTENT */}

      <div className="demo-text">

    <h3>
          Experience Purplenow's Digital Transformation Solutions
        </h3>

        <p>
          Schedule a personalized consultation with our technology experts to discover how Purplenow can help accelerate your business growth and innovation journey.
          During the consultation, our team will:
        </p>

        <ul>

          <li>
            Showcase our expertise in AI, Generative AI, Cloud, MSP, CSP, Digital Engineering, IoT, and Data Analytics
          </li>

          <li>
            Discuss your business challenges, goals, and technology requirements
          </li>

          <li>
            Explore tailored solutions designed to improve efficiency, scalability, and performance
          </li>

          <li>
           Answer your questions and provide strategic technology recommendations
          </li>

        </ul>

        <p className="demo-bottom-text">
          Take the first step toward building a smarter, more agile, and future-ready enterprise with Purplenow.
        </p>


        <button className="demo-btn">
          Book a Demo
        </button>

      </div>

    </div>

  </div>

</section>




{/* ================= NEWS SECTION ================= */}

<section className="news-section">

{/* ================= HEADING ================= */}

<div className="news-heading">

  <h2>
    News & Updates
  </h2>

  <div className="news-line"></div>

  <p>
    The "News & Updates" section features the latest
    developments and innovations in our services and
    solutions, including engineering services,
    product compliance, environmental regulations,
    Obsolescence Management, and regulatory &
    product safety.
  </p>

  <button className="news-view-btn">
    View all News & Updates
  </button>

</div>
  <div className="news-container">

    {/* CARD 1 */}

    <div className="news-card">

      <img
        src={service1}
        alt="News"
        className="news-image"
      />

      <div className="news-content">

        <div className="news-top">

          <span className="news-tag">
            Purplenow Obsolescence Manager
          </span>

          <span className="news-date">
            18 May 2026
          </span>

        </div>

        <h3>
          IOT TechExpo North America 2026
        </h3>

        <p>
          Join Fortune 500 leaders, IoT innovators,
          and global technology partners as they...
        </p>

        <button className="news-btn">
          Read More →
        </button>

      </div>

    </div>

    {/* CARD 2 */}

    <div className="news-card">

      <img
        src={service2}
        alt="News"
        className="news-image"
      />

      <div className="news-content">

        <div className="news-top">

          <span className="news-tag">
            Purplenow Compliance Manager
          </span>

          <span className="news-date">
            12 May 2026
          </span>

        </div>

        <h3>
          IEEE ISPCE 2026: The International
          Symposium on Product Compliance...
        </h3>

        <p>
          Experience three days of educational
          workshops and technical presentations...
        </p>

        <button className="news-btn">
          Read More →
        </button>

      </div>

    </div>

    {/* CARD 3 */}

    <div className="news-card">

      <img
        src={service3}
        alt="News"
        className="news-image"
      />

      <div className="news-content">

        <div className="news-top">

          <span className="news-tag">
            Purplenow Obsolescence Manager
          </span>

          <span className="news-date">
            05 May 2026
          </span>

        </div>

        <h3>
          Sensors Converge 2026
        </h3>

        <p>
          Sensors Converge is where design engineers
          come to power the intelligence behind...
        </p>

        <button className="news-btn">
          Read More →
        </button>

      </div>

    </div>

  </div>

</section>


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

export default Environmentalregulations;