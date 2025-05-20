import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../../style.css';
import Hero from "../../component/landingpage/Hero";
import WritingStep from "../../component/landingpage/WritingStep";
import Service from "../../component/landingpage/Service";
import Features from "../../component/landingpage/Features";
import Awards from "../../component/landingpage/Awards";
import Testimonials from "../../component/landingpage/Testimonials";
import Header from "../../component/plugins/Header";
import Footer from "../../component/plugins/Footer";
import LandingPage from "../../component/pages/landingScreens/LandingPage";
function Layout() {
  return (
    <div className="app-container">
      <div >
        <Header />
        {/* <Hero />
        <WritingStep />
        <Service />
        <Features />
        <Awards />
        <Testimonials /> */}
        <LandingPage />
        <Footer />
      </div>
      {/* <Hero/> */}
      {/* <Hero />
      <WritingStep className="py-5" />
      <Service />
      <Features />
      <Awards />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer /> */}
    </div>




  );
}

export default Layout;
