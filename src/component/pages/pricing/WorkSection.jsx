import { ReactComponent as RedStar } from "../../../assets/svgs/redstar.svg";
import { ReactComponent as GoodSign } from "../../../assets/svgs/goodsign.svg";
import { ReactComponent as DiscoveryImg } from "../../../assets/img/home4/icon/feature-card-icon1.svg";
import { ReactComponent as ResearchImg } from "../../../assets/img/home4/icon/feature-card-icon2.svg";
import { ReactComponent as FeedbackImg } from "../../../assets/img/home4/icon/feature-card-icon3.svg";
import { ReactComponent as EvaluationImg } from "../../../assets/img/home4/icon/feature-card-icon4.svg";

function WorkSection() {
  return (
    <div className="pricing-plan-process-section mb-120">
      <div className="container">
        <div className="row mb-50">
          <div
            className="col-lg-12 wow animate fadeInDown"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="section-title5 two">
              <span className="sub-title5 two">
                <RedStar />
                Work Process
                <RedStar />
              </span>
              <h2>
                Why Client <span>Love Create.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 mb-90">
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="feature-card4 arrow1">
              <div className="card-top-area">
                <div className="icon">
                  <DiscoveryImg />
                </div>
                <div className="number">
                  <span>01 </span>
                </div>
              </div>
              <div className="content">
                <h4>Client Work Briefing & Discovery.</h4>
                <ul>
                  <li>
                    <GoodSign />
                    Understand Client Goals
                  </li>
                  <li>
                    <GoodSign />
                    Schedule a meeting
                  </li>
                  <li>
                    <GoodSign />
                    information about the client&apos;s project
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="feature-card4 arrow2">
              <div className="card-top-area">
                <div className="icon">
                  <ResearchImg />
                </div>
                <div className="number">
                  <span>02</span>
                </div>
              </div>
              <div className="content">
                <h4>Research and Market Analysis.</h4>
                <ul>
                  <li>
                    <GoodSign />
                    Understand Client Goals
                  </li>
                  <li>
                    <GoodSign />
                    Schedule a meeting
                  </li>
                  <li>
                    <GoodSign />
                    information about the client&apos;s project
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="feature-card4 arrow3">
              <div className="card-top-area">
                <div className="icon">
                  <FeedbackImg />
                </div>
                <div className="number">
                  <span>03</span>
                </div>
              </div>
              <div className="content">
                <h4>Client Presentation and Feedback.</h4>
                <ul>
                  <li>
                    <GoodSign />
                    Understand Client Goals
                  </li>
                  <li>
                    <GoodSign />
                    Schedule a meeting
                  </li>
                  <li>
                    <GoodSign />
                    information about the client&apos;s project
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInUp"
            data-wow-delay="800ms"
            data-wow-duration="1500ms"
          >
            <div className="feature-card4">
              <div className="card-top-area">
                <div className="icon">
                  <EvaluationImg />
                </div>
                <div className="number">
                  <span>04</span>
                </div>
              </div>
              <div className="content">
                <h4>Post-Launch Project Evaluation.</h4>
                <ul>
                  <li>
                    <GoodSign />
                    Understand Client Goals
                  </li>
                  <li>
                    <GoodSign />
                    Schedule a meeting
                  </li>
                  <li>
                    <GoodSign />
                    information about the client&apos;s project
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
