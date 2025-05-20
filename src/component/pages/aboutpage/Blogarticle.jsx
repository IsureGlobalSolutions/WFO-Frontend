import React from 'react'
import '../../../assets/css/style.css';
import { ReactComponent as Circle } from '../../../assets/svgs/zigzagcircle.svg';
import img1 from '../../../assets/img/home5/blog-img-01.jpg';
import img2 from '../../../assets/img/home5/blog-img-02.jpg';
import img3 from '../../../assets/img/home5/blog-img-03.jpg';
import { ReactComponent as Redstar } from '../../../assets/svgs/redstar.svg'



const Blogarticle = () => {
  return (
    <div className="home5-blog-section mb-120">
      <div className="container">
        <div className="row g-lg-4 gy-5 mb-70 justify-content-center">
          <div className="col-xl-9 col-md-8 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="section-title5">
              <span className="sub-title5 two">
                <Redstar />
                Blog &amp; Article
                <Redstar />
              </span>
              <h2>Tech Tips and Trends<span> Article Unveiled.</span></h2>
              <p>Feel free adapt this based on the specific managed services, features, and unique selling points your IT service company provides.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-4 d-flex justify-content-md-end align-items-end">
            <div className="star-btn btn_wrapper">
              <a href="blog-details.html">
                <div className="bg">
                  <Circle />
                </div>
                <div className="details-button">
                  View All Blog
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="row g-4 gy-5">
          <div className="col-lg-4 col-md-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="blog-card style-2 two">
              <div className="blog-card-img-wrap">
                <a href="blog-details.html" className="card-img">
                  <img src={img1} alt />
                </a>
                <a href="blog-grid.html" className="date">
                  <span><strong>15</strong> January</span>
                </a>
              </div>
              <div className="card-content">
                <div className="blog-meta">
                  <ul className="category">
                    <li><a href="blog-grid.html">Development</a></li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (20)</span>
                  </div>
                </div>
                <h4><a href="blog-details.html">Decoding the Cloud A Deep Dive into SaaS Trends.</a></h4>
                <a href="blog-details.html" className="read-more-btn">Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="blog-card style-2 two w-85">
              <div className="blog-card-img-wrap">
                <a href="blog-details.html" className="card-img">
                  <img src={img2} alt />
                </a>
                <a href="blog-grid.html" className="date">
                  <span><strong>20</strong> April</span>
                </a>
              </div>
              <div className="card-content">
                <div className="blog-meta">
                  <ul className="category">
                    <li><a href="blog-grid.html">Cyber Security</a></li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (22)</span>
                  </div>
                </div>
                <h4><a href="blog-details.html">Mastering Efiecy Tips and Tricks with our Zenfy.</a></h4>
                <a href="blog-details.html" className="read-more-btn">Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="blog-card style-2 two">
              <div className="blog-card-img-wrap">
                <a href="blog-details.html" className="card-img">
                  <img src={img3} alt />
                </a>
                <a href="blog-grid.html" className="date">
                  <span><strong>25</strong> April</span>
                </a>
              </div>
              <div className="card-content">
                <div className="blog-meta">
                  <ul className="category">
                    <li><a href="blog-grid.html">Consulting</a></li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (30)</span>
                  </div>
                </div>
                <h4><a href="blog-details.html">From Ideas How Xtore Transforms Workflows.</a></h4>
                <a href="blog-details.html" className="read-more-btn">Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blogarticle