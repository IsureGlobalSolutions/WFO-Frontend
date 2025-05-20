import "../../../assets/css/style.css";
import bannerBottom1 from "../../../assets/img/home3/banner-bottom-img1.png";
import bannerBottom2 from "../../../assets/img/home3/banner-bottom-img2.png";
import bannerBottom3 from "../../../assets/img/home3/banner-bottom-img3.png";
import { ReactComponent as DemoIcon } from "../../../assets/svgs/demo.svg";
import { ReactComponent as ApproveIcon } from "../../../assets/svgs/Aprrove.svg";
import { ReactComponent as StaricStarIcon } from "../../../assets/svgs/staricStar.svg";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div className="home3-banner-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content">
              <span>
                <StaricStarIcon />
                Expertise You Can Trust
                <StaricStarIcon />
              </span>
              <h1>
                Elevate Your Business with <span>HRWHIZZ Solutions</span> in the
                Cloud.
              </h1>
              <p>
                Welcome to HRWHIZZ, where digital innovation meets strategic
                excellence as a dynamic force in the realm of digital marketing,
                we are dedicated tourat propelling businesses into the spotlight
                of online success.
              </p>
              <ul>
                <li className="d-flex align-items-center">
                  <ApproveIcon className="mx-2" />
                  7-day Free Trail
                </li>
                <li className="d-flex align-items-center">
                  <ApproveIcon className="mx-2" />
                  Moneyback Guarantee
                </li>
                <li className="d-flex align-items-center">
                  <ApproveIcon className="mx-2" />
                  24/7 Support
                </li>
              </ul>
              <div className="banner-content-bottom">
                <Link
                  to="/signin"
                  className="primary-btn1 hover-white"
                  data-text="Start free trail"
                >
                  <span>Start free trial</span>
                </Link>
                <a
                  data-fancybox="popup-video"
                  href="https://www.youtube.com/watch?v=MLpWrANjFbI&amp;ab_channel=eidelchteinadvogados"
                  className="video-area"
                >
                  <div className="icon">
                    <DemoIcon />

                    <i className="bi bi-play"></i>
                  </div>
                  <h6>Watch a Demo</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={bannerBottom1}
        alt="Logo"
        className="bottom-img1 wow animate fadeInUp"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      />
      <img src={bannerBottom2} alt="Logo" className="bottom-img2" />
      <img
        src={bannerBottom3}
        alt="Logo"
        className="bottom-img3 wow animate fadeInUp"
        data-wow-delay="600ms"
        data-wow-duration="1500ms"
      />
    </div>
  );
};

export default BannerSection;
