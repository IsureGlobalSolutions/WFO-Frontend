import { ReactComponent as ServicesIcon } from "../../../assets/svgs/serviceicons/servicesicon.svg";
import { ReactComponent as DevelopmentIcon } from "../../../assets/svgs/serviceicons/development.svg";
import { ReactComponent as SecurityIcon } from "../../../assets/svgs/serviceicons/security.svg";
import { ReactComponent as ECommerceIcon } from "../../../assets/svgs/serviceicons/e-commerce.svg";
import { ReactComponent as AnalyticsIcon } from "../../../assets/svgs/serviceicons/analytics.svg";
import { ReactComponent as CloudIcon } from "../../../assets/svgs/serviceicons/cloud.svg";
import { ReactComponent as SoftwareDevIcon } from "../../../assets/svgs/serviceicons/softwareDev.svg";
import { ReactComponent as UIDesignIcon } from "../../../assets/svgs/serviceicons/Uidesign.svg";
import { ReactComponent as GraphicDesignIcon } from "../../../assets/svgs/serviceicons/graphicDesign.svg";
import { ReactComponent as DetailarrowIcon } from "../../../assets/svgs/detailarrowicon.svg";
import ContactSection from "../landingScreens/ContactSection";
import BannerSection from "../../BannerSection";
import { Link } from "react-router-dom";

const ServiecesList = () => {
  const servicesList = [
    {
      title: "Web & App Development",
      icon: <DevelopmentIcon />,
      description:
        "Revolutionize your digital presence with our Web & App Development services—innovative solutions, user-centric experiences.",
    },
    {
      title: "Consulting Services",
      icon: <ServicesIcon />,
      description:
        "Strategic guidance for success: Elevate your business with our expert Consulting Services, tailored for growth and innovation..",
    },
    {
      title: "Cyber Security",
      icon: <SecurityIcon />,
      description:
        "Guard your digital fortress with our Cyber Security solutions—ensuring robust protection against evolving threats.",
    },
    {
      title: "E-commerce Solutions",
      icon: <ECommerceIcon />,
      description:
        "Revolutionize retail with our E-commerce Solutions: seamless, secure, and tailored for your business's success.",
    },
    {
      title: "Data Analytics",
      icon: <AnalyticsIcon />,
      description:
        "Empower decision-making with insightful Data Analytics—uncover valuable insights for strategic business advancements.",
    },
    {
      title: "Cloud Services",
      icon: <CloudIcon />,
      description:
        "Effortless data management with our Cloud Services—seamless, secure, and scalable solutions for modern businesses.",
    },
    {
      title: "Software Development",
      icon: <SoftwareDevIcon />,
      description:
        "Crafting innovative and scalable solutions through code and user-friendly software for diverse needs.",
    },
    {
      title: "UI/UX Design",
      icon: <UIDesignIcon />,
      description:
        "Providing seamless digital experiences through intuitive user interfaces and attentive user experience design.",
    },
    {
      title: "Graphic Design",
      icon: <GraphicDesignIcon />,
      description:
        "Visual storytelling through art and technology, crafting compelling designs that captivate, and elevate brand experiences.",
    },
  ];
  return (
    <>
      <BannerSection
        name="Solutions"
        desc="Services & Solutions."
        id="service-section"
      />

      <div
        className="service-card-section scroll-margin pt-120 mb-120"
        id="service-section"
      >
        <div className="container">
          <div className="row g-4">
            {servicesList.map((item, i) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 wow animate fadeInDown"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                    key={i}
                  >
                    <div className="service-card two">
                      <div className="content">
                        <h4>
                          <Link to="/service-detail">{item.title}</Link>
                        </h4>
                        {item.icon}
                        <p>{item.description}</p>
                      </div>
                      <Link to="/service-detail" className="explore-btn">
                        {" "}
                        EXPLORE MORE
                        <DetailarrowIcon />
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default ServiecesList;
