import React from "react";
import ProtoTypes from "prop-types";
import bg from "../../assets/img/bg/testimonial-bg.jpeg";
import Slider from "../common/Slider";
import TestimonialCard from "../cards/TestimonialCard";
import authorImg from "../../assets/img/avatar/av-5.png";
import authorImg2 from "../../assets/img/avatar/av-6.png";
import authorImg3 from "../../assets/img/avatar/av-7.png";
import authorImg4 from "../../assets/img/avatar/av-8.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { ImGooglePlus } from "react-icons/im";

function Testimonials({ className }) {
  return (
  <div className="section  " style={{backgroundColor:'#181818'}}>
  <div className="container ps-2" style={{padding:'70px' }}>
    <div className="row g-3 align-items-center justify-content-center">
      <div className="col-lg-6 col-12 mt-4  ">
        <div  className="mb-2" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 , fontSize:"28px" , color:"#ffff" }} >Download Our Best Apps</div>
        <span className="pt-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300 , fontSize:"19px" , color:"#f8f9fa" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
      </div>
      <div className="col-lg-6 col-12 text-lg-end mt-4">
        <a className="btn btn-lg px-4  lift btn-outline-primary2" href="#" style={{ marginRight: "10px" }}>
          < IoLogoGooglePlaystore style={{paddingRigt:"10px"}}/>
          <span className="ms-2">
          App Store
          </span>
          </a>
        <a className="btn btn-lg px-4 lift btn-outline-primary3" href="#">
        < ImGooglePlus style={{paddingRigt:"10px"}}/>
          <span className="ms-2">
          Google Play
          </span>
        </a>
      </div>
    </div> {/* .row end */}
  </div>
</div>

  );
}
Testimonials.propTypes = {
  className: ProtoTypes.string,
};
export default Testimonials;
