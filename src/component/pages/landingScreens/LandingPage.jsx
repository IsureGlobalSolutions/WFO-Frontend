import BannerSection from './BannerSection'
import ProcessSection from './ProcessSection'
import ProjectManagmentSection from './ProjectManagmentSection'
import BrandsList from './BrandsList'
import TestimonialSection from './TestimonialSection'
import FeatureSection from './FeatureSection'
import PricingSection from './PricingSection'
import NewsletterSection from './NewsletterSection'
import FaqSection from './FaqSection'
import ToolsSection from './ToolsSection'
import BlogSection from './BlogSection'
import ContactSection from './ContactSection'
import CountdownSection from './CountdownSection'

const LandingPage = () => {
    return (<>
       
        <BannerSection />
        <ProcessSection />
        <CountdownSection />
        <ProjectManagmentSection />
        {/* <BrandsList /> */}
        <TestimonialSection />
        <FeatureSection />
        <PricingSection />
        <NewsletterSection />
        <FaqSection />
        <ToolsSection />
        <BlogSection />
        <ContactSection />
       


    </>

    )
}

export default LandingPage