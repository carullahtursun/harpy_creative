import React from "react";
import BreadCrumb from "@/components/Common/BreadCrumb";
import InstagramSliderOne from "@/components/InstagramSlider/InstagramSliderOne";
import dynamic from "next/dynamic";
import VimixLayout from "@/components/Layout/VimixLayout";
import HeaderThree from "@/components/Header/HeaderThree";

const ServiceDetailsInfo = dynamic(
  () => import("@/components/Services/ServiceDetailsInfo"),
  { ssr: false }
);

export default function ServiceDetails() {
  return (
    <VimixLayout>
      <HeaderThree />
      <BreadCrumb
        pageTitle="Service Details"
        activePage="Service Details"
        breadCrumbBg="assets/images/breadcrumb/service_d.webp"
      />
      <ServiceDetailsInfo />
      <InstagramSliderOne />
    </VimixLayout>
  );
}
