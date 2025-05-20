import { ReactComponent as Dot } from "../../../assets/svgs/dot.svg";
import { ReactComponent as UserIcon } from "../../../assets/svgs/user.svg";
import { ReactComponent as ReviewIcon } from "../../../assets/svgs/reviews.svg";
import { ReactComponent as SettingIcon } from "../../../assets/svgs/setting.svg";
import { ReactComponent as RegistorIcon } from "../../../assets/svgs/register.svg";

const CountdownSection = () => {
  return (
    <>
      <div className="home3-countdown-section mb-110">
        <div className="container">
          <div
            className="section-title white wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <span>
              <Dot />
              Global Product
              <Dot />
            </span>
            <h2>Elevate our Experience</h2>
            <p>
              Welcome to HRWHIZZ, where digital innovation meets strategic
              excellence as a dynamic force in the realm of digital marketing,
              we are dedicated tourat propelling businesses into the spotlight
              of online success.
            </p>
          </div>
          <div className="row g-lg-4 gy-5">
            <div
              className="col-lg-3 col-sm-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="single-countdown">
                <div className="icon">
                  <UserIcon />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">250</h5>
                    <span>M+</span>
                  </div>
                  <p>
                    Users used our saas solution with any question we update
                    evryday.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="single-countdown">
                <div className="icon">
                  <ReviewIcon />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">120</h5>
                    <span>M+</span>
                  </div>
                  <p>
                    Positive reviews we are always provid great solutions and
                    application.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow animate fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="single-countdown">
                <div className="icon">
                  <SettingIcon />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">90</h5>
                    <span>%</span>
                  </div>
                  <p>
                    Powerful customization, Of our saas based software we work
                    this.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow animate fadeInUp"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="single-countdown">
                <div className="icon">
                  <RegistorIcon />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">109</h5>
                    <span>M+</span>
                  </div>
                  <p>
                    Registered attendees our software is a complete solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownSection;
