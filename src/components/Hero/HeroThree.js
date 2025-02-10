"use client";
import React from "react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import HeroShapeThree from "./HeroShaperThree";
import ArrowRightBlack from "@/../public/assets/images/icons/arrow_right_black.svg";
import StarBlack from "@/../public/assets/images/icons/star_b.svg";
import { heroThreeData } from "@/data/hero";

export default function HeroThree() {
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
    <div className="hero hero_03">
      <Swiper
        {...swiperOptions}
        modules={[Navigation, Pagination, EffectFade]}
        className="hero_slider h-100"
      >
        {heroThreeData.map((hero, index) => {
          return (
            <SwiperSlide
              key={index}
              className="slide slide__01 z-3 position-relative"
            >
              <div className="slide_wrapper container position-relative ">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="content">
                      <h1 className="title vm-animate-6">
                        <span>{hero.title} </span>
                        {hero.subTitle}
                      </h1>
                      <p className="subtitle mb-4 vm-animate-7">
                        {hero.lineOne}
                        <br />
                        {hero.lineTwo}
                      </p>
                      <div className="rating d-flex align-items-center gap-3 vm-animate-8">
                        <div className="star-container">
                          <Image src={StarBlack} alt="start" />
                        </div>
                        <div>
                          <p className="mb-1">{hero.rating}</p>
                          <p className="mb-0 vm_para">
                            {hero.lineThree} <span>{hero.lineFour}</span>
                          </p>
                        </div>
                      </div>
                      <Link
                        href="about"
                        className="vm_btn btn_trans btn_22_32 d-inline-block vm-animate-9"
                      >
                        <span className="d-flex align-items-center">
                          <Image
                            src={ArrowRightBlack}
                            alt="arrow_right"
                            className="me-3"
                          />
                          {hero.btnText}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hero_img_inner position-absolute d-flex align-items-end gap-3">
                  <Image src={hero.sliceImageOne} alt={`Image_${index}`} />
                  <Image src={hero.sliceImageTwo} alt={`Image_${index}`} />
                </div>
              </div>
              <HeroShapeThree />
            </SwiperSlide>
          );
        })}
        <div className="slider_pagination d-flex align-items-center position-absolute">
          <div className="slider_pagination__item slider_pagination__item-black position-relative"></div>
          <button className="slide_btn slide_btn_next slide_btn_next-black position-relative"></button>
        </div>
      </Swiper>
    </div>
  );
}
