import AboutTwo from "@/components/About/AboutTwo";
import CategoriesScrolling from "@/components/Categories/CategoriesScrolling";
import CtaOne from "@/components/Cta/CtaOne";
import FaqOne from "@/components/Faq/FaqOne";
import HeaderThree from "@/components/Header/HeaderThree";
import HeroThree from "@/components/Hero/HeroThree";
import LatestBlogOne from "@/components/LatestBlog/LatestBlogOne";
import VimixLayout from "@/components/Layout/VimixLayout";
import PartnerScrolling from "@/components/Partners/PartnerScrolling";
import FullWidthPortfolio from "@/components/Portfolios/FullWidthPortfolio";
import PriceOne from "@/components/Price/PriceOne";
import ServiceOne from "@/components/Services/ServiceOne";
import ServiceSlider from "@/components/Services/ServiceSlider";
import ServiceSliderTwo from "@/components/Services/ServiceSliderTwo";
import SkillOne from "@/components/Skill/SkillOne";
import TeamOne from "@/components/Teams/TeamOne";
import TestimonialOne from "@/components/Testimonials/TestimonialOne";
import React from "react";

export default function HomeThree() {
  return (
    <VimixLayout>
      <HeaderThree />
      <HeroThree />
      <ServiceSliderTwo />
      <PartnerScrolling />
      <AboutTwo />
      <ServiceOne sectionTitle subHeading />
      <SkillOne />
      <TeamOne />
      <CtaOne />
      <FullWidthPortfolio />
      <PriceOne sectionTitle />
      <ServiceSlider margin />
      <FaqOne />
      <TestimonialOne defaultOne />
      <CategoriesScrolling />
      <LatestBlogOne spaceTop />
    </VimixLayout>
  );
}
