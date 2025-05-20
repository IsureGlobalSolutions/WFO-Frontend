import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ReactComponent as RedStar } from '../../../../assets/svgs/redstar.svg'
import { Pagination, Autoplay, Navigation } from "swiper/modules";
const WorkingServices = () => {


    return (
        <>
            <div className="home2-process-section two mb-120">
                <div className="container">
                    <div className="section-title5 text-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <span className="sub-title5 two">
                            <RedStar />
                            Working Process
                            <RedStar />
                        </span>
                        <h2>Bringing the best IT <span> Vendors To You.</span></h2>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="process-slider-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="swiper home2-process-slider">
                                    <div className="swiper-wrapper">


                                        <Swiper
                                            slidesPerView={4}
                                            spaceBetween={10}
                                            navigation={{
                                                prevEl: ".home2-process-prev",
                                                nextEl: ".home2-process-next",
                                            }}
                                            loop={true}


                                            breakpoints={{
                                                640: {
                                                    slidesPerView: 4,
                                                    spaceBetween: 20,
                                                },
                                                768: {
                                                    slidesPerView: 4,
                                                    spaceBetween: 40,
                                                },
                                                1024: {
                                                    slidesPerView: 4,
                                                    spaceBetween: 50,
                                                },
                                            }}
                                            modules={[Autoplay, Pagination, Navigation]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>  <div className="swiper-slide wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                                <div className="single-process">
                                                    <div className="step">
                                                        <div className="number">
                                                            <h6>Step</h6>
                                                            <span>01</span>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Client Consultation</h4>
                                                        <p>Sed accumsan sem cursus luctus porta. amem Phasellu du enim, efficitur quis velit ac, fringilla posuere leo fusci.</p>
                                                    </div>
                                                </div>
                                            </div></SwiperSlide>
                                            <SwiperSlide> <div className="swiper-slide wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                                <div className="single-process">
                                                    <div className="step">
                                                        <div className="number">
                                                            <h6>Step</h6>
                                                            <span>02</span>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Strategy Development</h4>
                                                        <p>Sed accumsan sem cursus luctus porta. amem Phasellu du enim, efficitur quis velit ac, fringilla posuere leo fusci.</p>
                                                    </div>
                                                </div>
                                            </div></SwiperSlide>
                                            <SwiperSlide><div className="swiper-slide wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div className="single-process">
                                                    <div className="step">
                                                        <div className="number">
                                                            <h6>Step</h6>
                                                            <span>03</span>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Market Research</h4>
                                                        <p>Sed accumsan sem cursus luctus porta. amem Phasellu du enim, efficitur quis velit ac, fringilla posuere leo fusci.</p>
                                                    </div>
                                                </div>
                                            </div></SwiperSlide>
                                            <SwiperSlide>  <div className="swiper-slide wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                                <div className="single-process">
                                                    <div className="step">
                                                        <div className="number">
                                                            <h6>Step</h6>
                                                            <span>04</span>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Campaign Planning</h4>
                                                        <p>Sed accumsan sem cursus luctus porta. amem Phasellu du enim, efficitur quis velit ac, fringilla posuere leo fusci.</p>
                                                    </div>
                                                </div>
                                            </div></SwiperSlide>
                                            <SwiperSlide>   <div className="swiper-slide">
                                                <div className="single-process">
                                                    <div className="step">
                                                        <div className="number">
                                                            <h6>Step</h6>
                                                            <span>05</span>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h4>Campaign Planning</h4>
                                                        <p>Sed accumsan sem cursus luctus porta. amem Phasellu du enim, efficitur quis velit ac, fringilla posuere leo fusci.</p>
                                                    </div>
                                                </div>
                                            </div></SwiperSlide>


                                        </Swiper>






                                    </div>
                                </div>
                                <div className="slider-btn-area">
                                    <div className="slider-btn home2-process-prev" >
                                        <i className="bi bi-arrow-left" ></i>
                                    </div>
                                    <div className="content">
                                        <p>Overcome the IT Challenges</p>
                                    </div>
                                    <div className="slider-btn home2-process-next" >
                                        <i className="bi bi-arrow-right" ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WorkingServices