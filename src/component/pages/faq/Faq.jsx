import ContactSection from "../landingScreens/ContactSection";
import BannerSection from "../../components/BannerSection.jsx";
import GeneralFaqSec from "./GeneralFaqSec";

function Faq() {
  return (
    <div>
      <BannerSection
        name="FAQ"
        desc="Frequently Asked Questions."
        id="faq-section"
      />
      <GeneralFaqSec />
      <ContactSection />

    </div>
  );
}

export default Faq;
