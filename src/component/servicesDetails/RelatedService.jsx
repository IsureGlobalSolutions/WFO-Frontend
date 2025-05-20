import React from "react";
import cardImg4 from "@/assets/img/features/fi-4.svg";
import cardImg5 from "@/assets/img/features/fi-5.svg";
import cardImg6 from "@/assets/img/features/fi-6.svg";
import FeatureCard from "../cards/FeatureCard";

function RelatedService() {
  return (
    <section className="aai-features pt-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="aai-section-title mb-5">
              <h2 className="section-title">Related Services</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <FeatureCard
            img={cardImg4}
            title="Digital name generator"
            desc="Convert data noise intelligent for a quis lorem."
          />
          <FeatureCard
            img={cardImg5}
            title="Ad Targeting tips"
            desc="Generates suggestions for ad on targeting on ad."
          />
          <FeatureCard
            img={cardImg6}
            title="Content Rewriter"
            desc="Rewrites your text and say things different way."
          />
        </div>
      </div>
    </section>
  );
}

export default RelatedService;
