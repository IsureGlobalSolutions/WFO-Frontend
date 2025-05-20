import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo/logo-m.svg";

function SimpleHeader() {
  return (
    <header className="position-absolute top-0 left-0 w-100 pt-4">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <div>
              <Link to="/">
                <img
                  src={logo}
                  height={logo.height}
                  width={logo.width}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col-auto">
            <div className="d-flex align-items-center aai-signup-in-links">
              <Link href="/signin">Login</Link>
              {/* <Link href="/signup" className="aai-gradient-outline-btn">
                Signup
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SimpleHeader;
