import React from "react";
import Link from "next/link";
import Image from "next/image";
import whyUs from "@/data/why-choose-us";
import ArrowRightBlack from "@/../public/assets/images/icons/arrow_right_black.svg";

export default function WhyChoose({
  minusMargin,
  paddingTop,
  isSpacing = true,
}) {
  return (
    <section
      className={`why_choose_us ${
        isSpacing ? (minusMargin ? "mt__120" : "pt_150") : ""
      }`}
    >
      <div className="why_choose_us__header bg_black pt_140 pb_74 text-center">
        <div className={`container ${paddingTop}`}>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-7">
              <p className="section_subtitle white">{whyUs.subHeading}</p>
              <h2 className="section_title white text-center mb-3">
                {whyUs.heading}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="why_choose_us__body bg_gray pb_150">
        <div className="container ">
          <ul
            className="tabs nav nav-tabs align-items-center justify-content-center"
            id="why_choose_us_tab"
            role="tablist"
          >
            {whyUs.tabs.map((tab, index) => (
              <li key={index} className="tabs__item nav-item">
                <button
                  className={`vm_btn tab_btn nav-link ${
                    tab.isActive ? "active" : ""
                  }`}
                  id={`${tab.id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`${tab.id}`}
                  aria-selected="true"
                >
                  {tab.tabText}
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content pt_50" id="why_choose_us_tabContent">
            {whyUs.tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab-pane fade ${tab.isActive ? "show active" : ""}`}
                id={tab.id}
                role="tabpanel"
                aria-labelledby={`${tab.id}-tab`}
              >
                <div className="row row-gap-5">
                  <div className="col-lg-6">
                    <h3>{tab.title}</h3>
                    <p className="section_description mb-4">{tab.lineOne}</p>
                    <p className="section_description mb-1">{tab.lineTwo}</p>
                    <Link
                      href="about"
                      className="vm_btn btn_trans btn_17_32 d-inline-block"
                    >
                      <Image
                        src={ArrowRightBlack}
                        alt="arrow_right"
                        className="me-3"
                      />
                      <span>{tab.btnText}</span>
                    </Link>
                  </div>

                  <div className="col-lg-6 align-self-center">
                    <div className="thumb pt-lg-5">
                      <Image src={tab.image} alt={`Chart_image_${index + 1}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
