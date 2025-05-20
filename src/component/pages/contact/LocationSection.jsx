import { ReactComponent as RedStar } from "../../../assets/svgs/redstar.svg";
import { ReactComponent as WorkingHourIcon } from "../../../assets/svgs/timer.svg";

function LocationSection() {
  return (
    <div className="contact-page scroll-margin pt-120 mb-120" id="contact">
      <div className="container">
        <div className="row mb-60">
          <div
            className="col-lg-6 wow animate fadeInDown"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="section-title5 two">
              <span className="sub-title5 two">
                <RedStar />
                Office Addresses
                <RedStar />
              </span>
              <h2>
                Our Office <span>Locations.</span>
              </h2>
              <p>
                Feel free adapt this based on the specific managed services,
                features, and unique selling points your IT service company
                provides.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-lg-4 gy-5">
          <div
            className="col-lg-4 wow animate fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="contact-area">
              <div className="address">
                <h4 className="title">United Kingdom</h4>
                <span>London</span>
                <p>28200 Old 41 Rd #208 Bonita Springs, FL 34135</p>
              </div>
              <div className="working-hour">
                <div className="icon">
                  <WorkingHourIcon />
                </div>
                <div className="content">
                  <span>Working Hours</span>
                  <h6>Mon to Sat : 8am- 9pm</h6>
                  <h6>
                    Sunday : <span>Closed</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 wow animate zoomIn"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="company-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5647631857846!2d90.36311167605992!3d23.83407118555764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1700138349574!5m2!1sen!2sbd"
                allowfullscreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationSection;
