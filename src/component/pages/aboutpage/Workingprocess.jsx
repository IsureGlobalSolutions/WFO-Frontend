import React, { useState } from 'react';
import '../../../assets/css/style.css';
import { ReactComponent as Staric } from '../../../assets/svgs/staricStar.svg';
import Discover from '../../../assets/img/home5/why-choose.jpg'
import SingleCountdown from './SingleCountdown';
const Workingprocess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <div className="home5-why-choose-section mb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-12 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="section-title5 two">
                <span className="sub-title5 two">
                  <Staric />
                  Discover the Advantage
                  <Staric />
                </span>
                <h2>We are a IT service Company working with talents <span>on delivering unique ideas.</span></h2>
                <p>Where innovation meets passion in a journey that started with a simple idea and a shared dora Founded in recent year we embarked on a mission told bring the new innovation and introduct the technology. From humble beginnings to our current aspirations.</p>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-5 col-md-8 wow animate fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="why-choose-img">
                <img src={Discover} alt />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="why-choose-content">
                <p>Where innovation meets passion in a journey that started with a simple idea and a shared dora Founded in recent year we embarked on a mission told bring the new innovation and introduct the technology. From humble beginnings to our current aspirations.</p>
                <div className="about-coundown-area">
                  <div className="row g-0">
                    <div className="col-md-6 wow animate fadeInUp"
                      onMouseEnter={() => setHoveredIndex(1)}
                      onMouseLeave={() => setHoveredIndex(null)}>
                      <SingleCountdown initialValue={1} targetValue={130} label="Project Completed" startCounting={hoveredIndex === 1} />
                    </div>
                    <div className="col-md-6 wow animate fadeInUp"
                      onMouseEnter={() => setHoveredIndex(2)}
                      onMouseLeave={() => setHoveredIndex(null)}>
                      <SingleCountdown initialValue={2} targetValue={70} label="Awesome clients" startCounting={hoveredIndex === 2} />
                    </div>
                    <div className="col-md-6 wow animate fadeInUp"
                      onMouseEnter={() => setHoveredIndex(3)}
                      onMouseLeave={() => setHoveredIndex(null)}>
                      <SingleCountdown initialValue={3} targetValue={80} label="Years of Experience" startCounting={hoveredIndex === 3} />
                    </div>
                    <div className="col-md-6 wow animate fadeInUp"
                      onMouseEnter={() => setHoveredIndex(4)}
                      onMouseLeave={() => setHoveredIndex(null)}>
                      <SingleCountdown initialValue={4} targetValue={90} label="Awards Winning" startCounting={hoveredIndex === 4} />
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

export default Workingprocess