"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

import { serviceSliderTwoData as data } from "@/data/service";

export default function ServiceSliderTwo() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".slider_pagination__item",
      clickable: true,
    },
    navigation: {
      prevEl: ".slide_btn_prev",
      nextEl: ".slide_btn_next",
    },
  };
  return (
    <div className="service pt_140 mobile_padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-7 text-center">
            <p className="section_subtitle">{data.subHeading}</p>
            <h2 className="section_title text-center mb_40">{data.heading}</h2>
          </div>
        </div>
        <Swiper
          {...swiperOptions}
          modules={[Navigation, Pagination]}
          className="service_slider_three"
        >
          {data.sliders.map((slider, index) => (
            <SwiperSlide key={index}>
              <div className=" vm_service_three">
                <div className="thumb">
                  <Image src={slider.image} alt="img" />
                </div>
                <div className="content">
                  <Link className="cat" href="service-details">
                    {slider.title}
                  </Link>
                  <h5 className="mb-0">
                    <Link href="service-details">{slider.description}</Link>
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider_pagination  slider_pagination_bottom d-flex align-items-center position-absolute">
            <button className="slide_btn slide_btn_prev slide_btn_prev-black position-relative"></button>
            <div className="slider_pagination__item slider_pagination__item-black position-relative"></div>
            <button className="slide_btn slide_btn_next slide_btn_next-black position-relative"></button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
