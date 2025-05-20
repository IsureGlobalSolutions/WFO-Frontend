import React from "react";
import Link from "next/link";

function SignUp() {
  return (
    <form>
      <div className="row g-3">
        <div className="col-lg-6">
          <div className="aai-form-container">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="aai-form-container">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="aai-form-container">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="aai-form-container position-relative">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Password"
            />
            <button className="aai-form-eye">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.40625 3L21.4062 21"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.9907 10.5869C10.6154 10.9619 10.4045 11.4707 10.4043 12.0012C10.4041 12.5317 10.6147 13.0406 10.9897 13.4159C11.3647 13.7912 11.8735 14.0021 12.404 14.0023C12.9345 14.0025 13.4434 13.7919 13.8187 13.4169"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.76925 5.36506C10.6267 5.11978 11.5144 4.9969 12.4062 5.00006C16.4062 5.00006 19.7392 7.33306 22.4062 12.0001C21.6283 13.3611 20.7942 14.5241 19.9032 15.4881M17.7633 17.3491C16.1323 18.4491 14.3483 19.0001 12.4062 19.0001C8.40625 19.0001 5.07325 16.6671 2.40625 12.0001C3.77525 9.60506 5.31925 7.82506 7.03825 6.65906"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="aai-form-container d-flex gap-3 position-relative">
            <input type="checkbox" className="shadow-none" />
            <label className="aai-form-check-label">
              By creating an account, you agreeing to our Privacy Policy, and
              Electronics Communication Policy.
            </label>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-grid">
            <button className="aai-btn btn-pill-solid">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="aai-form-support-text">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="aai-form-support-link text-decoration-underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUp;
