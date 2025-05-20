import React from "react";
import ProtoTypes from "prop-types";
import Link from "next/link";
import bg from "@/assets/img/bg/bread-crumb-bg.jpeg";

function BreadcrumbV2({ title, name, authorCategory, date }) {
  return (
    <section
      className="aai-breadcrumb"
      style={{ background: `url(${bg.src}) no-repeat center center/cover` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-6">
            <div className="text-center d-flex flex-column gap-3">
              <h2 className="section-title">{title}</h2>
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
                    {name}{" "}
                  </Link>
                </li>
              </ul>
              <div className="aai-post-meta justify-content-center d-flex flex-wrap gap-3">
                <Link href="#" className="d-flex align-items-center gap-2">
                  <i className="fa-regular fa-user"></i>
                  <span>{authorCategory}</span>
                </Link>
                <Link href="#" className="d-flex align-items-center gap-2">
                  <i className="fa-regular fa-clock"></i>
                  <span>{date}</span>{" "}
                </Link>
                <Link href="#" className="d-flex align-items-center gap-2">
                  <i className="fa-regular fa-folder"></i>
                  <span>{name}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
BreadcrumbV2.propTypes = {
  title: ProtoTypes.string,
  name: ProtoTypes.string,
  authorCategory: ProtoTypes.string,
  date: ProtoTypes.string,
};
export default BreadcrumbV2;
