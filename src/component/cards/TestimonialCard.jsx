import React from "react";
import ProtoTypes from "prop-types";
import '../../assets/css/font-awesome-all.min.css';

function TestimonialCard({ desc, authorName, authorDesc, authorImg }) {
  return (
    <div className="aai-testimonial-item">
      <div className="aai-testimonial-item-top">
        <div className="d-flex align-items-center justify-content-between">
          <div className="aai-testimonial-quoate">
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.13566 10.6719C8.42933 9.30632 8.07617 7.82304 8.07617 6.22204C8.07617 4.5975 8.50585 3.25548 9.36521 2.196C10.2246 1.13652 11.5607 0.606773 13.3736 0.606773V2.83169C12.7379 2.83169 12.2729 2.97296 11.9786 3.25548C11.6843 3.53801 11.5372 4.07953 11.5372 4.88003V5.23319H14.1152V10.6719H9.13566ZM1.82511 10.6719C1.11878 9.30632 0.76562 7.82304 0.76562 6.22204C0.76562 4.5975 1.1953 3.25548 2.05466 2.196C2.91402 1.13652 4.25015 0.606773 6.06304 0.606773V2.83169C5.42735 2.83169 4.96236 2.97296 4.66805 3.25548C4.37376 3.53801 4.2266 4.07953 4.2266 4.88003V5.23319H6.80468L6.80468 10.6719H1.82511Z"
                fill="#747681"
              />
            </svg>
          </div>
          <div className="aai-awards-stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <p className="aai-testimonial-desc">{desc}</p>
      </div>
      <div className="aai-testimonial-item-bottom d-flex align-items-center">
        <div>
          <img
            src={authorImg.src}
            width={authorImg.width}
            height={authorImg.height}
            className="aai-testimonial-author-img"
            alt=""
          />
        </div>
        <div>
          <h4 className="aai-testimonial-author-name">{authorName}</h4>
          <span className="aai-testimonial-author-title">{authorDesc}</span>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  authorImg: ProtoTypes.string,
  authorDesc: ProtoTypes.string,
  desc: ProtoTypes.string,
  authorName: ProtoTypes.string,
};

export default TestimonialCard;
