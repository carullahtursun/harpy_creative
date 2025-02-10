import BreadCrumb from "@/components/Common/BreadCrumb";
import InstagramSliderOne from "@/components/InstagramSlider/InstagramSliderOne";
import VimixLayout from "@/components/Layout/VimixLayout";
import TestimonialCard from "@/components/Testimonials/TestimonialCard";
import React from "react";

import { testimonials } from "@/data/testimonial";

export default function Testimonial() {
  return (
    <VimixLayout>
      <BreadCrumb
        pageTitle="Testimonials"
        activePage="Testimonials"
        breadCrumbBg="assets/images/breadcrumb/testimonial.webp"
      />
      <div className="testimonials pt_150 pb_150">
        <div className="container">
          <div className="row row-gap-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
      <InstagramSliderOne />
    </VimixLayout>
  );
}
