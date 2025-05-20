import brandlogo1 from "../../../assets/img/home2/company-logo-01.png";
import brandlogo2 from "../../../assets/img/home2/company-logo-02.png";
import brandlogo3 from "../../../assets/img/home2/company-logo-03.png";
import brandlogo4 from "../../../assets/img/home2/company-logo-04.png";
import brandlogo5 from "../../../assets/img/home2/company-logo-05.png";
import brandlogo6 from "../../../assets/img/home2/company-logo-06.png";
import brandlogo7 from "../../../assets/img/home2/company-logo-07.png";
import "../../../assets/css/style.css";


const BrandsList = () => {



  return (
    <>
      <div
        className="logo-section mb-110 wow animate fadeInUp"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <div className="container-fluid">
          <div className="logo-wrap">
            <div className="logo-title">
              <h6>We Worked With Global Largest Brand</h6>
            </div>


            <div className="logos">
              <div className="logos-slide">
                <img src={brandlogo1} />
                <img src={brandlogo2} />
                <img src={brandlogo3} />
                <img src={brandlogo4} />
                <img src={brandlogo5} />
                <img src={brandlogo6} />
                <img src={brandlogo7} />

              </div>

              <div className="logos-slide">
                <img src={brandlogo1} />
                <img src={brandlogo2} />
                <img src={brandlogo3} />
                <img src={brandlogo4} />
                <img src={brandlogo5} />
                <img src={brandlogo6} />
                <img src={brandlogo7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsList;
