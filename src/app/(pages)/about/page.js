import React from "react";
import dynamic from "next/dynamic";
import AboutMain from "@/components/About/AboutMain";
import BreadCrumb from "@/components/Common/BreadCrumb";
import CtaOne from "@/components/Cta/CtaOne";
import PartnerScrolling from "@/components/Partners/PartnerScrolling";
import PriceOne from "@/components/Price/PriceOne";
import ServiceSliderTwo from "@/components/Services/ServiceSliderTwo";
const VideoOne = dynamic(() => import("@/components/Video/VideoOne"), {
  ssr: false,
});
import WhyChoose from "@/components/WhyChooseUs/WhyChoose";
import VimixLayout from "@/components/Layout/VimixLayout";

export const metadata = {
  title: "hakkında",
  description: "Bir sonraki uygulama oluşturarak oluşturuldu",
};

export default function About() {
  return (
    <VimixLayout>
      <BreadCrumb
        pageTitle="Hakkımızda"
        activePage="Hakkımızda"
        breadCrumbBg="assets/images/breadcrumb/about.webp"
      />
      <AboutMain />
      <PartnerScrolling />
      {/* <ServiceSliderTwo /> */}
    {/*   <VideoOne />
      <WhyChoose isSpacing={false} />
      <PriceOne />
      <CtaOne /> */}
    </VimixLayout>
  );
}
