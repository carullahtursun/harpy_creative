"use client";
import React from "react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ArrowDown from "@/../public/assets/images/icons/download_icon.svg";
import { portfolioOneData as portfolio } from "@/data/portfolio";

export default function PortfolioSlider() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    speed: 1000,

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
    <section className="portfolio pt_150 pb_150">
      <div className="row justify-content-center text-center pb-4">
        <div className="col-xl-4 col-lg-6">
          <p
            className="section_subtitle wow animated fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            {portfolio.subTitle}
          </p>

          <h2
            className="section_title mt-0 mb-4 wow animated fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            {portfolio.title}
          </h2>
        </div>
      </div>
      <div className="container">
        <Swiper
          {...swiperOptions}
          modules={[Navigation, Pagination]}
          className=" portfolio_slider_01"
        >
          {portfolio.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="vm_grid style_01">
                {slide.map((src, index) => (
                  <div
                    key={index}
                    className={`grid_item grid_item-${index + 1}`}
                  >
                    <Image
                      src={src}
                      alt="portfolio_img"
                      className="portfolio_img"
                    />
                    <Link
                      href="portfolio-details"
                      className="portfolio_link d-flex align-items-center justify-content-center"
                    >
                      <Image src={ArrowDown} alt="arrow_down" />
                    </Link>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}

          <div className="slider_pagination slider_pagination_bottom d-flex align-items-center position-absolute">
            <button className="slide_btn slide_btn_prev slide_btn_prev-black position-relative"></button>
            <div className="slider_pagination__item slider_pagination__item-black position-relative"></div>
            <button className="slide_btn slide_btn_next slide_btn_next-black position-relative"></button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
