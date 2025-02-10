import React from "react";
import dynamic from "next/dynamic";
import CtaOne from "@/components/Cta/CtaOne";
import HeaderTwo from "@/components/Header/HeaderTwo";
import HeroTwo from "@/components/Hero/HeroTwo";
import InstagramSliderOne from "@/components/InstagramSlider/InstagramSliderOne";
import LatestBlogOne from "@/components/LatestBlog/LatestBlogOne";
import PartnerScrolling from "@/components/Partners/PartnerScrolling";
import PriceOne from "@/components/Price/PriceOne";
import ServiceSlider from "@/components/Services/ServiceSlider";
import ServiceTwo from "@/components/Services/ServiceTwo";
import TestimonialOne from "@/components/Testimonials/TestimonialOne";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import WhyChoose from "@/components/WhyChooseUs/WhyChoose";
import PortfolioSliderTwo from "@/components/Portfolios/PortfolioSliderTwo";
import VimixLayout from "@/components/Layout/VimixLayout";
const VideoOne = dynamic(() => import("@/components/Video/VideoOne"), {
  ssr: false,
});

export default function HomeTwo() {
  return (
    <VimixLayout>
      <HeaderTwo />
      <HeroTwo />
      <PartnerScrolling />
      <ServiceTwo />
      <ServiceSlider />
      <WhyChoose minusMargin paddingTop="pt_120" />
      <CtaOne />
      <PortfolioSliderTwo />
      <WhatWeDo />
      <PriceOne sectionTitle />
      <VideoOne />
      <TestimonialOne />
      <InstagramSliderOne />
      <LatestBlogOne spaceTop />
    </VimixLayout>
  );
}
