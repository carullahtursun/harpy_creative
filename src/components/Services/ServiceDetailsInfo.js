"use client";
import React, { useEffect } from "react";
import GLightbox from "glightbox";
import Link from "next/link";
import Image from "next/image";


import { serviceDetailsInfo as data } from "@/data/service";

export default function ServiceDetailsInfo() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let lightbox = GLightbox({
        // Optional GLightbox configuration options
        selector: ".popup_video",
        touchNavigation: true,
        loop: false,
      });
    }
  }, []);
  return (
    <div className="service_details_page pt_120 pb_150">
      <div className="container">
        <h2 className="mb-lg-5 mb-4">{data.title}</h2>
        <div className="row">
          <div className="col-xl-4 col-lg-6 offset-xl-3">
            <p className="vm_para">{data.paraOne}</p>
            <p className="vm_para">{data.paraTwo}</p>
          </div>
          <div className="col-xl-5 col-lg-6">
            <p className="vm_para">{data.paraThree}</p>
            <p className="vm_para">{data.paraFour}</p>
          </div>
        </div>
      </div>

      <div className="video_popup pt_150 mb-5 position-relative">
        <div className="video_thumbnail position-relative overflow-hidden">
          <Image src={data.videoBg} alt="video_bg" className="w-100" />
          <Link
            className="popup_video video_play_button p-0 position-absolute top-50 start-50 translate-middle"
            href="https://www.youtube-nocookie.com/embed/JdqL89ZZwFw?si=jnriuBsR3pv2EoUa"
          >
            <span></span>
          </Link>
        </div>
        <Image
          src={data.topLeft}
          alt="service_details_bottom"
          className="top_l position-absolute start-0 d-none d-lg-block"
        />
        <Image
          src={data.bottomRight}
          alt="service_details_bottom"
          className="bottom_r position-absolute bottom-0 end-0"
        />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <p className="vm_para">{data.paraFive}</p>
            <p className="vm_para">{data.paraSix}</p>
            <ul className="single_list_inner pt-3">
              {data.faqs.map((faq, index) => <li key={index}>
                <i data-feather="check"></i> {faq}
              </li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
