import { ReactComponent as Listing } from '../../../../assets/svgs/listing.svg'
import featurDetail from '../../../../assets/img/innerpage/service-details-feature-img.jpg'
import servicesDetailFaq from '../../../../assets/img/innerpage/service-details-faq-img.jpg'
import backgroundImage from '../../../../assets/img/innerpage/breadcrumb-bg1.png'
import { ReactComponent as Scrolldown } from '../../../../assets/svgs/scrolldown.svg'
const BreadCrumbSection = () => {

    return (
        <>


            <div className="breadcrumb-section" style={{ backgroundImage: `url(${backgroundImage}),linear-gradient(180deg, #121212 0%, #121212 100%)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-wrapper">
                                <div className="banner-content">
                                    <ul className="breadcrumb-list">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Service Details</li>
                                    </ul>
                                    <h1>We are a IT service Company working with talents on delivering unique ideas.</h1>
                                </div>
                                <div className="scroll-down-btn">
                                    <a href="#service-details-section">
                                        <Scrolldown />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-details-page pt-120 mb-120" id="service-details-section">
                <div className="container">
                    <div className="service-details-top-area mb-80">
                        <div className="row g-lg-4 gy-5 align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-top-content">
                                    <h2>Software <span>Development.</span></h2>
                                    <p>Where innovation meets passion in a journey that started with a simple idea and a shared dream. Founded in recent year we embarked on a mission to bring the new innovation and introduce the technology. From humble beginnings to our current aspirations, every step has been fueled by a relentless commitment.</p>
                                    <ul className="key-features">
                                        <li>
                                            <Listing />
                                            Custom Software
                                        </li>
                                        <li>
                                            <Listing />
                                            Mobile Application
                                        </li>
                                        <li>
                                            <Listing />
                                            Software Consulting
                                        </li>
                                        <li>
                                            <Listing />
                                            Web Application
                                        </li>
                                        <li>
                                            <Listing />
                                            Enterprise Software
                                        </li>
                                        <li>
                                            <Listing />
                                            Maintenance and Support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="service-details-img">
                                    <img src={featurDetail} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-details-faq-area wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="row g-lg-4 gy-5 align-items-xl-center">
                            <div className="col-lg-6">
                                <div className="service-details-faq-img">
                                    <img src={servicesDetailFaq} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-content">
                                    <div className="accordion" id="accordionTravel">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="faqheadingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseOne" aria-expanded="true" aria-controls="faqcollapseOne">
                                                    01. What is Task Management and how does it work?
                                                </button>
                                            </h2>
                                            <div id="faqcollapseOne" className="accordion-collapse collapse show" aria-labelledby="faqheadingOne" data-bs-parent="#accordionTravel">
                                                <div className="accordion-body">
                                                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci only Integer purus onthis felis non aliquam.Mauris nec just vitae ann auctor tol euismod sit amet non ipsul growing this
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="faqheadingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseTwo" aria-expanded="false" aria-controls="faqcollapseTwo">
                                                    02. Is Zenfy suitable for my business?
                                                </button>
                                            </h2>
                                            <div id="faqcollapseTwo" className="accordion-collapse collapse" aria-labelledby="faqheadingTwo" data-bs-parent="#accordionTravel">
                                                <div className="accordion-body">
                                                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus onthis
                                                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul growing this
                                                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="faqheadingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseThree" aria-expanded="false" aria-controls="faqcollapseThree">
                                                    03. The system requirements using Task Management?
                                                </button>
                                            </h2>
                                            <div id="faqcollapseThree" className="accordion-collapse collapse" aria-labelledby="faqheadingThree" data-bs-parent="#accordionTravel">
                                                <div className="accordion-body">
                                                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus onthis
                                                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul growing this
                                                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="faqheadingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseFour" aria-expanded="false" aria-controls="faqcollapseFour">
                                                    04. How can I upgrade my subscription?
                                                </button>
                                            </h2>
                                            <div id="faqcollapseFour" className="accordion-collapse collapse" aria-labelledby="faqheadingFour" data-bs-parent="#accordionTravel">
                                                <div className="accordion-body">
                                                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos only Integer purus onthis
                                                    placerat felis non aliquam.Mauris nec justo vitae ante auctor tol euismod sit amet non ipsul growing this
                                                    Praesent commodo at massa eget suscipit. Utani vitae enim velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="faqheadingFive">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseFive" aria-expanded="true" aria-controls="faqcollapseFive">
                                                    05. How can I upgrade my subscription?
                                                </button>
                                            </h2>
                                            <div id="faqcollapseFive" className="accordion-collapse collapse" aria-labelledby="faqheadingFive" data-bs-parent="#accordionTravel">
                                                <div className="accordion-body">
                                                    Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci only Integer purus onthis felis non aliquam.Mauris nec just vitae ann auctor tol euismod sit amet non ipsul growing this
                                                </div>
                                            </div>
                                        </div>
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

export default BreadCrumbSection