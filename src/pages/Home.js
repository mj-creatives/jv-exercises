import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/Hero.js";
import Features from "components/ThreeColSimple.js";
import TrendingCard from "components/TwoTrendingPreviewCardsWithImage.js";
import Testimonial from "components/TwoColumnWithImageAndProfilePictureReview.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <TrendingCard />
    <Testimonial textOnLeft={true}/>
  </AnimationRevealPage>
);
