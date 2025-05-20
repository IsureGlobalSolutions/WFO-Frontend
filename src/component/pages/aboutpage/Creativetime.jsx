import React from 'react'
import '../../../assets/css/style.css';
import { ReactComponent as Dot } from '../../../assets/svgs/dot.svg';
import { ReactComponent as Circle } from '../../../assets/svgs/zigzagcircle.svg';
import Cassion from '../../../assets/img/home5/team-01.jpg';
import Jacob from '../../../assets/img/home5/team-02.jpg'
import Charlotte from '../../../assets/img/home5/team-03.jpg'
import Sofia from '../../../assets/img/home5/team-04.jpg'
import Maverick from '../../../assets/img/home5/team-05.jpg'
import Violet from '../../../assets/img/home5/team-06.jpg'

const Creativetime = () => {
  return (
    <div className="home5-team-section mb-120">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-5 col-xl-4 d-flex flex-column gap-4 justify-content-between">
            <div className="section-title5 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <span className="sub-title5 two">
                <Dot />
                Our Creative Team
                <Dot />
              </span>
              <h2>Get to Know Creative <span> Minds At Zenfy.</span></h2>
              <p>Feel free adapt this based on the specific managed services, features, and unique selling points your IT service company provides.</p>
            </div>
            <div className="star-btn mb-50 btn_wrapper">
              <a href="#">
                <div className="bg">
                  <Circle />
                </div>
                <div className="details-button">
                  Join Our Team
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-8">
            <div className="row g-4">
              <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="team-card2">
                  <div className="team-img">
                    <img src={Cassion} alt />
                    <ul className="social-area">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                    </ul>
                  </div>
                  <div className="team-content text-center">
                    <h4>Cassian Coleson</h4>
                    <span>Founder at, Zenfy</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div className="team-card2">
                  <div className="team-img">
                    <img src={Jacob} alt />
                    <ul className="social-area">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                    </ul>
                  </div>
                  <div className="team-content text-center">
                    <h4>Jacob Logan</h4>
                    <span>Web Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="team-card2">
                  <div className="team-img">
                    <img src={Charlotte} alt />
                    <ul className="social-area">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                    </ul>
                  </div>
                  <div className="team-content text-center">
                    <h4>Charlotte Amelia</h4>
                    <span>Software Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                <div className="team-card2">
                  <div className="team-img">
                    <img src={Sofia} alt />
                    <ul className="social-area">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                    </ul>
                  </div>
                  <div className="team-content text-center">
                    <h4>Sofia Scarlett</h4>
                    <span>Graphic designer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="team-card2">
                  <div className="team-img">
                    <img src={Maverick} alt />
                    <ul className="social-area">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                    </ul>
                  </div>
                  <div className="team-content text-center">
                    <h4>Maverick Dylan</h4>
                    <span>Digital Marketer</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div className="team-card2">
                  <div className="team-img">
                    <img src={Violet} alt />
                    <ul className="social-area">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                      <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                      <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                    </ul>
                  </div>
                  <div className="team-content text-center">
                    <h4>Violet Penelope</h4>
                    <span>HR, Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Creativetime