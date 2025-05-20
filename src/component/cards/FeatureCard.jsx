import React from "react";
import { Link } from "react-router-dom";
function FeatureCard({ img, title, desc }) {
  return (
    <div
      className="col-lg-4 col-md-6 mb-4"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <div className="aai-feature-box">
        <div className="aai-feature-box-inner d-flex flex-column align-items-center">
          <div>
            <img src={img} height={120} width={120}  className="aai-feature-icon " alt="" />
          </div>
          <h3 className="aai-feature-title">{title}</h3>
          <p className="aai-feature-desc">{desc}</p>
          <Link href="/services-details" className="aai-feature-link">
            <svg
              width="37"
              height="13"
              viewBox="0 0 37 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.375 1L35.055 6.27428L29.375 11.9543"
                stroke="currentColor"
                strokeOpacity="0.80"
                strokeWidth="1.52"
                strokeLinecap="round"
              />
              <path
                d="M34 6.25L1 6.25"
                stroke="currentColor"
                strokeOpacity="0.80"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default FeatureCard;
