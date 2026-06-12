import React from "react";
import "./WhoWeAre.css";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import overviewImg from "../assets/overview-team.png";
import whyWorkImg from "../assets/why-work-img.png";
import expertiseImg from "../assets/expertise-img.png";
import newsletterImg from "../assets/newsletter.jpg";
import peopleImg from "../assets/people-img.png";
import { Link } from "react-router-dom";
import heroBg from "../assets/who-we-are-banner.png";



const WhoWeAre = () => {
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
        We Empower People to Transform the Digital World
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


<section className="overview-section">
  <div className="overview-container">

    <div className="overview-left">
      <h2 className="overview-title">
        Overview
        <span></span>
      </h2>

      <div className="overview-content">
        <div className="quote-icon">❝</div>

        <div className="overview-text">
          <p>
            Purplenow Inc., a Delaware-based technology company founded in 2021, empowers organizations to accelerate digital transformation through Artificial Intelligence, Generative AI, Intelligent Automation, IoT, Embedded Engineering, Cloud Solutions, and Digital Platforms.
          </p>
        </div>
      </div>
    </div>

    <div className="overview-right">
      <img src={overviewImg} alt="Overview" />
    </div>

  </div>
</section>


<section className="why-work-section">
  <div className="why-work-container">

    <div className="why-work-heading-wrapper">
      <h2 className="why-work-title">
        Why Work with Us
        <span></span>
      </h2>
    </div>

    <div className="why-work-content">

      {/* Left Image */}
      <div className="why-work-image">
        <img src={whyWorkImg} alt="Why Work With Us" />
      </div>

      {/* Right Content */}
      <div className="why-work-text">

        <p>
          Purplenow Inc. is a rapidly growing global technology and digital engineering company headquartered in Delaware, USA, with a strong delivery presence supporting clients across North America, Europe, and Asia. We help organizations accelerate innovation, embrace digital transformation, and build future-ready solutions that drive business growth.


        </p>

        <p>
          We unlock our customers' innovative potential, empowering
          them to transform their boldest ideas into reality.
        </p>

        <h4>
          We understand your business goals and growth strategy
        </h4>

        <ul>
          <li>
            We work closely with clients to understand their industry, challenges, priorities, and long-term vision, ensuring solutions that align with business objectives.
          </li>

          <li>
            From product strategy and design to development, deployment, and ongoing support, we provide comprehensive services across the entire digital product lifecycle.
          </li>

          <li>
            Our expertise spans Artificial Intelligence, Generative AI, Cloud Computing, Connected Devices (IoT), Embedded Systems, Data Analytics, Digital Engineering, and Intelligent Automation.
          </li>

          <li>
            We combine technical excellence, industry knowledge, agile execution, and operational efficiency to create secure, scalable, and high-performance solutions that deliver real value.
          </li>
        </ul>

      </div>

    </div>
  </div>
</section>


<section className="expertise-section">
  <div className="expertise-container">

    {/* Left Content */}
    <div className="expertise-content">

      <h2 className="expertise-title">
        Expertise
        <span></span>
      </h2>

      <p>
        At Purplenow, we empower organizations to accelerate growth through innovative technology solutions and digital transformation. By combining deep industry expertise with emerging technologies, we help businesses build scalable, intelligent, and future-ready solutions that drive efficiency, innovation, and exceptional customer experiences.
      </p>

      <h3>Our Services</h3>

      <ul>
        <li>Artificial Intelligence & Generative AI</li>
        <li>Product Engineering & Application Development</li>
        <li>Cloud & Digital Transformation</li>
        <li>Connected Devices (IoT) & Embedded Solutions</li>
        <li>Data Analytics & Business Intelligence</li>
      </ul>

    </div>

    {/* Right Image */}
    <div className="expertise-image">
      <img src={expertiseImg} alt="Expertise" />
    </div>

  </div>
</section>
<section
  className="mission-vision-section"
  style={{
    backgroundImage: `url(${newsletterImg})`,
  }}
>
  <div className="mission-overlay">

    <div className="mission-box">
      <h2 className="mission-heading">
        Our Mission
        <span></span>
      </h2>

      <div className="quote-mark">❝</div>

      <p>
        To empower businesses through innovative technology solutions that drive digital transformation, operational excellence, and sustainable growth. We are committed to delivering exceptional value through Artificial Intelligence, Cloud Technologies, Digital Engineering, and emerging innovations while fostering a culture of continuous learning, collaboration, and excellence for our people.
      </p>
    </div>

    <div className="mission-box">
      <h2 className="mission-heading">
        Our Vision
        <span></span>
      </h2>

      <div className="quote-mark">❝</div>

      <p>
        To be a trusted global technology partner, enabling organizations to achieve their strategic goals through intelligent, scalable, and future-ready solutions. We strive to build lasting relationships with our clients by delivering innovation, reliability, and measurable business outcomes in an ever-evolving digital world.

❞
      </p>
    </div>

  </div>
</section>


<section className="people-section">
  <div className="people-container">

    {/* Left Content */}
    <div className="people-content">

      <h2 className="people-title">
        Our People
        <span></span>
      </h2>

      <p className="people-description">
       At Purplenow, our people are the foundation of our success and the driving force behind our innovation. We cultivate a collaborative, inclusive, and growth-oriented culture that empowers individuals to achieve their full potential while delivering exceptional value to our clients.
      </p>

      <h3>Our People are differentiated by:</h3>

      <ul>
        <li>We invest in developing our talent through ongoing learning, skill enhancement, and exposure to emerging technologies.</li>

        <li>
         We recognize and value the unique strengths, perspectives, and contributions of every team member.
        </li>

        <li>
          Our professionals bring extensive experience across AI, Cloud, Digital Engineering, IoT, Data Analytics, and Enterprise Solutions.
        </li>

        <li>
         We leverage cross-functional expertise and flexible resource deployment to deliver high-quality solutions efficiently.
        </li>

        <li>We leverage cross-functional expertise and flexible resource deployment to deliver high-quality solutions efficiently.</li>
      </ul>

    </div>

    {/* Right Image */}
    <div className="people-image">
      <img src={peopleImg} alt="Our People" />
    </div>

  </div>
</section>


      <Newsletter />
      <Footer />
    </>
  );
};

export default WhoWeAre;