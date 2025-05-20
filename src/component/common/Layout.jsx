import React from "react";
import ProtoTypes from "prop-types";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="wrapper">{children}</main>
      <Footer />
    </>
  );
}
Layout.propTypes = {
  children: ProtoTypes.node,
};
export default Layout;
