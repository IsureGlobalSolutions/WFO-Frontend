import React, { useEffect } from "react";
// import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function ServiceCard({ img, bg, title, desc, features, style }) {
  useEffect(() => {
    // Import AOS inside the useEffect to satisfy ESLint
    const AOS = require("aos");
    AOS.init({ duration: 1000, once: false }); // Adjust the duration as needed
  }, []);

return (
    <div
      style={{
        background: `url(${bg}) no-repeat center center/cover`,
      }}
      className="pt-120 pb-60"
    >
      <div className="container">
        <div className="row align-items-center" style={style}>
          <div
            className="col-xl-6 col-lg order-2 order-lg-1 mt-5 mt-lg-0"
            data-aos="fade-right"
          >
            <div>
              <img
                src={img}
                height={img.height}
                width={img.width}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg order-1 order-lg-2">
            <div>
              <h2 className="section-title mb-4">{title}</h2>
              <p className="section-desc">{desc}</p>
              <ul className="aai-list-items mt-4">
                {features?.map((feature) => (
                  <li
                    key={feature}
                    className="aai-list-item d-flex align-items-center"
                  >
                    <svg
                      className="flex-shrink-0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_82_4624)">
                        <circle cx="12" cy="12" r="12" fill="#4562FF" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_82_4624">
                          <rect width="24" height="24" rx="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="aai-list-item-text">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link href="/services" className="aai-gradient-outline-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ServiceCard;
