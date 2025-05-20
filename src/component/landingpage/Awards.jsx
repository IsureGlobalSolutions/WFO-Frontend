import React from "react";
import bg from "../../assets/img/bg/awards-bg.jpeg";
import trustpilot from "../../assets/img/brand/trustpilot.svg";
import hubspot from "../../assets/img/brand/hubspot.svg";
import capt from "../../assets/img/brand/capt.svg";
import trip from "../../assets/img/brand/trip.svg";
import fedex from "../../assets/img/brand/fedex.svg";
import { Link } from "react-router-dom";
import img1 from "../../assets/css/img/gallery/1.jpg"
import img2 from "../../assets/css/img/gallery/2.jpg"
import './landingpage.css'

function Awards() {
  return (
  <div className="section m-4 pt-4 " style={{paddingBottom:'40px'}}>
  <div className="container ">
    <div className="row g-3 row-deck  ms-0 ps-0">
      <div className="col-lg-12 mb-3">
        <div>
          <span style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 500 , fontSize:"25px" , color:"#000000" }}>Awesome Events</span>
          <p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300 , fontSize:"18px"  , color:"#9399a1!important" }}>It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
        </div>
      </div>
      <div className="col-xl-4 col-lg-12 ps-0 mt-4 pt-4 ">
        <div className="cardcard1  ">
          <ul className="list-unstyled list-group list-group-custom list-group-flush rounded-4 mb-1">
            <li className="list-group-item py-4">
              <div className="d-flex align-items-start">
                <div className="avatar lg rounded no-thumbnail flex-column chart-color1 text-light">
                  <div className="fw-bold ms-1">21</div> Aug
                </div>
                <div className="flex-fill ms-3">
                  <ul className="list-unstyled d-flex justify-content-between text-muted mb-2 small">
                    <li><i className="fa fa-user" /> BY ADMIN</li>
                    <li><i className="fa fa-folder-open-o" /> UI/UX</li>
                  </ul>
                  <span href="#" className="mb-0 fs-5 color-800">Contrary to popular belief, Lorem Ipsum is not simply</span>
                </div>
              </div>
            </li>
            <li className="list-group-item py-4">
              <div className="d-flex align-items-start">
                <div className="avatar lg rounded no-thumbnail flex-column chart-color2 text-light">
                  <div className="fw-bold ms-1">16</div> Aug
                </div>
                <div className="flex-fill ms-3">
                  <ul className="list-unstyled d-flex justify-content-between text-muted mb-2 small">
                    <li><i className="fa fa-user" /> BY ADMIN</li>
                    <li><i className="fa fa-folder-open-o" /> AngularJs</li>
                  </ul>
                  <span href="#" className="mb-0 fs-5 color-800">Latin professor at Hampden-Sydney College in Virginia</span>
                </div>
              </div>
            </li>
            <li className="list-group-item py-4">
              <div className="d-flex align-items-start">
                <div className="avatar lg rounded no-thumbnail flex-column chart-color3 text-light">
                  <div className="fw-bold ms-1">10</div> Aug
                </div>
                <div className="flex-fill ms-3">
                  <ul className="list-unstyled d-flex justify-content-between text-muted mb-2 small">
                    <li><i className="fa fa-user" /> BY ADMIN</li>
                    <li><i className="fa fa-folder-open-o" /> Marketing</li>
                  </ul>
                  <span href="#" className="mb-0 fs-5 color-800">Lorem Ipsum has been the industry's standard dummy</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mt-4 pt-4">
        <div className="cardcard1">
          <img src={img1} className="card-img-top" style={{borderTopRightRadius:'0.75rem' , borderTopLeftRadius:'0.75rem' }}  alt="..." />
          <div className="card-body mt-3 " style={{marginBottom:'10px'}}>
            <span className="text-muted small mt-2 ms-3 ">March 12 to March 16</span>
            <div className="ms-3" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300 , fontSize:"20px" , color:'black'  }}>Many desktop publishing packages and web page</div>
            <a href="#" className="btn btn-outline-primary2 mt-2 ms-3">Read more</a>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 mt-4 pt-4">
        <div className="cardcard1  ">
          <img src={img2} className="card-img-top " style={{borderTopRightRadius:'0.75rem' , borderTopLeftRadius:'0.75rem' }} alt="..." />
          <div className="card-body mt-3  " style={{marginBottom:'10px'}}>
            <span className="text-muted small mt-2 ms-3 ">March 12 to March 16</span>
            <div className="ms-3" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300 , fontSize:"20px" , color:'black'   }}>It was popularised in the 1960s with the release</div>
            <a href="#" className="btn btn-outline-primary2 mt-2 ms-3">Read more</a>
          </div>
        </div>
      </div>
    </div> {/* .row end */}
  </div>
</div>

  );
}

export default Awards;
