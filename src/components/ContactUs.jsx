import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <section className="contact-section">
  <div className="contact-container">

    {/* Left Side */}

    <div className="contact-info">

      <h2 className="contact-title">
        Get In Touch
        <span></span>
      </h2>

      <p className="contact-description">
        Whether you are a prospective student, researcher, customer,
        or business partner, we welcome your connection and would love
        to hear from you.
      </p>

      <div className="contact-item">
        <div className="contact-icon">📍</div>

        <div>
          <h4>Address</h4>
          <p>
            8 The Green, Suite 15186 B Dover, DE 19901,USA
          </p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">📞</div>

        <div>
          <h4>Phone</h4>
          <p>+1(408)-688-2061</p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">✉️</div>

        <div>
          <h4>Email</h4>
          <p> info@purplenow.io</p>
        </div>
      </div>

    </div>

    {/* Right Side */}

    <div className="contact-form-card">

      <h3>Send Us a Message</h3>

      <form>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <select>
          <option>Select Service</option>
          <option>Engineering Services</option>
          <option>Digital Transformation</option>
          <option>Consulting</option>
        </select>

        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Submit
        </button>

      </form>

    </div>

  </div>
</section>
      <Newsletter/>

      <Footer />
    </>
  );
};

export default ContactUs;