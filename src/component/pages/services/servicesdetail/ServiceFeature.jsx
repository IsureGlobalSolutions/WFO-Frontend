import { ReactComponent as RedStar } from '../../../../assets/svgs/redstar.svg'
import { ReactComponent as ServicesFeature } from '../../../../assets/svgs/servicesfeature.svg'
const ServiceFeature = () => {
    const features = [
        {
            icon: <ServicesFeature />,
            title: 'Technical Implementation',
            desc: 'Seamless integration of cutting-edge solutions. Our technical implementation ensures robust systems, and optimal performance in every detail.'
        },
        {
            icon: <ServicesFeature />,
            title: 'IT Helpdesk Support',
            desc: 'Responsive IT helpdesk support ensuring seamless operations, resolving issues promptly, and maximizing user productivity with expertise.'
        },
        {
            icon: <ServicesFeature />,
            title: 'Managed IT Services',
            desc: 'Efficient, proactive, and secure IT solutions tailored to optimize your business operations with our managed IT services.'
        },
        {
            icon: <ServicesFeature />,
            title: 'IT Consulting',
            desc: 'Strategic IT Consulting tailored solutions to optimize performance, enhance security, and drive innovation for business success.'
        },
        {
            icon: <ServicesFeature />,
            title: 'Network Support',
            desc: 'Reliable network support ensuring seamless connectivity and optimizing performance for uninterrupted business operations'
        },

    ]
    return (
        <>
            <div className="service-details-feature-section mb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title5 mb-70 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <span className="sub-title5 two">
                                    <RedStar />
                                    Service Features
                                    <RedStar />
                                </span>
                                <h2>Edge tools Drive That <span> performance.</span></h2>
                                <p>Feel free adapt this based on the specific managed services, features, and unique selling points your IT service company provides.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="service-feature-list">
                                {features.map((item, key) => {
                                    return (
                                        <>
                                            <li className="single-feature wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" key={key}>
                                                <div className="icon">
                                                    {item.icon}
                                                </div>
                                                <div className="content">
                                                    <h5>{item.title}</h5>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </li>
                                        </>

                                    )
                                })}


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceFeature