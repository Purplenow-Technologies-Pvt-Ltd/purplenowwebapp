import "./ObsolescenceManagement.css";

import "./ObsolesenceManager.css";
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
import bannerImage from "../assets/pcb_banner.png";
import solutionsImg from "../assets/solutions_img.png";
import demoImg from "../assets/demo-img.png";
import aiHero from "../assets/AI-hero.jpeg";



/* ICONS */
import {
  HiOutlineShieldCheck,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import {
  LuBadgeCheck,
} from "react-icons/lu";

function ObsolescenceManagement() {
  const [activeTab, setActiveTab] = useState("who-it-for");
  


  return (
    <>
      <Navbar />


  <div className="obsolescence-page">

  {/* HERO SECTION */}

 <section
   className="obsolescence-hero"
   style={{
     backgroundImage: `url(${aiHero})`
   }}
 >
   <div className="obsolescence-content">
 
     {/* MAIN HEADING */}
 
     
 
   </div>
 </section>


{/* INFO SECTION */}

<section className="obsolescence-info-section">

  {/* BREADCRUMB */}

  <div className="obsolescence-info-breadcrumb">

    <Link to="/">Home</Link>

    <span className="obsolescence-slash">›</span>

    <span>Solutions</span>

    <span className="obsolescence-slash">›</span>

    <span className="obsolescence-active-page">
      Platform development
    </span>

  </div>

  {/* TOP CONTENT */}

  <div className="obsolescence-info-top">

    {/* LEFT */}

    <div className="obsolescence-info-left">

      <h2>
        Get a Free Consultation
      </h2>

      <p>
        Discover how Purplenow can help accelerate your digital transformation journey. Whether you're exploring Artificial Intelligence, Cloud Solutions, Product Engineering, IoT, Data Analytics, or Enterprise Applications, our experts are ready to assess your requirements and recommend the right solutions for your business.

Schedule a complimentary consultation to discuss your challenges, goals, and opportunities for innovation. Let us help you build scalable, future-ready solutions that drive measurable business outcomes.
      </p>

    </div>

    {/* RIGHT FORM */}

    {/* RIGHT FORM */}

<form className="obsolescence-info-form">

  <div className="obsolescence-form-row">

    <input
      type="text"
      placeholder="Full Name *"
      required
    />

    <input
      type="email"
      placeholder="Business Email *"
      required
    />

  </div>

  <textarea
    placeholder="Your Message/Requirement"
    required
  ></textarea>

  <button type="submit">
    Book a Demo
  </button>

</form>
</div>

</section>
       {/* ================= TABS SECTION ================= */}

<section className="service-tabs-section">

  {/* TABS */}

  <div className="service-tabs">

    <a
  href="#services"
  className={activeTab === "services" ? "active" : ""}
  onClick={() => setActiveTab("services")}
>
  Services
</a>

<a
  href="#get-a-quote"
  className={activeTab === "quote" ? "active" : ""}
  onClick={() => setActiveTab("quote")}
>
  Get a Quote
</a>

<a
  href="#solutions"
  className={activeTab === "solutions" ? "active" : ""}
  onClick={() => setActiveTab("solutions")}
>
  Our Solutions
</a>
<a
  href="#demo"
  className={activeTab === "demo" ? "active" : ""}
  onClick={() => setActiveTab("demo")}
>
  Book a Demo
</a>



  </div>

  {/* CONTENT */}

  <div className="service-tabs-content">

    {/* HEADING */}

    <div className="service-heading">

      <h2>
        Services: More Than Just Software
      </h2>

      <div className="service-line"></div>

    </div>

    {/* PARAGRAPH */}

    <p className="service-desc">
      We help businesses accelerate innovation and digital transformation through cutting-edge technology solutions and expert engineering services.
    </p>

    {/* CARDS */}

    <div className="service-cards">

      {/* CARD 1 */}

      <div className="service-card">

        <div className="service-icon">
          📜
        </div>

        <h3>
          Our Service Offerings
        </h3>

        <ul>

          <li>Artificial Intelligence & Generative AI</li>

          <li>Product Engineering & Application Development</li>

          <li>Cloud & Digital Transformation</li>

          <li>Managed Services Provider (MSP)</li>

          <li>Cloud Solutions Provider (CSP) & Cloud Reseller Services</li>

          <li>IoT & Embedded Solutions</li>

          <li>Data Analytics & Business Intelligence</li>

        </ul>

      </div>

      {/* CARD 2 */}

      <div className="service-card">

        <div className="service-icon">
          ✔️
        </div>

        <h3>
          How We Deliver Services
        </h3>

        <ul>

          <li>
            Customer-centric collaboration
          </li>

          <li>
          Agile and scalable delivery
          </li>

          <li>
            Deep technical and domain expertise
          </li>

          <li>
            Tailored solutions aligned with business goals
          </li>

        </ul>

      </div>

      {/* CARD 3 */}

      <div className="service-card">

        <div className="service-icon">
          🏅
        </div>

        <h3>
          Benefits of Our Services
        </h3>

        <ul>

          <li>
            Faster innovation and time-to-market
          </li>

          <li>
            Improved operational efficiency
          </li>

          <li>
           Proactive cloud and infrastructure management
          </li>

          <li>
            Data-driven decision-making
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>

<section className="quote-section" id="get-a-quote">

  <div className="quote-heading">
    <h2>Get a Custom Quote</h2>
    <div className="quote-line"></div>
  </div>

  <div className="quote-content">

    <h3 className="quote-title">
      Let's Discuss Your Project
    </h3>

    <form className="quote-form" id="quoteForm">

  <div className="form-group">
    <label>
      Full Name <span>*</span>
    </label>

    <input
      type="text"
      placeholder="Full Name"
      required
    />
  </div>

  <div className="form-group">
    <label>
      Business Email <span>*</span>
    </label>

    <input
      type="email"
      placeholder="Business Email"
      required
    />
  </div>

  <div className="form-group">
    <label>
      Company Name <span>*</span>
    </label>

    <input
      type="text"
      placeholder="Company Name"
      required
    />
  </div>

  <div className="form-group">
    <label>Company Size</label>

    <select required>
      <option value="">Select Company Size</option>
      <option>1 - 10 Employees</option>
      <option>11 - 50 Employees</option>
      <option>51 - 200 Employees</option>
      <option>200+ Employees</option>
    </select>
  </div>

  <div className="form-group">
    <label>
      Phone Number <span>*</span>
    </label>

    <input
      type="text"
      placeholder="Phone Number"
      required
    />
  </div>

  <div className="form-group">
    <label>Product Name</label>

    <input
      type="text"
      placeholder="e.g. Quantum X-2000"
    />
  </div>

  <div className="form-group">
    <label>Industry</label>

    <select required>
      <option value="">Select Industry</option>
      <option>Aerospace & Defense</option>
      <option>Automotive</option>
      <option>Medical Devices</option>
      <option>Electronics</option>
      <option>Industrial Equipment</option>
    </select>
  </div>

  <div className="form-group">
    <label>Product Type</label>

    <select required>
      <option value="">Select Product Type</option>
      <option>Software Product</option>
      <option>Hardware Product</option>
      <option>Embedded System</option>
      <option>IoT Device</option>
    </select>
  </div>

  <div className="form-group">
    <label>Geographic Market</label>

    <input
      type="text"
      placeholder="e.g. North America, Europe"
    />
  </div>

  <div className="form-group">
    <label>Existing Compliance Standards</label>

    <input
      type="text"
      placeholder="e.g. RoHS"
    />
  </div>

  <div className="form-group">
    <label>Enter Environmental Regulations</label>

    <input
      type="text"
      placeholder="e.g. REACH Regulation"
    />
  </div>

  <div className="form-group">
    <label>Hazardous Materials</label>

    <select required>
      <option value="">Select Hazardous Material</option>
      <option>Lead (Pb)</option>
      <option>Mercury (Hg)</option>
      <option>Cadmium (Cd)</option>
      <option>PFAS</option>
    </select>
  </div>

  <div className="form-group">
    <label>Number of Parts/Components</label>

    <input
      type="text"
      placeholder="e.g.150"
    />
  </div>

  <div className="form-group">
    <label>Projected Timeline</label>

    <select required>
      <option value="">Select Timeline</option>
      <option>1 Month</option>
      <option>3 Months</option>
      <option>6 Months</option>
      <option>1 Year</option>
    </select>
  </div>

  <div className="form-group">
    <label>Integration Requirements</label>

    <input
      type="text"
      placeholder="e.g. ERP integration required"
    />
  </div>

  <div className="form-group">
    <label>Environmental Compliance Practices</label>

    <select required>
      <option value="">Select Practice</option>
      <option>Internal Team</option>
      <option>ERP Integrated Compliance</option>
      <option>Third-Party Auditing</option>
    </select>
  </div>

  <div className="form-group">
    <label>Budget Range</label>

    <select required>
      <option value="">Select Budget</option>
      <option>$5,000 - $10,000</option>
      <option>$10,000 - $25,000</option>
      <option>$25,000 - $50,000</option>
      <option>$50,000+</option>
    </select>
  </div>

  <div className="form-group">
    <label>Number of Users (if applicable)</label>

    <input
      type="text"
      placeholder="e.g. 10"
    />
  </div>

  

</form>

    <button
  type="submit"
  form="quoteForm"
  className="quote-btn"
>
  Get a Quote
</button>
  </div>

</section>

{/*solutions*/}

{/* ================= SOLUTIONS SECTION ================= */}

<section
  id="solutions"
  className="solutions-section"
>

  <div className="solutions-container">

    {/* HEADING */}

    <div className="solutions-heading">

      <h2>
        Comprehensive Obsolescence Management Solutions
      </h2>

      <div className="solutions-line"></div>

    </div>


    {/* IMAGE */}

    <div className="solutions-image-wrapper">

      <img
        src={solutionsImg}
        alt="Solutions"
        className="solutions-image"
      />

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
          Transform your business with AI, Cloud, MSP, CSP,
  and Digital Engineering solutions designed for the
  future of enterprise innovation.
        </p>

        <button className="demo-btn">
          Book a Demo
        </button>

      </div>

    </div>

  </div>

</section>

{/* ================= SIGNUP SECTION ================= */}

<section className="signup-section">

  <div className="signup-container">

    {/* LEFT IMAGE */}

    <div className="signup-image">

      <img
  src={newsletterBg}
  alt="Newsletter"
/>

    </div>

    {/* RIGHT CONTENT */}

    <div className="signup-content">

      <h2>Sign Up</h2>

      <p>
        Sign up for the latest Blogs,
        Newsletters, Case studies,
        Whitepapers, Webinars and Videos.
      </p>

      {/* FORM */}

      <form className="signup-form">

        <input
          type="email"
          placeholder="Business Email"
        />

        <select>

          <option>
            Resources
          </option>

        </select>

        <select>

          <option>
            Topics
          </option>

        </select>

        <button type="submit">
          Sign Up
        </button>

      </form>

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

<section
  id="resources"
  className="resources-section"
>

  <div className="resources-container">

    {/* HEADING */}

    <div className="resources-heading">

      <h2>
        Resources you might be interested in
      </h2>

      <div className="resources-line"></div>

    </div>

    {/* RESOURCES GRID */}

    <div className="resources-grid">

      {/* CARD 1 */}

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

      {/* CARD 2 */}

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

      {/* CARD 3 */}

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

export default ObsolescenceManagement;