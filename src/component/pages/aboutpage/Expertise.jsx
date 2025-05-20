import "../../../assets/css/style.css";
import { ReactComponent as Staric } from "../../../assets/svgs/staricStar.svg";
import { ReactComponent as Project } from "../../../assets/svgs/projecticon.svg";
import { ReactComponent as Customericon } from "../../../assets/svgs/customericon.svg";
import { ReactComponent as Minuteicon } from "../../../assets/svgs/minicon.svg";
import Aboutfeature from "../../../assets/img/home1/icon/about-feature-card-icon1.svg";
import Aboutfeature2 from "../../../assets/img/home1/icon/about-feature-card-icon2.svg";
import Aboutfeature3 from "../../../assets/img/home1/icon/about-feature-card-icon3.svg";
import Aboutfeature4 from "../../../assets/img/home1/icon/about-feature-card-icon4.svg";
import CountUp from "react-countup";

const Expertise = () => {
  return (
    <div
      className="home1-about-section scroll-margin pt-120 mb-120"
      id="about-section"
    >
      <div className="container">
        <div className="row mb-90">
          <div
            className="col-lg-9 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="2000ms"
          >
            <div className="about-content">
              <div className="about-section-title">
                <span>
                  <Staric />
                  Expertise You Can Trust
                  <Staric />
                </span>
                <h2>
                  We are a Startup agency working with young talents on
                  delivering unique ideas and creative work.
                </h2>
                <p>
                  Where innovation meets passion in a journey that started with
                  a simple idea and a shared dream. Founded in recent year we
                  embarked on a mission to bring the new innovation and
                  introduce the technology. From humble beginnings to our
                  current aspirations, every step has been fueled by a
                  relentless commitment{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 d-flex justify-content-lg-end wow animate fadeInRight"
            data-wow-delay="200ms"
            data-wow-duration="2000ms"
          >
            <div className="about-countdown-area">
              <ul>
                <li className="single-countdown">
                  <div className="icon">
                    <Project />
                  </div>
                  <div className="content">
                    <div className="number">
                      <h5 className="counter">
                        {" "}
                        <CountUp start={0} end={150} duration={3} />
                      </h5>
                      <span>Project</span>
                    </div>
                    <p>We Have Completed</p>
                  </div>
                </li>
                <li className="single-countdown">
                  <div className="icon">
                    <Customericon />
                  </div>
                  <div className="content">
                    <div className="number">
                      <h5 className="counter">
                        {" "}
                        <CountUp start={0} end={58} duration={3} />
                      </h5>
                      <span>%</span>
                    </div>
                    <p>Customer Satisfaction</p>
                  </div>
                </li>
                <li className="single-countdown">
                  <div className="icon">
                    <Minuteicon />
                  </div>
                  <div className="content">
                    <div className="number">
                      <h5 className="counter">3</h5>
                      <span>Mins</span>
                    </div>
                    <p>Average Answer Time</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about-bottom-area">
        <div className="container-fluid">
          <div className="row g-5">
            <div
              className="col-lg-3 col-md-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="feature-card">
                <div className="icon">
                  <img src={Aboutfeature} alt />
                </div>
                <div className="content">
                  <h4>Expertise and Innovation</h4>
                  <p>
                    We pride ourselves staying at the front of innovation,
                    constantly pushing boundaries a redefining what&apos;s
                    possible.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="feature-card">
                <div className="icon">
                  <img src={Aboutfeature2} alt />
                </div>
                <div className="content">
                  <h4>Transparent Process</h4>
                  <p>
                    Our transparent process is designed to demystify the journey
                    from concept to delivery.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow animate fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="feature-card">
                <div className="icon">
                  <img src={Aboutfeature3} alt />
                </div>
                <div className="content">
                  <h4>Client-Centric Approach</h4>
                  <p>
                    Our dedicated team takes the time to listen, &amp;
                    collaborate, ensuring that every interaction a step towards
                    your success.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow animate fadeInUp"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="feature-card">
                <div className="icon">
                  <img src={Aboutfeature4} alt />
                </div>
                <div className="content">
                  <h4>Cost-Effective</h4>
                  <p>
                    Our commitment to providing cost-effective solutions is
                    ingrained in our mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
