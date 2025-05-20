
import tool1 from '../../../../assets/img/innerpage/icon/figma-icon.svg'
import tool2 from '../../../../assets/img/innerpage/icon/vs-icon.svg'
import tool3 from '../../../../assets/img/innerpage/icon/git-icon.svg'
import tool4 from '../../../../assets/img/innerpage/icon/react-icon.svg'
import tool5 from '../../../../assets/img/innerpage/icon/php-icon.svg'
import tool6 from '../../../../assets/img/innerpage/icon/mysql-icon.svg'
import tool7 from '../../../../assets/img/innerpage/icon/gitlab-icon.svg'
import tool8 from '../../../../assets/img/innerpage/icon/aws-icon.svg';
import { ReactComponent as RedStar } from '../../../../assets/svgs/redstar.svg'
const OurTools = () => {
    const toollist = [
        {
            img: tool1,
            name: 'figma'
        },
        {
            img: tool2,
            name: 'Visual studio'
        },
        {
            img: tool3,
            name: 'git'
        },
        {
            img: tool4,
            name: 'react'
        },
        {
            img: tool5,
            name: 'php'
        },
        {
            img: tool6,
            name: 'mysql'
        },

        {
            img: tool7,
            name: 'gitlab'
        },
        {
            img: tool8,
            name: 'aws'
        },
    ]
    return (
        <>
            <div className="service-details-tools-section mb-120">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-12 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="section-title5">
                                <span className="sub-title5 two">
                                    <RedStar />
                                    Our Tools
                                    <RedStar />
                                </span>
                                <h2>Our Design Technology <span>Tools Stack.</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        {
                            toollist.map((item, i) => {
                                return (
                                    <>
                                        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" key={i}>
                                            <div className="tools-card">
                                                <div className="tools-icon">
                                                    <img src={item.img} />
                                                </div>
                                                <div className="tools-name">
                                                    <span>{item.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>
                </div>
            </div>

        </>
    )
}

export default OurTools