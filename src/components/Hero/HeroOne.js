"use client";
import React from "react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

import arrowRightWhite from "@/../public/assets/images/icons/arrow_right_white.svg";
import HeroShapeOne from "./HeroShapeOne";

import { heroOneData } from "@/data/hero";

export default function HeroOne() {
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
    <section className="hero hero_01">
      <Swiper
        {...swiperOptions}
        modules={[Navigation, Pagination, EffectFade]}
        className="hero_slider h-100"
      >
        {heroOneData.map((hero, index) => (
          <SwiperSlide
            key={index}
            className="slide slide__01 position-relative"
          >
            <div className="slide_wrapper container position-relative">
              <div className="row content text-center text-md-start">
                <div className="col-12 col-md-9 col-lg-9">
                  <h1 className="title vm-animate-1">{hero.title}</h1>
                  <p className="subtitle vm-animate-2">{hero.description}</p>
                  <Link
                    href="pricing"
                    className="vm_btn fill_btn btn_black btn_27_59 d-inline-block vm-animate-3"
                  >
                    <span className="d-flex align-items-center">
                      <Image
                        src={arrowRightWhite}
                        alt="arrow_right"
                        className="me-3"
                      />
                      {hero.btnText}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <HeroShapeOne />
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="position-relative">
            <div className="slider_pagination  hero_1_pagination d-flex align-items-center">
              <div className="slider_pagination__item position-relative"></div>
              <button className="slide_btn slide_btn_next position-relative"></button>
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
