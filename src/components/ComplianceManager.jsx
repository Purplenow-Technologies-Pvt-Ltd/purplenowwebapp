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

    function ComplianceManager() {
      const [activeTab, setActiveTab] = useState("who-it-for");
  

  return (
    <>
      <Navbar />

      <div className="compliance-page">

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

    <span>Solutions</span>

    <span className="slash">›</span>

    <span className="active-page">
      cyber solutions
    </span>

  </div>

  {/* TOP CONTENT */}

  <div className="info-top">

    {/* LEFT */}

    <div className="info-left">

      <h2>
        Accelerate Digital Transformation with Innovative Technology Solutions
      </h2>

      <p>
        Request a Demo and discover how Purplenow can accelerate your digital transformation journey. Our experts will evaluate your business requirements and provide personalized recommendations across Artificial Intelligence, Generative AI, Cloud Solutions, Product Engineering, IoT, Data Analytics, Managed Services, and Enterprise Applications.
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
  href="#get-a-quote"
  className={activeTab === "get-a-quote" ? "active" : ""}
  onClick={() => setActiveTab("get-a-quote")}
>
  Get a Quote
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
      Purplenow empowers businesses with innovative technology solutions across Artificial Intelligence, Generative AI, Product Engineering, Cloud Transformation, IoT, Data Analytics, Managed Services, and Enterprise Applications. Our solutions are designed to help organizations accelerate innovation, improve operational efficiency, and achieve sustainable growth in a rapidly evolving digital landscape.
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
        Our proven delivery framework ensures successful digital transformation through strategic consulting, agile implementation, and continuous optimization.
      </p>

      <div className="work-card">

        <h3>
          1. Discovery & Assessment
        </h3>

        <ul>

          <li>
            Understand business objectives and technology challenges.
          </li>

          <li>
            Assess existing systems, processes, and infrastructure.
          </li>

          <li>
            Identify opportunities for innovation and optimization.
          </li>

        </ul>

      </div>

      <div className="work-card">

        <h3>
          2. Solution Design & Development
        </h3>

        <ul>

          <li>
           Design scalable and future-ready technology solutions
          </li>

          <li>
           Develop custom applications, cloud platforms, and AI-driven systems.
          </li>

          <li>
            Integrate seamlessly with existing enterprise ecosystems.
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
          Artificial Intelligence & Generative AI
        </h3>

        <p>
          Leverage advanced AI solutions to automate processes, enhance decision-making, and unlock new business opportunities
        </p>

      </div>

      <div className="feature-card">

        <h3>
          Cloud & Digital Transformation
        </h3>

        <p>
         Modernize infrastructure, migrate workloads, and build scalable cloud-native solutions for improved agility.
        </p>

      </div>

      <div className="feature-card">

        <h3>
          Product Engineering & Application Development
        </h3>

        <p>
          Design, develop, and maintain innovative software products and enterprise applications tailored to business needs.
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
          Customer-Centric Approach
        </h3>

        <p>
          Every solution is tailored to align with your unique business goals, challenges, and growth strategy.
        </p>

      </div>

      <div className="feature-card">

        <h3>
          End-to-End Technology Expertise
        </h3>

        <p>
          From consulting and architecture to development, deployment, and support, we deliver complete technology solutions.
        </p>

      </div>

      <div className="feature-card">

        <h3>
         Agile & Scalable Delivery
        </h3>

        <p>
          Accelerate innovation with flexible delivery models that adapt to changing business requirements.
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

      <h2>Comprehensive Digital Transformation Services</h2>

      <p>
        Discover how Purplenow's innovative technology solutions can help your organization accelerate growth, improve efficiency, and drive business innovation. From strategy and consulting to implementation and ongoing support, our experts are with you every step of the way..
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

{/* ================= RELATED PRODUCTS ================= */}

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

      {/* CARD 1 */}

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

      {/* CARD 2 */}

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

      {/* CARD 3 */}

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
{/* ================= ENVIRONMENTAL REGULATIONS SECTION ================= */}

<section className="env-regulations-section">
  <div className="env-regulations-container">

   <div className="env-left">
  <img
    src={envRegulationImg}
    alt="Environmental Regulations"
  />
</div>

    {/* RIGHT CONTENT SIDE */}
    <div className="env-right">
      <h2>Drive Innovation with Next-Generation Technology Services</h2>

      <p>
        Stay ahead in a rapidly evolving digital landscape with Purplenow's comprehensive technology solutions. From AI and Cloud Transformation to Product Engineering and Data Analytics, we help businesses build scalable, future-ready digital ecosystems.
      </p>

      <button
        className="env-btn"
        onClick={() => navigate("/environmental-regulations")}
      >
        Explore Our Services
      </button>
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

export default ComplianceManager;