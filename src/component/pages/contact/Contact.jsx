import ContactSection from "../landingScreens/ContactSection";
import BannerSection from "../../BannerSection";
import LocationSection from "./LocationSection";

function Contact() {
  return (
    <div>
      <BannerSection
        name="Contact Us"
        desc="Let’s Connecting With Zenfy."
        id="contact"
      />

      <LocationSection />
      <ContactSection />
    </div>
  );
}

export default Contact;
