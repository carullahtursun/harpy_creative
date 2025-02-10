import React from "react";
import Link from "next/link";
import Image from "next/image";

import { serviceTwoData as service } from "@/data/service";

export default function ServiceTwo() {
  return (
    <section className="about_service pt_100">
      <div className="container">
        <div className="row">
          <div className="col-md-6 position-relative">
            <h2
              className="section_title-large  position-absolute top-0 start-1 wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              {service.headingLineOne}
              <span>{service.headingLineTwo}</span>
              {service.headingLineThree}
            </h2>
            {service.description ? (
              <p
                className="vm_para pt-lg-4 wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                {service.description}
              </p>
            ) : (
              ""
            )}

            {service.arrowImage ? (
              <Link href="about">
                <Image
                  src={service.arrowImage}
                  alt="arrow_black"
                  className="arrow_black d-none d-md-block top_image_bounce"
                />
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <div className="circle_badge position-relative ms-auto d-none d-md-block">
              {service.badgeText ? (
                <svg viewBox="0 0 300 300" width="100%" className="spin_text">
                  <path
                    id="criclePath"
                    d="M 150, 150 m -120, 0 a 120,120 0 0,1 240,0 a 120,120 0 0,1 -240,0 "
                    fill="transparent"
                  />
                  <text
                    fill="#999"
                    fontFamily="Verdana"
                    fontSize="24"
                    fontWeight="100"
                  >
                    <textPath href="#criclePath">{service.badgeText}</textPath>
                  </text>
                </svg>
              ) : (
                ""
              )}

              {service.brandIcon ? (
                <Image
                  src={service.brandIcon}
                  alt="logo_icon"
                  className="center_logo position-absolute top-50 start-50 translate-middle"
                />
              ) : (
                ""
              )}
            </div>

            {service.mainImage ? (
              <Image
                src={service.mainImage}
                alt="bg_image"
                className="service_bg wow animated fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.6s"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
