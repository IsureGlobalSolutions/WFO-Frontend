import React from "react";
import ProtoTypes from "prop-types";
import Link from "next/link";
import bg from "@/assets/img/bg/bread-crumb-bg.jpeg";

function Breadcrumb({ title }) {
  return (
    <section
      className="aai-breadcrumb"
      style={{
        background: `url(${bg.src}) no-repeat center center/cover`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="text-center">
              <h2 className="aai-page-title">{title}</h2>
              <ul className="aai-breadcrumb-nav d-flex align-items-center justify-content-center">
                <li>
                  <Link
                    href="/"
                    className="aai-breadcrumb-link text-decoration-underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 16L18 12M18 12L14 8M18 12L6 12"
                      stroke="#DADADA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li>
                  <Link href="#" className="aai-breadcrumb-link">
                    {" "}
                    {title}{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Breadcrumb.propTypes = {
  title: ProtoTypes.string,
};

export default Breadcrumb;
