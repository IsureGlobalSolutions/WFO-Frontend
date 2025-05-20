import React, { useState } from 'react';
import '../../../assets/css/style.css';
import { ReactComponent as Dot } from '../../../assets/svgs/dot.svg';
import { ReactComponent as Star } from '../../../assets/svgs/star.svg';
import img4 from '../../../assets/img/home4/award-img4.jpg'
import img3 from '../../../assets/img/home4/award-img3.jpg'
import img2 from '../../../assets/img/home4/award-img2.jpg'
import img1 from '../../../assets/img/home4/award-img1.jpg'




const Awardtime = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Function to update mouse position
  const updateMousePosition = (e) => {
    console.log('Mouse moved:', e.clientX, e.clientY);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setMousePosition(null); // Set mouse position to null when mouse leaves
  };

  const calculateImagePosition = (cardRect) => {
    if (!mousePosition || !cardRect) return { x: 0, y: 0 };

    // Calculate the distance between the mouse position and the center of the card
    const deltaX = mousePosition.x - (cardRect.left + cardRect.width / 5);
    const deltaY = mousePosition.y - (cardRect.top + cardRect.height / 5);

    // Limit the distance to 10px
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 10);

    // Calculate the position of the image based on the limited distance
    const posX = (deltaX / distance) + 200;
    const posY = (deltaY / distance) - 20;

    return { x: posX, y: posY };
  };

  const updateMousePositionAndCalculateImagePosition = (e) => {
    updateMousePosition(e);
    const cardRect = e.currentTarget.getBoundingClientRect();
    const imagePosition = calculateImagePosition(cardRect);
    setMousePosition(imagePosition);
  };

  const imgStyle = {
    transform: 'translate(126.516px, 67.9844px) rotate(12deg)', // Apply the transformation
  };

  return (
    <div className="home4-award-section mb-120">
      <div className="container-fluid">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-5 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="section-title-wrap">
              <div className="section-title3 mb-40">
                <span>
                  <Dot />
                  Our Award Time
                </span>
                <h2>Celebrating Zenfy's <span>Award-Winning </span>Excellence.</h2>
              </div>
              <a href="about.html" className="details-button">
                About Us More
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </a>
              <div className="vector">
                <Star />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="sevices-wrap2">
              <div className="single-services wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms"
                onMouseLeave={handleMouseLeave}
                onMouseMove={updateMousePositionAndCalculateImagePosition}
              >
                <div className="content">
                  <span>2024</span>
                  <h5>Innovation Ignition Award</h5>
                  <p>Site Of The Day</p>
                </div>
                <a className="explore-btn" href="about.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795L14.5835 11.8086H16L16 0L4.1914 0V1.41649L13.582 1.41649Z" />
                  </svg>
                </a>
                <div className="services-img"
                  style={{
                    transform: `translate(${mousePosition ? mousePosition.x : 0}px, ${mousePosition ? mousePosition.y : 0}px) rotate(2deg)`,
                    visibility: mousePosition ? 'visible' : 'hidden',
                  }}
                >
                  <img src={img1} alt="Your Image" />
                </div>
              </div>
              <div className="single-services wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms"
                onMouseLeave={handleMouseLeave}
                onMouseMove={updateMousePositionAndCalculateImagePosition}

              >
                <div className="content">
                  <span>2024</span>
                  <h5>CSS Design Award</h5>
                  <p>Site Of The Month</p>
                </div>
                <a className="explore-btn" href="about.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795L14.5835 11.8086H16L16 0L4.1914 0V1.41649L13.582 1.41649Z" />
                  </svg>
                </a>
                <div
                  className="services-img"
                  style={{
                    transform: `translate(${mousePosition ? mousePosition.x : 0}px, ${mousePosition ? mousePosition.y : 0}px) rotate(2deg)`,
                    visibility: mousePosition ? 'visible' : 'hidden',
                  }}
                >
                  <img src={img2} alt="Your Image" />
                </div>
              </div>
              <div className="single-services wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms" onMouseLeave={handleMouseLeave}
                onMouseMove={updateMousePositionAndCalculateImagePosition}>
                <div className="content">
                  <span>2024</span>
                  <h5>Masterpiece Maker</h5>
                  <p>Awards Jury 2024</p>
                </div>
                <a className="explore-btn" href="about.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795L14.5835 11.8086H16L16 0L4.1914 0V1.41649L13.582 1.41649Z" />
                  </svg>
                </a>
                <div
                  className="services-img"
                  style={{
                    transform: `translate(${mousePosition ? mousePosition.x : 0}px, ${mousePosition ? mousePosition.y : 0}px) rotate(2deg)`,
                    visibility: mousePosition ? 'visible' : 'hidden',
                  }}
                >
                  <img src={img3} alt="Your Image" />
                </div>
              </div>
              <div className="single-services wow animate fadeInDown"
                data-wow-delay="800ms"
                data-wow-duration="1500ms"
                onMouseLeave={handleMouseLeave}
                onMouseMove={updateMousePositionAndCalculateImagePosition}
              >
                <div className="content">
                  <span>2024</span>
                  <h5>Alchemy Achievement</h5>
                  <p>Site Of The Day</p>
                </div>
                <a className="explore-btn" href="about.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.582 1.41649L0 14.9978L1.00217 16L14.5835 2.41795L14.5835 11.8086H16L16 0L4.1914 0V1.41649L13.582 1.41649Z" />
                  </svg>
                </a>
                <div className="services-img"
                  style={{
                    transform: `translate(${mousePosition ? mousePosition.x : 0}px, ${mousePosition ? mousePosition.y : 0}px) rotate(2deg)`,
                    visibility: mousePosition ? 'visible' : 'hidden',

                  }}
                >
                  <img src={img4} alt="Your Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Awardtime