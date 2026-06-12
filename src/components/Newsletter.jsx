import "./Newsletter.css";

import newsletterBg from "../assets/newsletter.jpg";
const Newsletter = () => {
  return (
    <>
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
    </>
  );
};

export default Newsletter;