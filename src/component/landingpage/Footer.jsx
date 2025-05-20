import React from "react";
import bg from "../../assets/img/bg/footer-bg.jpeg";
import headset from "../../assets/img/icons/headset.svg";
import logoF from "../../assets/img/logo/logo-f.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
<div className="section footer" style={{padding:"70px"}}>
  <div className="container">
    <div className="row g-3 mb-4">
      <div className="col-lg-4 col-md-6 col-12" style={{color:'black'}}>
        <h3 className="mb-1 " style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 , fontSize:"23px" , color:"#181818" }}>HRWHIZZ</h3>
        <p className="mt-4" >Start building your creative website with our awesome template Massive.</p>
        <ul className="mt-3 fs-6 lh-lg">
          <li><span>Address:</span> 555 Wall Street, NY, USA</li>
          <li><span>Email:</span> example@ttm.com</li>
          <li><span>Call:</span> 123-456-1818</li>
        </ul>
      </div>
      <div className="col-lg-8 col-12">
        <div className="row g-3">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <h5 className="mb-4 " style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 , fontSize:"23px" , color:"#181818" }}>Company</h5>
            <ul className="lh-lg ms-4 ps-2" style={{ listStyleType: "disc", paddingLeft: "20px" , parddingLeft:'30px' , color:'black' }}>
              <li><span className="color-600" target="_blank" href="../../index.html">Dashboard</span></li>
              <li><span className="color-600" target="_blank" href="https://www.thememakker.com/about/">About Us</span></li>
              <li><span className="color-600" target="_blank" href="https://www.thememakker.com/services/">Services</span></li>
              <li><span className="color-600" target="_blank" href="https://www.thememakker.com/hire-us/">Hire us</span></li>
              <li><span className="color-600" target="_blank" href="https://www.thememakker.com/all-templates/">Templates</span></li>
              <li><span className="color-600" target="_blank" href="https://www.thememakker.com/licenses/">licenses</span></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" >
            <h5 className="mb-4 " style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 , fontSize:"23px" , color:"#181818" }}>Admin</h5>
            <ul className="lh-lg ms-4 ps-2" style={{ listStyleType: "disc", paddingLeft: "20px" , parddingLeft:'30px' , color:'black' }}>
              <li><span className="color-600" href="../../crypto/index.html">Cryptocurrency</span></li>
              <li><span className="color-600" href="../../fitness/index.html">Fitness Analytics</span></li>
              <li><span className="color-600" href="../../hospital/index.html">Hospital Management</span></li>
              <li><span className="color-600" href="../index.html">HR &amp; Project</span></li>
              <li><span className="color-600" href="../../restaurant/index.html">Restaurant &amp; Cafe</span></li>
              <li><span className="color-600" href="../../university/index.html">School / University</span></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 col-12" style={{color:"black"}}>
            <h5 className="mb-4 " style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 , fontSize:"23px" , color:"black" }}>Join Our Newsletter</h5>
            <p className="" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 300 , fontSize:"16px" , color:"#9399a1" }} >Subscribe to get the latest jobs posted, candidates...</p>
            <form>
              <div className="form-floating mb-1 mt-4">
                <input type="email" className="form-control rounded" placeholder="name@example.com" />
                <label>Enter email address</label>
              </div>
              <button type="button" className="btn btn-block btn-outline-primary4">Subscribe Now!</button>
            </form>
          </div>
        </div>
      </div>
    </div> {/* .row end */}
    <div className="row g-3 border-top pt-3" style={{color:'black'}}>
      <div className="col-lg-6 col-md-12 text-center text-lg-start">
        <span>© 2023 <span href="https://www.thememakker.com/" rel="nofollow" target="_blank">ThemeMakker</span>. All Rights Reserved.</span>
      </div>
      <div className="col-lg-6 col-md-12 text-center text-lg-end">
        <ul className="list-unstyled d-flex justify-content-center justify-content-lg-end mb-0">
          <li><span className="p-2 ms-2" href="#">Facebook</span></li>
          <li><span className="p-2 ms-2" href="#">Dribbble</span></li>
          <li><span className="p-2 ms-2" href="#">Twitter</span></li>
        </ul>
      </div>
    </div> {/* .row end */}
  </div>
</div>

  );
}

export default Footer;
