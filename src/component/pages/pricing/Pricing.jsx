import ContactSection from "../landingScreens/ContactSection";
import BannerSection from "../../BannerSection";
import PricingSect from "./PricingSect";
import WorkSection from "./WorkSection";

function Pricing() {
  return (
    <div>
      <BannerSection
        name="Pricing Plan"
        desc="Our Flexible Pricing Plan."
        id="pricing-plan-section"
      />
      <PricingSect />
      <WorkSection />
      <ContactSection />
    </div>
  );
}

export default Pricing;
