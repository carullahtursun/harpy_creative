"use client";
import React from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import Image from "next/image";

import { aboutOneData as data } from "@/data/about";

export default function AboutOne() {
  return (
    <section className="about_us pt_150">
      <div className="container">
        <div className="row align-items-center row-gap-4">
          <div
            className="col-lg-5 wow animated fadeInLeft"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >dsgsdf hsrth srth srth s
            <div className="img_container">
              {data.image ? (
                <Image src={data.image} alt="about_us" className="mask_img" />
              ) : (
                ""
              )}
              {data.topLogoGray ? (
                <Image
                  src={data.topLogoGray}
                  alt="mask_img_icon_gray"
                  className="mask_img_icon--gray position-absolute"
                />
              ) : (
                ""
              )}

              {data.topLogoRed ? (
                <Image
                  src={data.topLogoRed}
                  alt="mask_img_icon_red"
                  className="mask_img_icon--red position-absolute"
                />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="col-lg-7 ps-lg-5">
            <div className="content ps-xl-5">
              <p
                className="section_subtitle wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                {data.subTitle}
              </p>

              <h2
                className="section_title mt-0 mb-4 wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                {data.title}
              </h2>

              <p
                className="section_description mb_10 wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                {data.lineOne}
              </p>

              <p
                className="vm_para wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                {data.lineTwo}
              </p>

              <div className="row align-items-center pt-4">
                {data.counters.map((counter, index) => (
                  <div
                    key={index}
                    className="col-6 wow animated fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                  >
                    <ReactVisibilitySensor delayedCall>
                      {({ isVisible }) => (
                        <div className="counter d-flex flex-column">
                          <span className="counter__count mb-3">
                            {isVisible ? (
                              <CountUp start={0} end={counter.count} />
                            ) : (
                              "0"
                            )}
                            +
                          </span>
                          <p className="counter__text mb-0">{counter.title}</p>
                        </div>
                      )}
                    </ReactVisibilitySensor>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
