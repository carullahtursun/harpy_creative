"use client";

import React from "react";
import { ArrowUpRight } from "react-feather";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { serviceOneData as data } from "@/data/service";

export default function ServiceOne({ sectionTitle, subHeading }) {
  const pathName = usePathname();
  return (
    <section className="services pt_100">
      <div className="container">
        {sectionTitle && (
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-7 text-center">
              {data.brandIcon && pathName == "/" ? (
                <Image
                  src={data.brandIcon}
                  alt="brand_icon"
                  className="wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                />
              ) : (
                ""
              )}
              {subHeading ? (
                <p className="section_subtitle">{data.subHeading}</p>
              ) : (
                ""
              )}
              {data.heading && data.heading.length > 0 ? (
                <h2
                  className="section_title mt-2 wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.6s"
                >
                  {data.heading}
                </h2>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
        <div className="row row-gap-3 mt-4">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="col-sm-6 col-lg-3 d-flex justify-content-center"
            >
              <div
                className="vm_service text-start wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay={`${0.3 * (index + 1)}s`}
              >
                <Image src={item.icon} alt="strategy_plan" />
                <div className="content">
                  <h4 className="title">
                    <Link href="service" className="position-relative">
                      {item.title}
                      <ArrowUpRight />
                    </Link>
                  </h4>
                  <p className="vm_para">{item.description}</p>
                  <ul className="list p-0">
                    {item.features.map((feature, key) => (
                      <li key={key} className="list_item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
