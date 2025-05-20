import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/img/bg/aai-feature-bg.jpeg";
import cardImg from "../../assets/img/features/fi-1.svg";
import cardImg2 from "../../assets/img/features/fi-2.svg";
import cardImg3 from "../../assets/img/features/fi-3.svg";
import cardImg4 from "../../assets/img/features/fi-4.svg";
import cardImg5 from "../../assets/img/features/fi-5.svg";
import cardImg6 from "../../assets/img/features/fi-6.svg";
import FeatureCard from "../cards/FeatureCard";
import './landingpage.css'

function Features({ className }) {
  return (
   <div className="section pricing-table bg-card" style={{backgroundColor:'#fff' , padding:'60px'}}>
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-12 mb-4">
      <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 , fontSize:"27px" , color:"#000000" }}>Our Pricing Design</span>
        <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 200 , fontSize:"18px"  , color:'black' }}>It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
      </div>
      <div className="col-lg-3 col-md-6">
      <div className=" cardcard text-center mt-0 pt-0 " >
         <span className="h6 w-60 mx-auto px-4 py-2 rounded-bottom bgprimary text-light mt-4 pt-1">Starter</span>

          <div className="card-body mt-4 pt-4">
            <h1 className="h1 textprimary mb-0" data-pricing-value={15}>$<span className="price">3</span><span className="h6 text-muted ml-2">/ per month</span></h1>
          </div>
          <div className="card-body mt-4 pt-3 ">
            <ul className="list-unstyled mb-4">
              <li className="py-2" >Up to 5 users</li>
              <li className="py-2">Basic support on Github</li>
              <li className="py-2">Monthly updates</li>
              <li className="py-2">Free cancelation</li>
            </ul>
            <button type="button" className="btn px-4 btn-outline-secondary text-uppercase">Order now</button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
      <div className=" cardcard text-center mt-0 pt-0 " >
          <span className="h6 w-60 mx-auto px-4 py-3  pt-1 rounded-bottom bgprimary text-white shadow-sm">Professional</span>
          <div className="card-body mt-4 pt-4">
            <h1 className="h1 textprimary mb-0" data-pricing-value={30}>$<span className="price">6</span><span className="h6 text-muted ml-2">/ per month</span></h1>
          </div>
          <div className="card-body mt-4 pt-3">
            <ul className="list-unstyled mb-4">
              <li className="py-2">Up to 5 users</li>
              <li className="py-2">Basic support on Github</li>
              <li className="py-2">Monthly updates</li>
              <li className="py-2">Free cancelation</li>
            </ul>
            <button type="button" className="btn btn-primary2 text-uppercase">Order Now</button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
      <div className=" cardcard text-center mt-0 pt-0 " >
          <span className="h6 w-60 mx-auto px-3 pt-1 py-3 rounded-bottom bgprimary text-white shadow-sm">Business</span>
          <div className="card-body mt-4 pt-4">
            <h1 className="h1 textprimary mb-0" data-pricing-value={45}>$<span className="price">9</span><span className="h6 text-muted ml-2">/ per month</span></h1>
          </div>
          <div className="card-body mt-4 pt-3">
            <ul className="list-unstyled mb-4">
              <li className="py-2">Up to 5 users</li>
              <li className="py-2">Basic support on Github</li>
              <li className="py-2">Monthly updates</li>
              <li className="py-2">Free cancelation</li>
            </ul>
            <button type="button" className="btn btn-outline-secondary text-uppercase">Order now</button>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
      <div className=" cardcard text-center mt-0 pt-0 " >
          <span className="h6 w-60 mx-auto px-4 py-3 pt-1 rounded-bottom bgprimary text-white shadow-sm">Enterprise</span>
          <div className="card-body mt-4 pt-4">
            <h1 className="h1 textprimary mb-0" data-pricing-value={60}>$<span className="price">12</span><span className="h6 text-muted ml-2">/ per month</span></h1>
          </div>
          <div className="card-body mt-4 pt-3">
            <ul className="list-unstyled mb-4">
              <li className="py-2">Up to 5 users</li>
              <li className="py-2">Basic support on Github</li>
              <li className="py-2">Monthly updates</li>
              <li className="py-2">Free cancelation</li>
            </ul>
            <button type="button" className="btn btn-outline-secondary text-uppercase">Order now</button>
          </div>
        </div>
      </div>
    </div>{/* .row end */}
  </div>
</div>

  );
}



export default Features;
