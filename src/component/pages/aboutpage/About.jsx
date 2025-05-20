import Expertise from "./Expertise";
import Partnership from "./Partnership";
import Awardtime from "./Awardtime";
import Creativetime from "./Creativetime";
import Blogarticle from "./Blogarticle";
import ContactSection from "../landingScreens/ContactSection";
import WorkingServices from "../services/servicesdetail/WorkingServices";
import BannerSection from "../../../component/BannerSection";
import Workingprocess from "./Workingprocess";

const About = () => {
  return (
    <>
      <BannerSection
        name="About Us"
        desc="We are a IT service Company working with talents on delivering unique ideas."
        id="about-section"
      />

      <Expertise />
      <Partnership />
      <WorkingServices />
      <Workingprocess />
      <Awardtime />
      <Creativetime />
      <Blogarticle />
      <ContactSection />
    </>
  );
};

export default About;
