import BreadCrumb from "@/components/Common/BreadCrumb";
import HeaderThree from "@/components/Header/HeaderThree";
import VimixLayout from "@/components/Layout/VimixLayout";
import PartnerScrolling from "@/components/Partners/PartnerScrolling";
import ServiceOne from "@/components/Services/ServiceOne";
import ServiceSliderTwo from "@/components/Services/ServiceSliderTwo";
import SkillOne from "@/components/Skill/SkillOne";
import TeamOne from "@/components/Teams/TeamOne";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import React from "react";

export default function Service() {
  return (
    <VimixLayout>
      <HeaderThree />
      <BreadCrumb
        pageTitle="Our Services"
        activePage="Services"
        breadCrumbBg="assets/images/breadcrumb/service.webp"
      />
      <ServiceOne />
      <SkillOne />
      <PartnerScrolling />
      <ServiceSliderTwo />
      <WhatWeDo />
      <TeamOne padding="pb_150" />
    </VimixLayout>
  );
}
