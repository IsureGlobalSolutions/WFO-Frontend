import { ReactComponent as Dot } from "../../../assets/svgs/dot.svg";
import { ReactComponent as CheckIcon } from "../../../assets/svgs/check.svg";
import projectmanagmentimage1 from "../../../assets/img/home3/project-management-tab-img1.jpg";
import projectmanagmentimage2 from "../../../assets/img/home3/project-management-tab-img2.jpg";

import projectmanagmentimage3 from "../../../assets/img/home3/project-management-tab-img3.jpg";
import projectmanagmentimage4 from "../../../assets/img/home3/project-management-tab-img4.jpg";
import projectmanagmentimage5 from "../../../assets/img/home3/project-management-tab-img5.jpg";

const ProjectManagmentSection = () => {
  return (
    <>
      <div className="home3-project-management-section mb-110">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8">
              <div
                className="section-title text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>
                  <Dot />
                  Project Management
                  <Dot />
                </span>
                <h2>Master Your Project Success</h2>
                <p>
                  Welcome to HRWHIZZ, where digital innovation meets strategic
                  excellence. As a dynamic force in the realm of digital
                  marketing, we are dedicated to propelling businesses into the
                  spotlight of online success.
                </p>
              </div>
            </div>
          </div>
          <div className="project-management-tab-wrapper">
            <div className="project-management-nav mb-50">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="marketing-teams-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#marketing-teams"
                    type="button"
                    role="tab"
                    aria-controls="marketing-teams"
                    aria-selected="true"
                  >
                    Marketing teams
                  </button>
                  <button
                    className="nav-link"
                    id="it-teams-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#it-teams"
                    type="button"
                    role="tab"
                    aria-controls="it-teams"
                    aria-selected="false"
                  >
                    IT teams
                  </button>
                  <button
                    className="nav-link"
                    id="operation-teams-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#operation-teams"
                    type="button"
                    role="tab"
                    aria-controls="operation-teams"
                    aria-selected="false"
                  >
                    Operations teams
                  </button>
                  <button
                    className="nav-link"
                    id="project-management-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#project-management"
                    type="button"
                    role="tab"
                    aria-controls="project-management"
                    aria-selected="false"
                  >
                    Project management
                  </button>
                  <button
                    className="nav-link"
                    id="planning-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#planning"
                    type="button"
                    role="tab"
                    aria-controls="planning"
                    aria-selected="false"
                  >
                    Strategic planning
                  </button>
                </div>
              </nav>
            </div>
            <div className="project-management-tab">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="marketing-teams"
                  role="tabpanel"
                  aria-labelledby="marketing-teams-tab"
                >
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="project-management-tab-content">
                        <div
                          className="tab-content-top wow animate fadeInDown"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms"
                        >
                          <h3>Marketing Teams</h3>
                          <p>
                            Aliquam erat volutpat pelentequ habitant morb
                            tristique senec et netus et malesuada fames ac
                            turpis egestas vestibulum annvotet ipsum primis in
                            faucibus orci luctus et ultrices.
                          </p>
                          <ul>
                            <li>
                              <CheckIcon />
                              Social Media Design
                            </li>
                            <li>
                              <CheckIcon />
                              Custom ad strategy
                            </li>
                            <li>
                              <CheckIcon />
                              Advanced demographic
                            </li>
                            <li>
                              <CheckIcon />
                              Social Media Management
                            </li>
                            <li>
                              <CheckIcon />
                              Unique ads campaigns
                            </li>
                          </ul>
                        </div>
                        <a
                          href="contact.html"
                          className="primary-btn2 wow animate fadeInUp"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms"
                          data-text="Get Started Now"
                        >
                          <span>Get Started Now</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="project-management-tab-img-wrap">
                        <img
                          src={projectmanagmentimage1}
                          alt="Logo"
                          className="wow animate zoomIn"
                          data-wow-delay="400ms"
                          data-wow-duration="1500ms"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="it-teams"
                  role="tabpanel"
                  aria-labelledby="it-teams-tab"
                >
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="project-management-tab-content">
                        <div className="tab-content-top">
                          <h3>IT Teams</h3>
                          <p>
                            Aliquam erat volutpat pelentequ habitant morb
                            tristique senec et netus et malesuada fames ac
                            turpis egestas vestibulum annvotet ipsum primis in
                            faucibus orci luctus et ultrices.
                          </p>
                          <ul>
                            <li>
                              <CheckIcon />
                              Social Media Design
                            </li>
                            <li>
                              <CheckIcon />
                              Custom ad strategy
                            </li>
                            <li>
                              <CheckIcon />
                              Advanced demographic
                            </li>
                            <li>
                              <CheckIcon />
                              Social Media Management
                            </li>
                            <li>
                              <CheckIcon />
                              Unique ads campaigns
                            </li>
                          </ul>
                        </div>
                        <a
                          href="contact.html"
                          className="primary-btn2"
                          data-text="Get Started Now"
                        >
                          <span>Get Started Now</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="project-management-tab-img-wrap">
                        <img src={projectmanagmentimage3} alt="Logo" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="operation-teams"
                  role="tabpanel"
                  aria-labelledby="operation-teams-tab"
                >
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="project-management-tab-content">
                        <div className="tab-content-top">
                          <h3>Operations Teams</h3>
                          <p>
                            Aliquam erat volutpat pelentequ habitant morb
                            tristique senec et netus et malesuada fames ac
                            turpis egestas vestibulum annvotet ipsum primis in
                            faucibus orci luctus et ultrices.
                          </p>
                          <ul>
                            <li>
                              <CheckIcon />
                              Social Media Design
                            </li>
                            <li>
                              <CheckIcon />
                              Custom ad strategy
                            </li>
                            <li>
                              <CheckIcon />
                              Advanced demographic
                            </li>
                            <li>
                              <CheckIcon />
                              Social Media Management
                            </li>
                            <li>
                              <CheckIcon />
                              Unique ads campaigns
                            </li>
                          </ul>
                        </div>
                        <a
                          href="contact.html"
                          className="primary-btn2"
                          data-text="Get Started Now"
                        >
                          <span>Get Started Now</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="project-management-tab-img-wrap">
                        <img src={projectmanagmentimage2} alt="Logo" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="project-management"
                  role="tabpanel"
                  aria-labelledby="project-management-tab"
                >
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="project-management-tab-content">
                        <div className="tab-content-top">
                          <h3>Project Management</h3>
                          <p>
                            Aliquam erat volutpat pelentequ habitant morb
                            tristique senec et netus et malesuada fames ac
                            turpis egestas vestibulum annvotet ipsum primis in
                            faucibus orci luctus et ultrices.
                          </p>
                          <ul>
                            <li>
                              <CheckIcon />
                              Social Media Design
                            </li>
                            <li>
                              <CheckIcon />
                              Custom ad strategy
                            </li>
                            <li>
                              <CheckIcon />
                              Advanced demographic
                            </li>
                            <li>
                              <CheckIcon />
                              Social Media Management
                            </li>
                            <li>
                              <CheckIcon />
                              Unique ads campaigns
                            </li>
                          </ul>
                        </div>
                        <a
                          href="contact.html"
                          className="primary-btn2"
                          data-text="Get Started Now"
                        >
                          <span>Get Started Now</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="project-management-tab-img-wrap">
                        <img src={projectmanagmentimage4} alt="Logo" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="planning"
                  role="tabpanel"
                  aria-labelledby="planning-tab"
                >
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="project-management-tab-content">
                        <div className="tab-content-top">
                          <h3>Strategic Planning</h3>
                          <p>
                            Aliquam erat volutpat pelentequ habitant morb
                            tristique senec et netus et malesuada fames ac
                            turpis egestas vestibulum annvotet ipsum primis in
                            faucibus orci luctus et ultrices.
                          </p>
                          <ul>
                            <li>
                              <CheckIcon />
                              Social Media Design
                            </li>
                            <li>
                              <CheckIcon />
                              Custom ad strategy
                            </li>
                            <li>
                              <CheckIcon />
                              Advanced demographic
                            </li>
                            <li>
                              <CheckIcon />
                              Social Media Management
                            </li>
                            <li>
                              <CheckIcon />
                              Unique ads campaigns
                            </li>
                          </ul>
                        </div>
                        <a
                          href="contact.html"
                          className="primary-btn2"
                          data-text="Get Started Now"
                        >
                          <span>Get Started Now</span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="project-management-tab-img-wrap">
                        <img src={projectmanagmentimage5} alt="Logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectManagmentSection;
