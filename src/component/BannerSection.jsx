import { Link } from "react-router-dom";
import img from "../assets/img/innerpage/breadcrumb-bg1.png";
import { ReactComponent as ArrowDown } from "../assets/svgs/arrowDown.svg";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";

function BannerSection({ name, desc, id }) {
  return (
    <div
      className="breadcrumb-section"
      style={{
        backgroundImage: `url(${img}), linear-gradient(180deg, #121212 0%, #121212 100%)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-wrapper">
              <div className="banner-content">
                <ul className="breadcrumb-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>{name}</li>
                </ul>
                <h1>{desc}</h1>
              </div>
              <div className="scroll-down-btn">
                <HashLink smooth to={`#${id}`}>
                  <ArrowDown />
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;

BannerSection.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  id: PropTypes.string,
};
