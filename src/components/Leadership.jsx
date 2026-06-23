import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import heroBg from "../assets/who-we-are-banner.png";
import profilePlaceholder from "../assets/profile-placeholder.png";
import "./Leadership.css";
import { Link } from "react-router-dom";
import anupamaImg from "../assets/anupama.jpg";
import srideviImg from "../assets/sridevi.jpg";
import raviImg from "../assets/ravi.jpg";

function Leadership() {
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
       Introducing Our Visionary Leaders
      </h1>

      <p>
         Our visionary leaders drive innovation, inspire success, and shape our future towards excellence.
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


{/* DIRECTORS SECTION */}

<section className="leadership-section">

  <div className="leadership-container">

    <h2 className="leadership-main-title">
      Leadership Team
    </h2>

    <div className="leadership-line"></div>

    <div className="leadership-grid">

      {/* CEO */}

      <div className="director-profile-card">

        <div className="director-top">

          <img
  src={raviImg}
  alt="Ravikanth Varigonda"
  className="director-profile-image"
/>
          <div className="director-info">
            <h3>Ravikanth Varigonda</h3>
            <span>CEO</span>
          </div>

        </div>

        <p className="director-description">
          Ravikanth Varigonda is a technology leader and entrepreneur with
          over 20 years of experience in Data Engineering, Cloud Computing,
          IoT, and Embedded Systems. As Founder & CEO of Purplenow,
          he drives innovation, digital transformation, and enterprise
          technology solutions across industries.
        </p>

      </div>

      {/* Director 1 */}

      <div className="director-profile-card">

        <div className="director-top">

          <img
            src={anupamaImg}
            alt="Anupama Sarraf"
            className="director-profile-image"
          />

          <div className="director-info">
            <h3>Anupama Sarraf</h3>
            <span>Director</span>
          </div>

        </div>

        <p className="director-description">
          Anupama Sarraf is an entrepreneur, product strategist, and
          business leader with expertise in SaaS, IT consulting,
          and growth strategy. As Co-Founder of Purplenow,
          she helps drive innovation and long-term business growth.
        </p>

      </div>

      {/* Director 2 */}

      <div className="director-profile-card">

        <div className="director-top">

          <img
            src={srideviImg}
            alt="Sridevi Baghele"
            className="director-profile-image"
          />

          <div className="director-info">
            <h3>Sridevi Baghele</h3>
            <span>Director</span>
          </div>

        </div>

        <p className="director-description">
          Sridevi Baghele is an experienced HR leader and entrepreneur
          specializing in talent management, employee engagement,
          and organizational development. As Co-Founder of Purplenow,
          she leads people-focused growth initiatives.
        </p>

      </div>

    </div>

  </div>

</section>
      <Newsletter />

      <Footer />
    </>
  );
}

export default Leadership;