import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contactus.css";

const ContactUs = () => {
  return (
    <section className="contact-us" id="contact-us">
      <div className="contact-us-container">
        <div className="contact-card">
          <h2 className="contact-title">Get in Touch</h2>
          <div className="contact-details">
            <div className="contact-info">
              <FaMapMarkerAlt className="contact-icon" />
              <p>
                <strong>Location:</strong> Pune, Maharashtra, India
              </p>
            </div>
            <div className="contact-info">
              <FaEnvelope className="contact-icon" />
              <p>
                <strong>Email:</strong> amolkchavhan@gmail.com
              </p>
            </div>
            <div className="contact-info">
              <FaPhoneAlt className="contact-icon" />
              <p>
                <strong>Phone:</strong> +91 7741084928
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
