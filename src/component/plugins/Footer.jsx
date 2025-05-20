import imgFooterBackground from "../../assets/img/home1/footer-logo-bg.png";
import imgfooterBGdark from "../../assets/img/home1/footer-logo-bg-dark.png";
import { ReactComponent as FooterLogo } from "../../assets/img/footer-logo.svg";
import { ReactComponent as FooterLogoDark } from "../../assets/img/footer-logo-dark.svg";
import { ReactComponent as StarStaric } from "../../assets/svgs/staricStar.svg";
import { ReactComponent as ClutchLogo } from "../../assets/img/home1/icon/clutch-logo.svg";
import { ReactComponent as ClutchLogoWhite } from "../../assets/img/home1/icon/clutch-logo-white.svg";
import { ReactComponent as GoogleIcon } from "../../assets/img/home1/icon/google-logo.svg";
import { ReactComponent as CallIcon } from "../../assets/svgs/call.svg";
import { ReactComponent as LocationIcon } from "../../assets/svgs/location.svg";
import { ReactComponent as TelegramIcon } from "../../assets/svgs/telegram.svg";

function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-top">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h4>Our Solutions</h4>
                  </div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      <li>
                        <a href="#">Managed Services</a>
                      </li>
                      <li>
                        <a href="#">IT Consulting & Advisory</a>
                      </li>
                      <li>
                        <a href="#">Cyber Security</a>
                      </li>
                      <li>
                        <a href="#">Web Development</a>
                      </li>
                      <li>
                        <a href="#">Mobile Development</a>
                      </li>
                    </ul>
                    <ul className="widget-list">
                      <li>
                        <a href="#">Cloud Services</a>
                      </li>
                      <li>
                        <a href="#">Network Connectivity</a>
                      </li>
                      <li>
                        <a href="#">ERP Solutions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex justify-content-lg-center justify-content-md-end justify-content-sm-start">
                <div className="footer-logo-area">
                  <div className="logo-bg">
                    <img
                      src={imgFooterBackground}
                      alt="Logo"
                      className="light"
                    />
                    <img src={imgfooterBGdark} alt="Logo" className="dark" />
                  </div>
                  <div className="logo">
                    <FooterLogo className="light" />
                    <FooterLogoDark className="dark" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8 d-flex justify-content-lg-end justify-content-sm-end">
                <div className="footer-widget">
                  <div className="widget-title two">
                    <span>
                      <StarStaric />
                      They told about
                      <StarStaric />
                    </span>
                    <h3>What Sets Us Apart?</h3>
                  </div>
                  <div className="content">
                    <p>
                      Welcome to Zenfy, where innovation meets our passion in a
                      journey that started with a simple idea and a shared
                      dream.
                    </p>
                  </div>
                  <ul className="rating-area">
                    <li>
                      <a href="https://clutch.co/" className="single-rating">
                        <div className="review">
                          <span>Review On</span>
                          <ClutchLogo className="logo-dark" />
                          <ClutchLogoWhite className="logo-light" />
                        </div>
                        <div className="rating">
                          <ul className="star">
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-half"></i>
                            </li>
                          </ul>
                          <span>(50 reviews)</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/"
                        className="single-rating google"
                      >
                        <div className="review">
                          <span>Review On</span>
                          <GoogleIcon />
                        </div>
                        <div className="rating">
                          <ul className="star">
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-half"></i>
                            </li>
                          </ul>
                          <span>(50 reviews)</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-area">
            <div className="hotline-area">
              <div className="icon">
                <CallIcon />
              </div>
              <div className="content">
                <span>Call Any Time</span>
                <h6>
                  <a href="tel:2-965-871-8617">2-965-871-8617</a>
                </h6>
              </div>
            </div>
            <div className="hotline-area">
              <div className="icon">
                <LocationIcon />
              </div>
              <div className="content">
                <span>Address</span>
                <h6>
                  <a href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3631117,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866!16s%2Fg%2F11rs9vlwsk?entry=ttu">
                    Dhaka, Bangladesh
                  </a>
                </h6>
              </div>
            </div>
            <div className="hotline-area">
              <div className="icon">
                <TelegramIcon />
              </div>
              <div className="content">
                <span>Say Hello</span>
                <h6>
                  <a href="https://demo-egenslab.b-cdn.net/cdn-cgi/l/email-protection#1d74737b725d78657c706d7178337e7270">
                    <span
                      className="__cf_email__"
                      data-cfemail="2841464e47684d50494558444d064b4745"
                    >
                      info@example.com
                    </span>
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright-area">
              <p>
                Copyright 2024 <a href="#">Zenfy</a> | Design By
                <a href="https://www.egenslab.com/">Egens Lab</a>
              </p>
            </div>
            <div className="footer-bottom-right">
              <ul>
                <li>
                  <a href="#">Support Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
