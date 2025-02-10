"use client";
import React from "react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ArrowDown from "@/../public/assets/images/icons/download_icon.svg";
import { portfolioTwoData as portfolio } from "@/data/portfolio";

export default function PortfolioSliderTwo() {
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
    <div className="work pt_150 bg_gray py_140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-7 text-center">
            <p className="section_subtitle">{portfolio.subHeading}</p>
            <h2 className="section_title text-center mb_50">
              {portfolio.heading}
            </h2>
          </div>
        </div>
        <Swiper
          {...swiperOptions}
          modules={[Navigation, Pagination]}
          className="portfolio_slider_02"
        >
          {portfolio.slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="vm_grid style_02">
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
    </div>
  );
}
