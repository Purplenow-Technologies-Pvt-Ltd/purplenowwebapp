import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import heroBg from "../assets/who-we-are-banner.png";
import profilePlaceholder from "../assets/profile-placeholder.png";
import "./Leadership.css";
import { Link } from "react-router-dom";

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

<section className="leadership-section">
  <div className="leadership-container">

    {/* LEFT CONTENT */}

    <div className="leadership-content">

      <h2 className="leadership-title">
        CEO
      </h2>

      <div className="leadership-line"></div>

      <p>
        Meet Manoharan Nallasamy, our CEO. With a Mechanical Engineering
        degree from Bharathiyar University, India, and a Master of
        Engineering Management degree from Duke University, USA,
        Manoharan brings over 20 years of hands-on experience in
        engineering, technology, and management consulting.
        His expertise spans product design, development and management,
        business process improvement, and supply chain optimization.
        He has worked in diverse industries including Consumer Products,
        Heavy Equipment & Machinery, Life Science & Laboratory Products,
        Analytical Instruments, and Automation & Control.
        Manoharan is experienced in building engineering services teams
        with global standards. His leadership has driven the successful
        establishment of high-quality engineering practices aligned with
        industry best practices.
      </p>

      

    </div>

    {/* RIGHT PROFILE */}

    <div className="leadership-profile">

      <img
        src={profilePlaceholder}
        alt="CEO"
        className="leader-image"
      />

      <h3 className="leader-name">
        Manoharan Nallasamy
      </h3>

      <p className="leader-designation">
        CEO
      </p>

    </div>

  </div>
</section>

{/* DIRECTORS SECTION */}

<section className="directors-section">

  <div className="directors-container">

    <div className="directors-heading-block">
      <h2>Directors</h2>

      <div className="directors-line"></div>
    </div>

    <div className="directors-grid">

      {/* CARD 1 */}

      <div className="director-card">
        <img
          src={profilePlaceholder}
          alt="Director"
          className="director-image"
        />

        <h3>Arun Kumar Pappusamy</h3>
        <p>Director</p>

        <div className="director-icons">
          <span>🔗</span>
          <span>✉️</span>
        </div>
      </div>

      {/* CARD 2 */}

      <div className="director-card">
        <img
          src={profilePlaceholder}
          alt="Director"
          className="director-image"
        />

        <h3>Santhanand</h3>
        <p>Director</p>

        <div className="director-icons">
          <span>🔗</span>
          <span>✉️</span>
        </div>
      </div>

      {/* CARD 3 */}

      <div className="director-card">
        <img
          src={profilePlaceholder}
          alt="Director"
          className="director-image"
        />

        <h3>Ilango Thangavelu</h3>
        <p>Director</p>

        <div className="director-icons">
          <span>🔗</span>
          <span>✉️</span>
        </div>
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