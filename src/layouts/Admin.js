import React, { Component } from "react";
import { useLocation, Route, Routes } from "react-router-dom";

import routes from "../routes.js";

import sidebarImage from "../assets/img1/sidebar-3.jpg";
// import Adminnavbar from "../component/Navbars/AdminNavbar";
import Footer from "../component/landingpage/Footer.jsx";
import Newsidebar from "../component/newsidebar/Sidebar/Newsidebar";
import Adminnavbar from "../component/Navbars/Adminnavbar";
import FixedPlugin from "../component/FixedPlugin/FixedPlugin";

function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            element={<prop.component />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <>
      <div className="wrapper">
        {/* <Newsidebar color={color} image={hasImage ? image : ""} routes={routes} /> */}
        <div className="main-panel" ref={mainPanel}>
          <Adminnavbar />
          <Routes>
            {getRoutes(routes)}
          </Routes>
          <Footer />
        </div>
      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />
    </>
  );
}

export default Admin;
