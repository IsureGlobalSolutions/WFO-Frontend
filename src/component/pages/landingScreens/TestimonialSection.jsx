import "../../../assets/css/style.css";
import { ReactComponent as Dot } from "../../../assets/svgs/dot.svg";
import googleLogo from "../../../assets/img/home3/icon/google-logo.svg";
import imgLogo1 from "../../../assets/img/home2/testi-author-05.png";
import imgLogo2 from "../../../assets/img/home2/testi-author-01.png";
import imgLogo3 from "../../../assets/img/home2/testi-author-02.png";
import imgLogo4 from "../../../assets/img/home2/testi-author-03.png";
import imgLogo5 from "../../../assets/img/home2/testi-author-04.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

const testimonialData = [
  {
    id: 1,
    src: imgLogo1,
    name: "Luke Julian",
    designation: "CEO At astra.com",
    desc: " Integer purus odio, placerat nec rhoncus in, going tour of ulamcorper necless dolor. and utor offer tha wegon poort himenaeos. Praesent necles neque att dolor venenatis Donec lacinia placerat.",
    logo: googleLogo,
  },
  {
    id: 2,
    src: imgLogo2,
    name: "David Beckham",
    designation: "CEO At astra.com",
    desc: " Integer purus odio, placerat nec rhoncus in, going tour of ulamcorper necless dolor. and utor offer tha wegon poort himenaeos. Praesent necles neque att dolor venenatis Donec lacinia placerat.",
    logo: googleLogo,
  },
  {
    id: 3,
    src: imgLogo3,
    name: "Daniel Scoot",
    designation: "CEO At astra.com",
    desc: " Integer purus odio, placerat nec rhoncus in, going tour of ulamcorper necless dolor. and utor offer tha wegon poort himenaeos. Praesent necles neque att dolor venenatis Donec lacinia placerat.",
    logo: googleLogo,
  },
  {
    id: 4,
    src: imgLogo4,
    name: "Flurance Miyagi",
    designation: "CEO At astra.com",
    desc: " Integer purus odio, placerat nec rhoncus in, going tour of ulamcorper necless dolor. and utor offer tha wegon poort himenaeos. Praesent necles neque att dolor venenatis Donec lacinia placerat.",
    logo: googleLogo,
  },
  {
    id: 5,
    src: imgLogo5,
    name: "Thomas Robert",
    designation: "CEO At astra.com",
    desc: " Integer purus odio, placerat nec rhoncus in, going tour of ulamcorper necless dolor. and utor offer tha wegon poort himenaeos. Praesent necles neque att dolor venenatis Donec lacinia placerat.",
    logo: googleLogo,
  },
];

function TestimonialSection() {
  return (
    <div className="home3-testimonial-section mb-110">
      <div className="container-fluid mb-60">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8">
            <div
              className="section-title text-center wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <span>
                <Dot />
                Voices of Confidence
                <Dot />
              </span>
              <h2>Hear What Our Clients Say</h2>
              <p>
                Welcome to HRWHIZZ, where digital innovation meets strategic
                excellence. As a dynamic force in the realm of digital
                marketing, we are dedicated to propelling businesses into the
                spotlight of online success.
              </p>
            </div>
          </div>
        </div>
        <div
          className="testimonial-wrap wow animate fadeInUp"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper home3-testimonial-slider">
                <div className="swiper-wrapper">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                  >
                    {testimonialData.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="swiper-slide">
                          <div className="testimonial-card3 ">
                            <div className="author-area">
                              <div className="author-img">
                                <img src={item.src} alt="logo" />
                              </div>
                              <div className="content">
                                <h6>{item.name}</h6>
                                <span>{item.designation}</span>
                              </div>
                            </div>
                            <p>{item.desc}</p>
                            <div className="logo-and-rating">
                              <div className="logo">
                                <img src={item.logo} alt="logo" />
                              </div>
                              <ul className="rating">
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                                <li>
                                  <i className="bi bi-star-fill"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
