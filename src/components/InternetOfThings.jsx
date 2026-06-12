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
import iotHero from "../assets/IOT-hero.jpeg";


/* ICONS */
import {
  HiOutlineShieldCheck,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import {
  LuBadgeCheck,
} from "react-icons/lu";

function InternetOfThings() {
  const [activeTab, setActiveTab] = useState("who-it-for");
  

  return (
    <>
      <Navbar />


  <div className="obsolescence-page">

  {/* HERO SECTION */}

<section
  className="obsolescence-hero"
  style={{
    backgroundImage: `url(${iotHero})`
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
      Internet of Things
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

          <li>IoT Device Development</li>

          <li>Sensor & Edge Computing Solutions</li>

          <li>IoT Platform Integration</li>

          <li>Connected Device Management</li>

          <li>IoT Security & Compliance</li>

          

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
            Requirement Analysis & Use Case Definition
          </li>

          <li>
         IoT Architecture Design
          </li>

          <li>
            Device Development & Integration
          </li>

          <li>
           Testing, Deployment & Monitoring
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
           Real-Time Data Insights
          </li>

          <li>
           Improved Operational Efficiency
          </li>

          <li>
         Enhanced Connectivity & Automation
          </li>

         

        </ul>

      </div>

    </div>

  </div>

</section>



{/*solutions*/}


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
          Unlock the Power of Connected Intelligence with PurpleNow's IoT Solutions
        </h3>

        <p>
          Schedule a personalized consultation with our IoT specialists to discover how PurpleNow can help transform your operations through intelligent connectivity and data-driven innovation. During the consultation, our team will:
        </p>

        <ul>

          <li>
            Showcase our expertise in IoT Device Development, Connected Systems, Edge Computing, Sensor Integration, Industrial IoT, and Smart Automation Solutions
          </li>

          <li>
            Discuss your business objectives, operational challenges, and connectivity requirements
          </li>

          <li>
           Explore customized IoT solutions designed to improve efficiency, visibility, automation, and scalability
          </li>

          <li>
           Answer your questions and provide strategic recommendations for your IoT initiatives
          </li>

        </ul>

        <p className="demo-bottom-text">
          Transform your business with innovative Internet of Things solutions that enable smarter operations, enhanced connectivity, real-time insights, and sustainable digital transformation.
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

{/*
<section className="news-section">

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

export default InternetOfThings;