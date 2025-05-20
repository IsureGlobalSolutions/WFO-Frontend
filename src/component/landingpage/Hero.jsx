// "use client";
import React, { useEffect, useMemo, useState } from "react";
import bg from "../../assets/img/hero/hero-bg-1.jpeg";
import dashboard from "../../assets/img/hero/dashboard-img.png";
import dashboardTwo from "../../assets/img/hero/dashboard-img-2.png";
import { Link } from "react-router-dom";
import dashbboredone from "../../assets/img/hero/dashboard-img-2.png";
import dashbbored from "../../assets/img/hero/dashboard-img.png";
import img1 from "../../assets/css/img/hrms/profile1.jpg";
import img2 from "../../assets/css/img/hrms/profile2.jpg";
import img3 from "../../assets/css/img/hrms/profile3.jpg";
import img4 from "../../assets/css/img/hrms/profile4.jpg";
import './landingpage.css'
import { AiFillYoutube } from "react-icons/ai";



function Hero() {
  const content = useMemo(
    () => ["Technical Writing", "Blog Writing", "AI Content"],
    []
  );
  const [contents, setContents] = useState("");
  const [num, setNum] = useState(0);
  const [jumping, setJumping] = useState(false);

  useEffect(() => {
    let timeOut = 100;
    if (content[num][contents.length] === " ") {
      timeOut = 0;
    } else if (content[num].length === contents.length) {
      timeOut = 3000;
      setJumping(true);
    } else {
      timeOut = 100;
      setJumping(false);
    }
    setTimeout(() => {
      if (content[num].length <= contents.length) {
        setContents("");
        if (content[num + 1]) {
          setNum(num + 1);
        } else {
          setNum(0);
        }
      } else {
        setContents(contents + content[num][contents.length]);
        if (contents.length + 1 === content[num].length) {
          setJumping(true);
        } else if (content[num][contents.length] !== " ") {
          setJumping(!jumping);
        }
      }
    }, timeOut);
  }, [contents, content, num, jumping]);
  return (
    // <section
    //   className="aai-hero-one position-relative"
    //   style={{
    //     background: `url(${bg}) no-repeat center center/cover`,
    //   }}
    // >
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-12 col-xl-7">
    //         <div className="aai-hero-one-content">
    //           <h1 className="aai-hero-one-title">
    //             High-Quality Way to Write your <br />
    //             <span className="gradient-text typing-animation">
    //               {contents}
    //               <span
    //                 style={{
    //                   opacity: 0,
    //                 }}
    //               ></span>
    //             </span>
    //             <span
    //               className={jumping ? "cursor" : ""}
    //               style={{ background: "transparent", color: "white" }}
    //             >
    //               |
    //             </span>
    //           </h1>
    //           <p className="aai-hero-one-desc">
    //             AI Copywriting is revolutionizing the way content is created. AI
    //             can create content for blogs, articles, websites, social media
    //             and more.
    //           </p>
    //           <div className="mt-5 d-flex flex-column flex-md-row aai-btns-group">
    //             <Link href="/prices" className="aai-btn btn-pill-solid">
    //               Get Started
    //             </Link>
    //             <Link href="/about" className="aai-gradient-outline-btn">
    //               Learn More
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-10 col-xl-5 mt-5 mt-lg-0">
    //         <div className="aai-hero-one-img">
    //           <img
    //             height={dashboard.height}
    //             width={dashboard.width}
    //             src={dashbbored}
    //             className="img-fluid aai-hero-img d-none d-xl-block"
    //             alt=""
    //           />
    //           <img
    //             height={dashboardTwo.height}
    //             width={dashboardTwo.width}
    //             src={dashbboredone}
    //             className="img-fluid aai-hero-img d-xl-none"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
   <div className="section hero-area mt-4 ms-0 ps-0 ">
  <div className="container mt-4 ps-0">
    <div className="row g-3 align-items-center " style={{marginTop:'40px'}}>
      <div className="col-xl-6 col-lg-5 co-12">
        <div className="row g-3">
          <div className="col-lg-6 col-md-6 col-6">
            <img className="img-fluid lift rounded-4 mb-3" src={img1} alt="#" />
            <img className="img-fluid lift rounded-4 mb-3" src={img2} alt="#" />
          </div>
          <div className="col-lg-6 col-md-6 col-6">
            <img className="img-fluid lift rounded-4 mt-lg-5 mb-3" src={img3} alt="#" />
            <img className="img-fluid lift rounded-4 mb-3" src={img4} alt="#" />
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-7 co-12 ">
        <div className="hero-text ps-lg-5 ps-3 pt-0">
          <h1 className="bgtext pt-0">Manage Your <span className="text-gradient " style={{color:"#00B4B7" , fontFamily: 'Roboto, sans-serif', fontWeight: 700 , }}>Project</span> From Your Team</h1>
          <p className="lead mb-4">Good planing will lead to bettar work.Palan work, Keep Projects on track, and manage teamwork easily with PlanDone</p>
          <button type="submit" className="btn px-4 py-3 lift btn-primary1 text-uppercase">Try for free</button>
          <a href="https://www.youtube.com/watch?v=9_PV-f87xPw" target="_blank" className="btn px-4 py-3 lift color-800 text-uppercase" title="#">
            <span ><AiFillYoutube style={{fontSize:'20px'}}/> </span>
          Watch How it Work</a>
        </div>
      </div>
    </div> {/* .row end */}
  </div>
</div>

  );
}

export default Hero;
