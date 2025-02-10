"use client";
import React from "react";
import { ArrowUpRight } from "react-feather";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

import { serviceTwoData } from "@/data/service";

export default function ServiceSlider() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 50,
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
    <section className={`services pt_100`}>
      <div className="container z-2 position-relative service_slider_two services_two bg_white pt_50 pb_100 px-lg-4 px-xl-5">
        <Swiper {...swiperOptions} modules={[Navigation, Pagination]}>
          {serviceTwoData.services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="vm_service text-center">
                <Image src={service.icon} alt="strategy_plan" />
                <div className="content px-xl-4">
                  <h4 className="title text-center">
                    <Link href="service-details" className="position-relative">
                      {service.title}
                      <ArrowUpRight />
                    </Link>
                  </h4>
                  <p className="vm_para mb-0">{service.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider_pagination slider_pagination_bottom d-flex align-items-center position-absolute mb-lg-0 mb-5">
            <button className="slide_btn slide_btn_prev slide_btn_prev-black position-relative"></button>
            <div className="slider_pagination__item slider_pagination__item-black position-relative"></div>
            <button className="slide_btn slide_btn_next slide_btn_next-black position-relative"></button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
