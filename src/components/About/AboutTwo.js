import React from "react";
import AboutStrategy from "./AboutStrategy";
import Image from "next/image";

import { aboutTwoData as data } from "@/data/about";

export default function AboutTwo() {
  return (
    <div className="about_us pt_140">
      <div className="pt_150 pb_150 bg_gray position-relative">
        <div className="container">
          <div className="row align-items-center row-gap-3">
            <div className="col-lg-6 order-lg-2 position-relative align-self-start">
              <div className="position-absolute circle_badge_inner d-none d-lg-block">
                <div className="circle_badge position-relative ms-auto">
                  <svg viewBox="0 0 300 300" width="100%" className="spin_text">
                    <path
                      id="criclePath"
                      d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "
                      fill="transparent"
                    />
                    <text
                      fill="#999"
                      fontFamily="Verdana"
                      fontSize="24"
                      fontWeight="100"
                    >
                      <textPath xlinkHref="#criclePath">
                        {data.badgeText}
                      </textPath>
                    </text>
                  </svg>

                  <Image
                    src={data.logo}
                    alt="logo_icon"
                    className="center_logo position-absolute top-50 start-50 translate-middle"
                  />
                  <Image
                    src={data.circeTextBgImage}
                    alt="about_us"
                    className="circle-image"
                  />
                </div>
              </div>
              <Image
                src={data.mainImage}
                alt="about_us"
                className="about_us_img position-absolute top-50 start-0 ps-lg-5 ms-lg-5"
              />
            </div>

            <div className="col-lg-6 order-lg-1">
              <div className="content">
                <h2
                  className="section_title section_title-medium mt-0 wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  {data.heading}
                </h2>
                <div className="pe-xl-5">
                  <p
                    className="section_description black mb_10 wow animated fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    {data.descriptionOne}
                  </p>
                  <p
                    className="vm_para wow animated fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.3s"
                  >
                    {data.descriptionTwo}
                  </p>
                </div>
                <AboutStrategy />
              </div>
            </div>
          </div>
        </div>

        <Image
          src={data.topLeftImage}
          alt="red_bouder"
          className="top_left position-absolute top-0 start-0"
        />
        <Image
          src={data.bottomRightImage}
          alt="red_bouder"
          className="btm_right position-absolute bottom-0 end--10 left_image_bounce"
        />
        <Image
          src={data.dotImage}
          alt="red_bouder"
          className="dot position-absolute top-50 start-5 ms-5 d-none d-lg-block top_image_bounce"
        />
      </div>
    </div>
  );
}
