import { ReactComponent as TickIcon } from "../../../assets/svgs/tick.svg";
import { ReactComponent as CrossIcon } from "../../../assets/svgs/cross.svg";

function PricingSect() {
  return (
    <div
      className="home2-pricing-plan-section scroll-margin pt-120 mb-120"
      id="pricing-plan-section"
    >
      <div className="container">
        <div className="pricing-plan-tab-area">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Billed Monthly
              </button>
              <button
                className="nav-link yearly"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Billed Yearly <span>-20 Off</span>
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex="0"
            >
              <div className="row g-xl-3 gy-4 align-items-center justify-content-center">
                <div
                  className="col-xl-4 col-md-6 wow animate fadeInLeft"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <span>Basic Plan</span>
                      <h2>
                        $80<sub>/Monthly Investment</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <TickIcon />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickIcon />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickIcon />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickIcon />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Third-Party API Setup (All Google Map API).
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Bi-Monthly Analytics Review Actionable insights
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Pick This Package"
                        >
                          <span>Pick This Package</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-6 wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="pricing-card two">
                    <div className="pricing-top">
                      <span>Standard Plan</span>
                      <h2>
                        $120<sub>/Monthly Investment</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <TickIcon />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickIcon />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickIcon />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickIcon />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Third-Party API Setup (All Google Map API).
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Bi-Monthly Analytics Review Actionable insights
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Pick This Package"
                        >
                          <span>Pick This Package</span>
                        </a>
                      </div>
                    </div>
                    <div className="batch">
                      <span>
                        {" "}
                        <strong>30%</strong> Off{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-md-6 wow animate fadeInRight"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <span>Premium Plan</span>
                      <h2>
                        $180<sub>/Monthly Investment</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <TickIcon />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickIcon />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickIcon />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickIcon />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Third-Party API Setup (All Google Map API).
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Bi-Monthly Analytics Review Actionable insights
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Pick This Package"
                        >
                          <span>Pick This Package</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex="0"
            >
              <div className="row g-xl-3 gy-4 align-items-center justify-content-center">
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <span>Basic Plan</span>
                      <h2>
                        $120<sub>/Yearly Investment</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <TickIcon />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickIcon />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickIcon />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickIcon />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Third-Party API Setup (All Google Map API).
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Bi-Monthly Analytics Review Actionable insights
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Pick This Package"
                        >
                          <span>Pick This Package</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card two">
                    <div className="pricing-top">
                      <span>Standard Plan</span>
                      <h2>
                        $200<sub>/Yearly Investment</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <TickIcon />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickIcon />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickIcon />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickIcon />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Third-Party API Setup (All Google Map API).
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Bi-Monthly Analytics Review Actionable insights
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Pick This Package"
                        >
                          <span>Pick This Package</span>
                        </a>
                      </div>
                    </div>
                    <div className="batch">
                      <span>
                        {" "}
                        <strong>30%</strong> Off{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <span>Premium Plan</span>
                      <h2>
                        $500<sub>/Yearly Investment</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <TickIcon />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickIcon />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickIcon />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickIcon />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Third-Party API Setup (All Google Map API).
                        </li>
                        <li className="red">
                          <CrossIcon />
                          Bi-Monthly Analytics Review Actionable insights
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Pick This Package"
                        >
                          <span>Pick This Package</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSect;
