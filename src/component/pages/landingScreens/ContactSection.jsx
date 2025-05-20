import { ReactComponent as StaricStar } from "../../../assets/svgs/staricStar.svg";
import { ReactComponent as PhoneIcon } from "../../../assets/svgs/phone.svg";
import { ReactComponent as MailIcon } from "../../../assets/svgs/mail.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/svgs/twitter.svg";

function ContactSection() {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-5">
            <div className="contact-content">
              <div
                className="section-title white wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="500ms"
              >
                <span>
                  <StaricStar />
                  Drop Us a Line
                  <StaricStar />
                </span>
                <h2>Connect with Zenfy</h2>
                <p>
                  Ready to take the first step towards unlocking opportunities,
                  realizing goals, and embracing innovation? We&apos;re here and
                  eager to connect.
                </p>
              </div>
              <div
                className="contact-area wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1000ms"
              >
                <div className="hotline-area mb-40">
                  <div className="icon">
                    <PhoneIcon />
                  </div>
                  <div className="content">
                    <span>To More Inquiry</span>
                    <h6>
                      <a href="tel:+990737621432">+990-737 621 432</a>
                    </h6>
                  </div>
                </div>
                <div className="hotline-area">
                  <div className="icon">
                    <MailIcon />
                  </div>
                  <div className="content">
                    <span>To Send Mail</span>
                    <h6>
                      <a href="https://demo-egenslab.b-cdn.net/cdn-cgi/l/email-protection#731a1d151c33160b121e031f165d101c1e">
                        <span
                          className="__cf_email__"
                          data-cfemail="aec7c0c8c1eec9c3cfc7c280cdc1c3"
                        >
                          Info@gmail.com
                        </span>
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="social-area wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <h6>Social Just You Connected Us!</h6>
                <ul className="social-list">
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="bi bi-linkedin"></i>
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bi bi-facebook"></i>
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <TwitterIcon />
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bi bi-instagram"></i>
                      <span>Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="contact-form-wrap">
              <div className="contact-form-area">
                <h3>Your Success Starts Here!</h3>
                <form>
                  <div className="row">
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <label>Full Name</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <label>Company / Organization *</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <label>Phone *</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <label>Company email *</label>
                        <input type="email" />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-20">
                      <div className="form-inner">
                        <label>Your Subject *</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-30">
                      <div className="form-inner">
                        <label>Message *</label>
                        <textarea></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <button
                          className="primary-btn2"
                          type="submit"
                          data-text="Submit Now"
                        >
                          <span>Submit Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
