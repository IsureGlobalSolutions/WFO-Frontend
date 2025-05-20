import Link from "next/link";
import React from "react";

function AboutService() {
  return (
    <section className="aai-about-service">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h2 className="section-title">About this service</h2>
              <p className="section-desc mb-4">
                Once you know your audience, choose a topic that will resonate
                with them. Look for trending topics in your industry or address
                common questions or challenges your audience may be facing. Keep
                in mind that your topic should be both interesting and relevant
                to your audience. Writing blog content with Aao, make sure you
                have a clear understanding of who your audience is.
              </p>
              <p className="section-desc">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&lsquo;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&lsquo;t anything
                embarrassing hidden in the middle of text.
              </p>
              <div className="py-5">
                <div className="aai-about-service-cta">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-lg-6">
                      <div>
                        <h3 className="aai-about-service-title">
                          Get Ready Aai Service
                        </h3>
                        <p className="section-desc">
                          We&lsquo;ve done it carefully and simply. Combined
                          with the ingredients makes for beautiful landings.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                      <div className="d-flex justify-content-lg-end">
                        <Link href="/prices" className="aai-btn btn-pill-solid">
                          Purchase Now!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="section-desc mb-4">
                Once you know your audience, choose a topic that will resonate
                with them. Look for trending topics in your industry or address
                common questions or challenges your audience may be facing. Keep
                in mind that your topic should be both interesting and relevant
                to your audience. Writing blog content with Aao, make sure you
                have a clear understanding of who your audience is.
              </p>
              <p className="section-desc">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&lsquo;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&lsquo;t anything
                embarrassing hidden in the middle of text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutService;
