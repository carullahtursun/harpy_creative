import Image from "next/image";
import React from "react";
import WhatWeDo_1 from "@/../public/assets/images/what_we_do/we_do_bg.webp";
import WhatWeDo_2 from "@/../public/assets/images/what_we_do/we_do_bg_02.webp";

import data from "@/data/what-we-do";

export default function WhatWeDo({ defaultOne }) {
  return (
    <section className="what_we_do pt_50">
      <div
        className={`${
          defaultOne ? "container container_lg_fluid" : "container"
        }`}
      >
        <div className="row align-items-center row-gap-4">
          <div
            className={`${
              defaultOne ? "col-lg-6" : "col-lg-5"
            } wow animated fadeInLeft`}
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            <div className="img_container">
              {defaultOne ? (
                <Image src={data.imageOne} alt="our_doing" className="w-100" />
              ) : (
                <Image src={data.imageTwo} alt="our_doing" className="" />
              )}
            </div>
          </div>

          <div className={`${defaultOne ? "col-lg-6" : "col-lg-7 ps-lg-5"}`}>
            <div className={`${defaultOne ? "content" : "content ps-xl-5"}`}>
              {data.subHeading ? (
                <p
                  className="section_subtitle wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  {data.subHeading}
                </p>
              ) : (
                ""
              )}
              {data.heading ? (
                <h2
                  className="section_title mt-0 wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  {data.heading}
                </h2>
              ) : (
                ""
              )}
              {data.description ? (
                <p
                  className="section_description black mb_34 wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  {data.description}
                </p>
              ) : (
                ""
              )}

              {data.skills ? (
                <ul
                  className="do_list position-relative mb-0 ps-0 wow animated fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  {data.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="do_list__item wow animated fadeInUp"
                      data-wow-duration="1.5s"
                      data-wow-delay="0.5s"
                    >
                      <div className="d-flex align-items-start justify-content-start">
                        {skill.leading ? (
                          <p className="marker d-flex align-items-center justify-content-center mb-0">
                            {skill.leading}
                          </p>
                        ) : (
                          ""
                        )}
                        <div className="d-flex flex-column">
                          {skill.title ? (
                            <h4 className="mb_17">{skill.title}</h4>
                          ) : (
                            ""
                          )}
                          {skill.details ? (
                            <p className="vm_para mb-0">{skill.details}</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
