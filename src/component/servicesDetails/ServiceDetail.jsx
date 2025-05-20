import React from "react";
import Link from "next/link";
import sl1 from "@/assets/img/others/sl-1.jpeg";
import slr1 from "@/assets/img/others/slr-1.jpeg";
import slr2 from "@/assets/img/others/slr-2.jpeg";
import Image from "next/image";

function ServiceDetail() {
  return (
    <section className="aai-service-details">
      <div className="container">
        <div className="row justify-content-between g-4 align-items-center">
          <div className="col-lg-8">
            <div>
              <h2 className="section-title">Search engine optimization</h2>
              <p className="section-desc">
                Convert data noise intelligent for to quis lorem.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-4">
              <Link
                href="#"
                className="aai-gradient-outline-btn d-flex gap-2 align-items-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_164_5740)">
                    <path
                      d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C13.6193 12.5 12.5 13.6193 12.5 15C12.5 16.3807 13.6193 17.5 15 17.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.25 8.91683L12.75 6.0835"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.25 11.0835L12.75 13.9168"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_164_5740">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>Share</span>{" "}
              </Link>
              <Link
                href="#"
                className="aai-btn btn-pill-solid d-flex gap-2 align-items-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.59837 4.43186C3.25014 4.78008 2.97391 5.19348 2.78546 5.64846C2.597 6.10343 2.5 6.59107 2.5 7.08353C2.5 7.57599 2.597 8.06363 2.78546 8.5186C2.97391 8.97358 3.25014 9.38698 3.59837 9.7352L10 16.1369L16.4017 9.7352C17.105 9.03193 17.5001 8.0781 17.5001 7.08353C17.5001 6.08896 17.105 5.13513 16.4017 4.43186C15.6984 3.7286 14.7446 3.33351 13.75 3.33351C12.7555 3.33351 11.8016 3.7286 11.0984 4.43186L10 5.5302L8.9017 4.43186C8.55348 4.08364 8.14008 3.80741 7.68511 3.61895C7.23013 3.43049 6.74249 3.3335 6.25003 3.3335C5.75757 3.3335 5.26993 3.43049 4.81496 3.61895C4.35998 3.80741 3.94659 4.08364 3.59837 4.43186V4.43186Z"
                    stroke="url(#paint0_linear_164_5736)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_164_5736"
                      x1="2.7625"
                      y1="3.3335"
                      x2="14.2571"
                      y2="18.2463"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80FCF0" />
                      <stop offset="1" stopColor="#AC5DFA" />
                    </linearGradient>
                  </defs>
                </svg>

                <span>Favorite</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-lg-8">
            <div className="swiper aaiImgSlider mb-4 mb-lg-0">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="aai-img-slider-item">
                    <Image
                      height={sl1.height}
                      width={sl1.width}
                      src={sl1.src}
                      className="img-fluid aai-slider-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="aai-img-slider-item">
                    <Image
                      height={sl1.height}
                      width={sl1.width}
                      src={sl1.src}
                      className="img-fluid aai-slider-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="aai-img-slider-item">
                    <Image
                      height={sl1.height}
                      width={sl1.width}
                      src={sl1.src}
                      className="img-fluid aai-slider-img"
                      alt=""
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="aai-img-slider-item">
                    <Image
                      height={sl1.height}
                      width={sl1.width}
                      src={sl1.src}
                      className="img-fluid aai-slider-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="swiper-pagination aai-swiper-pagination"></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-4">
              <div className="col-12">
                <div>
                  <Image
                    height={sl1.height}
                    width={sl1.width}
                    src={slr1.src}
                    className="img-fluid aai-service-thumb w-100"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12">
                <div>
                  <Image
                    height={slr2.height}
                    width={slr2.width}
                    src={slr2.src}
                    className="img-fluid aai-service-thumb w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;
