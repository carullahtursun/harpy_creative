"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

import data from "@/data/team";

export default function TeamOne({ gray, padding }) {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 700,

    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
        centeredSlides: false,
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
    <section
      className={`team ${padding}   ${
        gray ? "bg_gray pt_150 pb-80" : "pt_140"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-7 col-xl-6 text-center">
            <p className="section_subtitle">{data.title}</p>
            <h2 className="section_title text-center">{data.description}</h2>
          </div>
        </div>
      </div>
      <Swiper
        {...swiperOptions}
        modules={[Navigation, Pagination]}
        className="swiper team__wrapper team_slider mx-auto mb-lg-0 mb-5"
      >
        {data.teams.map((team, i) => (
          <SwiperSlide key={i + 1}>
            <div className="vm_team">
              <div className="vm_team__thumb position-relative">
                <Link href="team">
                  <Image src={team.profileImg} alt="team_member" />
                </Link>
                <ul className="social_list position-absolute">
                  <li className="social_list__item">
                    <a href="#" className="social_list__link">
                      <Facebook />
                    </a>
                  </li>
                  <li className="social_list__item">
                    <a href="#" className="social_list__link">
                      <Instagram />
                    </a>
                  </li>
                  <li className="social_list__item">
                    <a href="#" className="social_list__link">
                      <Twitter />
                    </a>
                  </li>
                  <li className="social_list__item">
                    <a href="#" className="social_list__link">
                      <Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="vm_team__content text-center">
                <p className="name mb-2">{team.memberName}</p>
                <p className="vm_para mb-0">{team.memberTitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider_pagination swifer-pagination slider_pagination_bottom d-flex align-items-center position-absolute">
          <button className="slide_btn slide_btn_prev slide_btn_prev-black position-relative"></button>
          <div className="slider_pagination__item slider_pagination__item-black position-relative"></div>
          <button className="slide_btn slide_btn_next slide_btn_next-black position-relative"></button>
        </div>
      </Swiper>
    </section>
  );
}
