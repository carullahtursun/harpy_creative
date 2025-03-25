import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowRightWhite from "@/../public/assets/images/breadcrumb/ana-sayfa-iletisim.png";
import icon from "@/../public/assets/images/icons/phone_volume_red.svg";


import cta from "@/data/cta";

export default function CtaOne({ spaceBottom }) {
  return (
    <section
      className="cta pt_150 wow animated fadeInUp pb_150"
      data-wow-duration="1.5s"
      data-wow-delay="0.2s"
    >
      <div className="container">
        <div className="cta__wrapper position-relative">
         <Image src={ArrowRightWhite} alt="cta_bg" className="cta_bg" />
         {/* <div className="content position-absolute top-50  start-50 pt_150 ">
          
            <Link
              href="about"
              className="vm_btn fill_btn btn_black btn_12_27 d-inline-block"
            >
              <span>
                <Image
                  src={icon}
                  alt="arrow_right"
                  className="me-3"
                />
                {cta.btnText}
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
