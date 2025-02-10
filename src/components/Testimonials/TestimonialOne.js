"use client";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Star from "@/../public/assets/images/icons/star_b.svg";

import testimonial from "@/data/testimonial";

export default function TestimonialOne({ defaultOne }) {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 700,
    loop: true,
    pagination: {
      el: ".slider_pagination__item",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
    navigation: {
      prevEl: ".slide_btn_prev",
      nextEl: ".slide_btn_next",
    },
  };

  return (
    <section
      className={`testimonials ${
        defaultOne ? "pt_150" : "bg_gray pt_140 pb_150"
      } `}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-sm-8 col-md-7">
            {testimonial.subHeading ? (
              <p className="section_subtitle">{testimonial.subHeading}</p>
            ) : (
              ""
            )}
            {testimonial.heading ? (
              <h2 className="section_title text-center mb_40">
                {testimonial.heading}
              </h2>
            ) : (
              ""
            )}
          </div>
        </div>

        <Swiper
          {...swiperOptions}
          modules={[Navigation, Pagination]}
          className="testimonial_slider_01"
        >
          {testimonial.clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div
                className="vm_testimonial "
                style={{
                  backgroundImage:
                    "url('assets/images/testimonials/testimonial_bg.png')",
                }}
              >
                <div className="vm_testimonial__header d-flex align-items-end justify-content-between gap-3">
                  <div className="rating">
                    <p className="vm_para mb-1">
                      Average {client.review} ratting
                    </p>
                    <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-1">
                      <Image src={Star} alt="star" />
                      <Image src={Star} alt="star" />
                      <Image src={Star} alt="star" />
                      <Image src={Star} alt="star" />
                      <Image src={Star} alt="star" />
                    </div>
                  </div>
                  <div className="vm_testimonial__img_inner">
                    <Image src={client.image} alt="testimonial_img" />
                  </div>
                </div>
                {client.description ? (
                  <p className="vm_testimonial__text">{client.description}</p>
                ) : (
                  ""
                )}
                {client.designation ? (
                  <p className="vm_para mb-1">{client.designation}</p>
                ) : (
                  ""
                )}
                {client.name ? <h4 className="mb-0">{client.name}</h4> : ""}
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
