import BreadCrumb from "@/components/Common/BreadCrumb";
import CtaOne from "@/components/Cta/CtaOne";
import VimixLayout from "@/components/Layout/VimixLayout";
import PriceOne from "@/components/Price/PriceOne";
import SkillOne from "@/components/Skill/SkillOne";
import TeamOne from "@/components/Teams/TeamOne";
import React from "react";

export default function Pricing() {
  return (
    <VimixLayout>
      <BreadCrumb
        pageTitle="Pricing"
        activePage="Pricing"
        breadCrumbBg="assets/images/breadcrumb/about.webp"
      />
      <PriceOne />
      <SkillOne />
      <TeamOne />
      <CtaOne />
    </VimixLayout>
  );
}
