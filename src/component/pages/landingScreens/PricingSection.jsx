import { ReactComponent as Dot } from "../../../assets/svgs/dot.svg";
import { ReactComponent as TickLogo } from "../../../assets/svgs/tick.svg";
import { ReactComponent as CrossLogo } from "../../../assets/svgs/cross.svg";

function PricingSection() {
  return (
    <div className="home3-pricing-plan-section mb-110">
      <div className="container">
        <div className="row justify-content-center mb-50">
          <div className="col-lg-8">
            <div
              className="section-title text-center wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <span>
                <Dot />
                Task Manager Feature
                <Dot />
              </span>
              <h2>Enhance Your Enterprise</h2>
              <p>
                Welcome to HRWHIZZ, where digital innovation meets strategic
                excellence. As a dynamic force in the realm of digital
                marketing, we are dedicated to propelling businesses into the
                spotlight of online success.
              </p>
            </div>
          </div>
        </div>
        <div className="pricing-plan-tab-area">
          <div className="nav-area mb-40">
            <span>Billed Monthly</span>
            <nav>
              <div className="nav nav-tabs" id="nav-tab2" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                ></button>
                <button
                  className="nav-link yearly"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                ></button>
              </div>
            </nav>
            <span>Billed Yearly</span>
          </div>
          <div className="tab-content" id="nav-tab2Content">
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
                          <TickLogo />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickLogo />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickLogo />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickLogo />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossLogo />
                          Third-Party API Setup (All Google Map API).
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Purchase Plan"
                        >
                          <span>Purchase Plan</span>
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
                  <div className="pricing-card three">
                    <div className="pricing-top">
                      <span>Standard Plan</span>
                      <h2>
                        $120<sub>/Monthly Investment</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <TickLogo />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickLogo />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickLogo />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickLogo />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossLogo />
                          Third-Party API Setup (All Google Map API).
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Purchase Plan"
                        >
                          <span>Purchase Plan</span>
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
                          <TickLogo />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickLogo />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickLogo />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickLogo />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossLogo />
                          Third-Party API Setup (All Google Map API).
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Purchase Plan"
                        >
                          <span>Purchase Plan</span>
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
                        $150<sub>/Yearly Investment</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <TickLogo />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickLogo />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickLogo />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickLogo />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossLogo />
                          Third-Party API Setup (All Google Map API).
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Purchase Plan"
                        >
                          <span>Purchase Plan</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="pricing-card three">
                    <div className="pricing-top">
                      <span>Standard Plan</span>
                      <h2>
                        $200<sub>/Yearly Investment</sub>
                      </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>
                          <TickLogo />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickLogo />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickLogo />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickLogo />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossLogo />
                          Third-Party API Setup (All Google Map API).
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Purchase Plan"
                        >
                          <span>Purchase Plan</span>
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
                          <TickLogo />
                          Website Audit Identif opportunities optimization.
                        </li>
                        <li>
                          <TickLogo />
                          Social Media Management Establish a presence on key
                          platforms.
                        </li>
                        <li>
                          <TickLogo />
                          Basic SEO Optimization Improve search engine
                        </li>
                        <li>
                          <TickLogo />
                          Monthly Analytics Report Track and measure your online
                          performance.
                        </li>
                        <li className="red">
                          <CrossLogo />
                          Third-Party API Setup (All Google Map API).
                        </li>
                      </ul>
                      <div className="pay-btn-area">
                        <a
                          href="#"
                          className="pay-btn"
                          data-text="Purchase Plan"
                        >
                          <span>Purchase Plan</span>
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

export default PricingSection;
