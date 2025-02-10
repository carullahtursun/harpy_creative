import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowRightBlack from "@/../public/assets/images/icons/arrow_right_black.svg";

import data from "@/data/price";

export default function PriceOne({ sectionTitle }) {
  return (
    <div className="pricing pt_140">
      <div className="container">
        {sectionTitle && (
          <div className="row justify-content-center section_header">
            <div className="col-12 col-sm-8 col-md-7 text-center">
              <p className="section_subtitle">{data.subHeading}</p>
              <h2 className="section_title mb_50">{data.heading}</h2>
            </div>
          </div>
        )}
        <div className="row justify-content-center row-gap-3">
          {data.prices.map((price, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="vm_price text-center"
                style={{
                  backgroundImage: "url('assets/images/background/price.webp')",
                }}
              >
                <h3 className="vm_price__title">{price.title}</h3>
                <p className="vm_price__type vm_p">{price.category}</p>
                <h2 className="vm_price__price">
                  {price.amount}
                  <sub className="ms-1"> /{price.type}</sub>
                </h2>
                <ul className="vm_price__package ps-0">
                  {price.features.map((feature, i) => (
                    <li key={i} className="position-relative">
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
                <Link
                  href="pricing"
                  className="vm_btn btn_trans btn_12_39 btn_price d-inline-block mt-0"
                >
                  <span className="d-flex align-items-center">
                    <Image
                      src={ArrowRightBlack}
                      alt="arrow_right"
                      className="me-3"
                    />
                    {price.btnText}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
