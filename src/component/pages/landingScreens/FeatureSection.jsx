import { ReactComponent as Dot } from "../../../assets/svgs/dot.svg";
import { ReactComponent as ListLogo } from "../../../assets/svgs/list.svg";
import { ReactComponent as TeamLogo } from "../../../assets/svgs/team.svg";
import { ReactComponent as LoaderLogo } from "../../../assets/svgs/loader.svg";
import featureImg1 from "../../../assets/img/home3/home3-feature-slider-img1.png";
import featureImg2 from "../../../assets/img/home3/home3-feature-slider-img2.png";
import featureImg3 from "../../../assets/img/home3/home3-feature-slider-img3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

function FeatureSection() {
  const arrImage = [
    { id: 1, src: featureImg1 },
    { id: 2, src: featureImg2 },
    { id: 3, src: featureImg3 },
  ];
  return (
    <div className="home3-feature-section mb-110">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="feature-content-wrap">
              <div
                className="section-title mb-40 wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>
                  <Dot />
                  Why Choose This
                  <Dot />
                </span>
                <h2>Innovate with Confidence</h2>
                <p>
                  Welcome to HRWHIZZ, where digital innovation meets strategic
                  excellence. As a dynamic force in the realm of digital
                  marketing, we are dedicated to propelling businesses into the
                  spotlight of online success.
                </p>
              </div>
              <div className="feature-list-wrap">
                <div className="progressBarContainer">
                  <div
                    className="feature-and-progress wow animate fadeInDown"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="single-feature">
                      <div className="icon">
                        <ListLogo />
                      </div>
                      <div className="content">
                        <h6>List & Board View</h6>
                        <p>
                          Sed accumsan sem cursus luctus porta. amem Phasellu du
                          enim, efficitur quis velit ac, fringilla posuere leo
                          fusci onion of the most important to this work.
                        </p>
                      </div>
                    </div>
                    <span data-slick-index="0" className="progressBar"></span>
                  </div>
                  <div
                    className="feature-and-progress wow animate fadeInDown"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="single-feature two pt-25">
                      <div className="icon">
                        <TeamLogo />
                      </div>
                      <div className="content">
                        <h6>Multiple Teams</h6>
                        <p>
                          Sed accumsan sem cursus luctus porta. amem Phasellu du
                          enim, efficitur quis velit ac, fringilla posuere leo
                          fusci onion of the most important to this work.
                        </p>
                      </div>
                    </div>
                    <span data-slick-index="1" className="progressBar"></span>
                  </div>
                  <div
                    className="feature-and-progress wow animate fadeInDown"
                    data-wow-delay="800ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="single-feature three pt-25">
                      <div className="icon">
                        <LoaderLogo />
                      </div>
                      <div className="content">
                        <h6>No Page Load</h6>
                        <p>
                          Sed accumsan sem cursus luctus porta. amem Phasellu du
                          enim, efficitur quis velit ac, fringilla posuere leo
                          fusci onion of the most important to this work.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="slider single-item wow animate zoomIn"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {arrImage.map((img) => (
                  <SwiperSlide key={img.id}>
                    <div className="slider-item">
                      <img
                        className="feature-img"
                        src={img.src}
                        alt={`Feature ${img.id}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
