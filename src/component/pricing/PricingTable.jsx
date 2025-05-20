import React from "react";

function PricingTable() {
  return (
    <section className="aai-feature-table pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="text-center mb-5">
              <h2 className="section-title">Compare plans & features</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12">
            <div className="aai-table-wrapper">
              <table className="aai-table">
                <thead className="aai-thead">
                  <tr>
                    <th scope="col">
                      <span> Features </span>
                    </th>
                    <th scope="col">
                      <span className="aai-text-warning">Starter</span>
                    </th>
                    <th scope="col">
                      <span className="aai-text-warning">Popular</span>
                    </th>
                    <th scope="col">
                      <span className="aai-text-danger"> Enterprise </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="aai-tbody">
                  <tr>
                    <th>
                      <div className="">
                        <span>Custom AI chatbot</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#DADADA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="">
                        <span>Live support</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#DADADA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <td></td>
                    <td>Email</td>
                    <td>1-1 support</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="">
                        <span>Integrations</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#DADADA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="">
                        <span> Advanced analytics </span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#DADADA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="">
                        <span>Dedicated account manager</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#DADADA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="">
                        <span>Dedicated account manager</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#DADADA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="">
                        <span>Customized analytics</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#DADADA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <td></td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="">
                        <span>Multi-agent support</span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="#DADADA"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </th>
                    <td></td>
                    <td></td>
                    <td>
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.666016"
                            width="24"
                            height="24"
                            rx="12"
                            fill="#EDCB88"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.4708 7.52876C18.7311 7.78911 18.7311 8.21122 18.4708 8.47157L11.1374 15.8049C10.8771 16.0653 10.455 16.0653 10.1946 15.8049L6.86128 12.4716C6.60093 12.2112 6.60093 11.7891 6.86128 11.5288C7.12163 11.2684 7.54374 11.2684 7.80409 11.5288L10.666 14.3907L17.5279 7.52876C17.7883 7.26841 18.2104 7.26841 18.4708 7.52876Z"
                            fill="#04091E"
                          />
                        </svg>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTable;
