import React from "react";
import Image from "next/image";
import AboutStrategy from "./AboutStrategy";

import { aboutMainData as data } from "@/data/about";

export default function AboutMain() {
  return (
    <div className="about_us pt_150">
      <div className="container">
        <div className="row align-items-center row-gap-3">
          <div className="col-lg-6 order-lg-2">
            <div
              className="img_about position-relative ps-xl-5 ms-xl-4 wow animated fadeInRight"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
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
                  alt="circle_text_bg"
                  className="circle-image"
                />
              </div>
              <Image src={data.mainImage} alt="main_image" />
            </div>
          </div>

          <div className="col-lg-6 order-lg-1">
            <div className="content">
              <h2
                className="section_title section_title-medium mt-0 wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.1s"
              >
                {data.title}
              </h2>
              <div className="pe-xl-5">
                <p
                  className="section_description black mb_10 wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  {data.subTitle}
                </p>
                <p
                  className="vm_para wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  {data.description}
                </p>
              </div>

              <AboutStrategy />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
