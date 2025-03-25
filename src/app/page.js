"use client";
import AboutOne from "@/components/About/AboutOne";
import CategoriesScrolling from "@/components/Categories/CategoriesScrolling";
import CtaOne from "@/components/Cta/CtaOne";
import HeaderOne from "@/components/Header/HeaderOne";
import HeroOne from "@/components/Hero/HeroOne";
import LatestBlogOne from "@/components/LatestBlog/LatestBlogOne";
import PartnerScrolling from "@/components/Partners/PartnerScrolling";
import ServiceOne from "@/components/Services/ServiceOne";
import TeamOne from "@/components/Teams/TeamOne";
import TestimonialOne from "@/components/Testimonials/TestimonialOne";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import WhyChoose from "@/components/WhyChooseUs/WhyChoose";
import PortfolioSlider from "@/components/Portfolios/PortfolioSlider";
import VimixLayout from "@/components/Layout/VimixLayout";
import PortfolioSliderTwo from "@/components/Portfolios/PortfolioSliderTwo";

export default function HomeOne() {
  return (
    <VimixLayout>
      <HeaderOne />
      <HeroOne />
   {/*    <PartnerScrolling /> */}
      <ServiceOne sectionTitle />
     {/*  <CategoriesScrolling /> */}
      <PortfolioSliderTwo />
      <CtaOne />
    </VimixLayout>
  );
}
