"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@/../public/assets/images/icons/instagram_icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import data from "@/data/instagram";

export default function InstagramSliderOne() {
  const swiperOptions = {
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      950: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 6,
      },
    },
  };
  return (
    <div className="instagram">
      <Swiper
        {...swiperOptions}
        className=" instagram_slider portfolio-max-1920"
      >
        {data.map((post, i) => (
          <SwiperSlide key={i + 1}>
            <div className="swiper-slide img_wrap">
              <Image src={post.sliderImg} alt="portfolio_image" />
              <Link href={post.href}>
                <Image src={InstagramIcon} alt="instagram" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
