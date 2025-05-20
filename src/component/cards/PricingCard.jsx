import React from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
const Option = ({ title, options }) => {
  return (
    <li className="aai-price-list-item d-flex align-items-center">
      {options.includes(title) ? (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4839 10.0673C15.907 9.64423 16.5929 9.64423 17.016 10.0673C17.4065 10.4578 17.4366 11.0723 17.1061 11.4973L17.016 11.5994L12.6827 15.9327C12.2921 16.3232 11.6776 16.3533 11.2527 16.0228L11.1506 15.9327L8.98393 13.766C8.56086 13.343 8.56086 12.657 8.98393 12.234C9.37445 11.8434 9.98895 11.8134 10.4139 12.1438L10.516 12.234L11.9166 13.6338L15.4839 10.0673Z"
            fill="#DADADA"
          />
          <g opacity="0.5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 2.16666C7.01687 2.16666 2.16663 7.01691 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01691 18.983 2.16666 13 2.16666ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
              fill="#DADADA"
            />
          </g>
        </svg>
      ) : (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0642 9.93589L9.93591 16.0641M16.0642 16.0641L9.93591 9.93585"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity="0.5">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 2.16666C7.01687 2.16666 2.16663 7.01691 2.16663 13C2.16663 18.9831 7.01687 23.8333 13 23.8333C18.983 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01691 18.983 2.16666 13 2.16666ZM13 4.33333C17.7864 4.33333 21.6666 8.21353 21.6666 13C21.6666 17.7865 17.7864 21.6667 13 21.6667C8.21349 21.6667 4.33329 17.7865 4.33329 13C4.33329 8.21353 8.21349 4.33333 13 4.33333Z"
              fill="#DADADA"
            />
          </g>
        </svg>
      )}

      <span className="aai-price-list-item-text">{title}</span>
    </li>
  );
};

function PricingCard({ title, desc, options, status, btnClass }) {
  return (
    <div
      className="aai-price-table mb-4"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="row g-4 align-items-center justify-content-between">
        <div className="col-xl-4 col-lg-6">
          <div className="aai-price-pack">
            <h3 className="aai-price-pack-name">{title}</h3>
            <p className="aai-price-pack-desc">{desc}</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <ul className="aai-price-lists list-unstyled">
            <Option title="All Limited Links" options={options} />
            <Option title="Own Analytics Platform" options={options} />
            <Option title="Chat Support" options={options} />
            <Option title="Unlimited Users" options={options} />
          </ul>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="aai-price-value">
            <h2 className="aai-price">{status}</h2>
          </div>
        </div>
        <div className="col-xl-2 col-lg-6">
          <div>
            <Link
              href="/prices"
              className={btnClass ? btnClass : "aai-gradient-outline-btn"}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
PricingCard.propTypes = {
  title: ProtoTypes.string,
  desc: ProtoTypes.string,
  options: ProtoTypes.array,
  status: ProtoTypes.string,
  btnClass: ProtoTypes.string,
};

Option.propTypes = {
  title: ProtoTypes.string,
  options: ProtoTypes.array,
};
export default PricingCard;
