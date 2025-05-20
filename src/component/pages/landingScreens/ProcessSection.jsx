import React from 'react'
import { ReactComponent as ProgressIcon } from '../../../assets/svgs/progress.svg';
import { ReactComponent as RecurringIcon } from '../../../assets/svgs/recurring.svg';
import { ReactComponent as PermissionIcon } from '../../../assets/svgs/permission.svg';
import { ReactComponent as CustomizationIcon } from '../../../assets/svgs/customization.svg';


const ProcessSection = () => {
    return (
        <>
            <div className="home3-process-section mb-110">
                <div className="container">
                    <div className="row justify-content-center mb-60">
                        <div className="col-lg-8">
                            <div
                                className="section-title text-center wow animate fadeInDown"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                    >
                                        <g>
                                            <circle cx="5" cy="5" r="5" />
                                        </g>
                                    </svg>
                                    Task Manager Feature
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                    >
                                        <g>
                                            <circle cx="5" cy="5" r="5" />
                                        </g>
                                    </svg>
                                </span>
                                <h2>Propel Your Productivity</h2>
                                <p>
                                    Welcome to HRWHIZZ, where digital innovation meets strategic
                                    excellence. As a dynamic force in the realm of digital
                                    marketing, we are dedicated to propelling businesses into the
                                    spotlight of online success.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInUp"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="process-card">
                                <div className="process-card-top">
                                    <div className="icon">
                                        <ProgressIcon />
                                    </div>
                                    <div className="number">
                                        <span>01</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>Progress Tracking</h4>
                                    <p>
                                        Welcome to HRWHIZZ, where’r digital agi innovation meets
                                        strategic expensivt as a dynamic force in the.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInUp"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="process-card two">
                                <div className="process-card-top">
                                    <div className="icon">
                                        <RecurringIcon />
                                    </div>
                                    <div className="number">
                                        <span>02</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>Recurring Tasks</h4>
                                    <p>
                                        Welcome to HRWHIZZ, where’r digital agi innovation meets
                                        strategic expensivt as a dynamic force in the.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInUp"
                            data-wow-delay="600ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="process-card three">
                                <div className="process-card-top">
                                    <div className="icon">
                                        <PermissionIcon />
                                    </div>
                                    <div className="number">
                                        <span>03</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>User Permissions</h4>
                                    <p>
                                        Welcome to HRWHIZZ, where’r digital agi innovation meets
                                        strategic expensivt as a dynamic force in the.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInUp"
                            data-wow-delay="800ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="process-card four">
                                <div className="process-card-top">
                                    <div className="icon">
                                        <CustomizationIcon />
                                    </div>
                                    <div className="number">
                                        <span>04</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4>Customization</h4>
                                    <p>
                                        Welcome to HRWHIZZ, where’r digital agi innovation meets
                                        strategic expensivt as a dynamic force in the.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProcessSection