import { ReactComponent as Dot } from "../../../assets/svgs/dot.svg";
import { ReactComponent as LinkArrow } from "../../../assets/svgs/linkArrow.svg";
import blogImg1 from "../../../assets/img/home3/blog-img1.jpg";
import blogImg2 from "../../../assets/img/home3/blog-img2.jpg";
import blogImg3 from "../../../assets/img/home3/blog-img3.jpg";

function BlogSection() {
  return (
    <div className="home3-blog-section mb-110">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8">
            <div
              className="section-title text-center wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <span>
                <Dot />
                Task Manager Feature
                <Dot />
              </span>
              <h2>Our Article Must Be Read</h2>
              <p>
                Welcome to HRWHIZZ, where digital innovation meets strategic
                excellence. As a dynamic force in the realm of digital
                marketing, we are dedicated to propelling businesses into the
                spotlight of online success.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 col-md-6 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="blog-card style-2">
              <div className="blog-card-img-wrap">
                <a href="blog-details.html" className="card-img">
                  <img src={blogImg1} alt="Logo" />
                </a>
                <a href="blog-grid.html" className="date">
                  <span>
                    <strong>15</strong> January
                  </span>
                </a>
              </div>
              <div className="card-content">
                <div className="blog-meta">
                  <ul className="category">
                    <li>
                      <a href="blog-grid.html">Development</a>
                    </li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (20)</span>
                  </div>
                </div>
                <h4>
                  <a href="blog-details.html">
                    Decoding the Cloud A Deep Dive into SaaS Trends.
                  </a>
                </h4>
                <a href="blog-details.html" className="read-more-btn">
                  Read More
                  <LinkArrow />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="blog-card style-2">
              <div className="blog-card-img-wrap">
                <a href="blog-details.html" className="card-img">
                  <img src={blogImg2} alt="Logo" />
                </a>
                <a href="blog-grid.html" className="date">
                  <span>
                    <strong>20</strong> April
                  </span>
                </a>
              </div>
              <div className="card-content">
                <div className="blog-meta">
                  <ul className="category">
                    <li>
                      <a href="blog-grid.html">Cyber Security</a>
                    </li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (10)</span>
                  </div>
                </div>
                <h4>
                  <a href="blog-details.html">
                    Mastering Efiecy Tips and Tricks with our HRWHIZZ.
                  </a>
                </h4>
                <a href="blog-details.html" className="read-more-btn">
                  Read More
                  <LinkArrow />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 wow animate fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="blog-card style-2">
              <div className="blog-card-img-wrap">
                <a href="blog-details.html" className="card-img">
                  <img src={blogImg3} alt="Logo" />
                </a>
                <a href="blog-grid.html" className="date">
                  <span>
                    <strong>25</strong> April
                  </span>
                </a>
              </div>
              <div className="card-content">
                <div className="blog-meta">
                  <ul className="category">
                    <li>
                      <a href="blog-grid.html">Consulting</a>
                    </li>
                  </ul>
                  <div className="blog-comment">
                    <span>Comment (15)</span>
                  </div>
                </div>
                <h4>
                  <a href="blog-details.html">
                    From Ideas How Xtore Transforms Workflows.
                  </a>
                </h4>
                <a href="blog-details.html" className="read-more-btn">
                  Read More
                  <LinkArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
