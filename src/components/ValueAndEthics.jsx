import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import "./ValueAndEthics.css";
import { Link } from "react-router-dom";
import heroBg from "../assets/who-we-are-banner.png";
import valueEthicsImage from "../assets/value-ethics-inforgraphic.png";


function ValueAndEthics() {
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
        Value and Guide Operations
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
  Values & Ethics
</span>

  </div>
</div>
<section className="values-ethics-section">
  <div className="values-ethics-container">

    <div className="quote-mark">❝</div>

    <p className="values-top-text">
      We Embrace the Responsibilities that come with our scale and strive
      to make everything we do today as positive and impactful as we can
      for tomorrow.
    </p>

    <div className="values-title-row">
      
       <h1 className="values-title">
  OUR <span className="values-word">VALUES</span>
</h1>
      

      <h1 className="organization-title">
        – Organization
      </h1>
    </div>

    <div className="values-heading-block">
      <h2>Values and Ethics</h2>

      <div className="values-line">
        <span className="orange"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>
    </div>

    <p className="values-description">
      Our high ethical standards go hand in hand with our purpose and values
      to empower people to change the world.
    </p>

    <div className="values-image-wrapper">
      <img src={valueEthicsImage} alt="Values and Ethics" />
    </div>

  </div>
</section>

      <Newsletter />
      <Footer />
    </>
  );
}

export default ValueAndEthics;