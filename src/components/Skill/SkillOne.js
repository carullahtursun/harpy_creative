"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import data from "@/data/skill";

export default function SkillOne() {
  // Progress Bar

  useEffect(() => {
    const items = document.querySelectorAll(".progress_bar__item");
    items.forEach(function (item, index) {
      const progress = item.querySelector(".progress_bar__progress");
      var itemValue = progress.dataset.progress;
      let i = 0;
      var count = setInterval(function () {
        if (i <= itemValue) {
          var iStr = i.toString();
          progress.style.width = iStr + "%";
          item.querySelector(".progress_bar__value").innerHTML = iStr + "%";
        } else {
          clearInterval(count);
        }
        i++;
      }, 20);
    });
  }, []);

  return (
    <div className="service_skill pt_120">
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-md-5 position-relative">
            <div className="circle_badge position-relative me-auto d-none d-md-block">
              <svg viewBox="0 0 300 300" width="100%" className="spin_text">
                <path
                  id="criclePath2"
                  d=" M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "
                  fill="transparent"
                />
                <text
                  fill="#999"
                  fontFamily="Verdana"
                  fontSize="24"
                  fontWeight="100"
                >
                  <textPath xlinkHref="#criclePath2">{data.badgeText}</textPath>
                </text>
              </svg>
              <Image
                src={data.logo}
                alt="logo_icon"
                className="center_logo position-absolute top-50 start-50 translate-middle"
              />
            </div>

            <Image
              src={data.mainImage}
              alt="digital_skill"
              className="digital_skill wow animated fadeInLeft"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            />
          </div>
          <div className="col-md-7 mb-5">
            <h2
              className="section_title-large wow animated fadeInLeft"
              data-wow-duration="1.5s"
              data-wow-delay="0.7s"
            >
              {data.headingPartOne}
              <span>{data.headingPartTwo}</span>
              {data.headingPartThree}
            </h2>
            <p
              className="vm_para pe-lg-5 me-lg-5 pb-4 wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.8s"
            >
              {data.description}
            </p>

            <div className="progress_bar mt-3 mt-lg-4">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="progress_bar__item wow animated fadeInUp"
                  data-wow-duration="1.4s"
                  data-wow-delay={`${0.9 + index / 10}s`}
                >
                  <div
                    className="progress_bar__progress"
                    data-progress={skill.percent}
                  ></div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="progress_bar__label">{skill.name}</p>
                    <p className="progress_bar__value">{`${skill.percent}%`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
