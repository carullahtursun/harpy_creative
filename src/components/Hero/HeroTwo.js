"use client";
import React from "react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import HeroShapeTwo from "./HeroShapeTwo";
import ArrowRightWhite from "@/../public/assets/images/icons/arrow_right_white.svg";
import Image from "next/image";
import { heroTowData } from "@/data/hero";

export default function HeroTwo() {
  const swiperOptions = {
    effect: "fade",
    loop: true,
    speed: 500,
    pagination: {
      el: ".slider_pagination__item",
      clickable: true,
    },
    navigation: {
      nextEl: ".slide_btn_next",
    },
  };
  return (
    <div className="hero hero_02">
      <Swiper
        {...swiperOptions}
        modules={[Navigation, Pagination, EffectFade]}
        className="hero_slider h-100"
      >
        {heroTowData.map((hero, index) => (
          <SwiperSlide
            key={index}
            className="slide slide__03 position-relative "
          >
            <div className="slide_wrapper container position-relative">
              <div className="row content text-center text-md-start">
                <div className="col-12 text-center">
                  <h1 className="title vm-animate-6">{hero.title}</h1>
                  <p className="subtitle style_02 vm-animate-7">
                    {hero.description}
                  </p>
                  <div className="vm-animate-8 text-center">
                    <Link
                      href="portfolio"
                      className="vm_btn fill_btn btn_red btn_22_32 d-inline-block me-lg-4 me-2 mb-2"
                    >
                      <span className="d-flex align-items-center">
                        <Image
                          src={ArrowRightWhite}
                          alt="arrow_right"
                          className="me-3"
                        />
                        {hero.btnTextOne}
                      </span>
                    </Link>
                    <Link
                      href="about"
                      className="vm_btn fill_btn btn_black btn_22_50 d-inline-block"
                    >
                      <span className="d-flex align-items-center">
                        <Image
                          src={ArrowRightWhite}
                          alt="arrow_right"
                          className="me-3"
                        />
                        {hero.btnTextTwo}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <HeroShapeTwo />
          </SwiperSlide>
        ))}
        ;
        <div className="slider_pagination d-flex align-items-center position-absolute">
          <div className="slider_pagination__item position-relative"></div>
          <button className="slide_btn slide_btn_next position-relative"></button>
        </div>
      </Swiper>
    </div>
  );
}
