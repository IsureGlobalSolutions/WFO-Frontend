import React from "react";
import bg1 from "../../assets/img/bg/service-1.jpeg";
import bg2 from "../../assets/img/bg/service-2.jpeg";
// import img1 from "../../assets/img/services/service-1.svg";
import img2 from "../../assets/img/services/service-2.svg";
import img3 from "../../assets/img/services/service-3.svg";
import ServiceCard from "../cards/ServiceCard";
import img1 from "../../assets/css/img/hrms/pexels-1.jpg";

function Service() {
  return (
  <div className="section risk-identfy  " style={{marginTop:'100px'  , marginBottom:'100px'}}>
  <div className="container">
    <div className="row align-items-center justify-content-between">
      <div className="col-xxl-6 col-lg-6 col-md-12">
        <svg className="img-fluid d-none d-lg-block grayscale-on-hover" viewBox="0 0 600 449" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path className="fill-primary" fillRule="evenodd" clipRule="evenodd" d="M457.559 52.7163C450.334 49.4569 442.708 48.3882 437.171 48.4057C435.791 48.4101 434.597 47.3772 434.5 45.9999V45.9999C434.403 44.6226 435.441 43.4224 436.822 43.4082C443.014 43.3447 451.513 44.5037 459.615 48.1586C468.935 52.3629 477.824 59.9261 481.883 72.7452C489.473 96.7143 542.361 253.344 567.868 328.698L567.883 328.742L567.896 328.787C570.988 339.179 572.298 354.704 565.541 367.015C562.123 373.243 556.679 378.564 548.562 381.898C540.489 385.215 529.902 386.516 516.221 384.984C463.462 379.078 365.926 360.148 321.4 350.947C320.048 350.667 319.219 349.352 319.5 348V348C319.78 346.648 321.065 345.772 322.417 346.051C366.956 355.255 464.278 374.139 516.778 380.015C529.897 381.484 539.586 380.181 546.662 377.273C553.695 374.384 558.276 369.861 561.158 364.61C566.993 353.978 566.014 340.029 563.116 330.257C537.618 254.927 484.724 98.2807 477.116 74.2546C473.576 63.0737 465.881 56.4703 457.559 52.7163Z" fill="black" />
          <path d="M358 11.5L201.5 60.5C181.334 66.5 135.2 80.1 112 86.5C88.8 92.9 76.3333 118.833 73 131C64.6668 164.667 44.3004 248.4 29.5004 314C14.7004 379.6 57.0004 388.667 80.0004 385C202 368.667 464.4 333.9 538 325.5C611.6 317.1 599.667 271 584.5 249C546 194.5 462.6 76.2 437 39C411.4 1.8 373.667 5.16667 358 11.5Z" fill="url(#pattern0)" />
          <path className="fill-primary" fillRule="evenodd" clipRule="evenodd" d="M123.217 82.4818C136.917 51.7616 164.945 44 177.5 44H240.5C241.881 44 243 45.1193 243 46.5V46.5C243 47.8807 241.881 49 240.5 49H177.5C166.39 49 140.484 56.0384 127.784 84.5182C114.508 114.288 58.1532 208.436 31.6798 251.728C29.5847 255.793 27.2381 262.706 27.0622 270.109C26.9035 276.79 28.5055 283.702 33.4799 289.382C34.3896 290.421 34.4476 291.995 33.5004 293V293C32.5533 294.005 30.961 294.057 30.0349 293.033C23.7787 286.115 21.8806 277.694 22.0636 269.991C22.2616 261.657 24.8867 253.96 27.2817 249.348C27.3086 249.296 27.3372 249.245 27.3676 249.196C53.9139 205.787 110.101 111.895 123.217 82.4818Z" fill="black" />
          <path className="fill-secondary" d="M56.5 23L69.0574 44.75H43.9426L56.5 23Z" fill="#C4C4C4" />
          <path className="fill-secondary" d="M319 401.5L270.25 429.646L270.25 373.354L319 401.5Z" fill="#C4C4C4" />
          <path className="fill-secondary" d="M37 43L44.7942 56.5H29.2058L37 43Z" fill="#C4C4C4" />
          <path className="fill-secondary" d="M275 358.5L244.25 376.254L244.25 340.746L275 358.5Z" fill="#C4C4C4" />
          <path className="fill-secondary" d="M55 61L62.7942 74.5H47.2058L55 61Z" fill="#C4C4C4" />
          <path className="fill-secondary" d="M234 399.5L203.25 417.254L203.25 381.746L234 399.5Z" fill="#C4C4C4" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
              <use xlinkHref="#image0_54_6" transform="translate(0 -0.00197126) scale(0.000444444 0.000669295)" />
            </pattern>
            <image id="image0_54_6" width={2250} height={1500} xlinkHref={img1}/>
          </defs>
        </svg>
      </div>
      <div className="col-xxl-5 col-lg-6 col-md-12">
        <h2 className="fw-bold mb-2" style={{fontFamily: 'Roboto, sans-serif' , fontWeight: 600  , fontSize:"28px" , color:'#181818' } }>Identify <span className="text-gradient" style={{fontFamily: 'Roboto, sans-serif' , fontWeight: 600  ,  fontSize:"28px" , color:'#181818' } }>Risks</span></h2>
        <p className="mb-4" style={{fontFamily: 'Roboto, sans-serif' , fontWeight: 300  , fontSize:"16px" , lineHeight:'2rem' }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
        <h2 className="fw-bold mb-2" style={{fontFamily: 'Roboto, sans-serif' , fontWeight: 600  , fontSize:"28px" , color:'#181818' } }>
        Impact Assessment
        </h2>
        <p className="mb-4 " style={{fontFamily: 'Roboto, sans-serif' , fontWeight: 300  , fontSize:"16px" , lineHeight:'2rem' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <button className="btn mx-2 btn-primary5 btn-animate-1">
          <span>GET DETAILS</span>
          <i className="fa fa-long-arrow-right" />
        </button>
      </div>
    </div> {/* .row end */}
  </div>
</div>

  );
}

export default Service;
