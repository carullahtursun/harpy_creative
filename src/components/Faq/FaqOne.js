import Image from "next/image";
import React from "react";
import MainImage from "@/../public/assets/images/background/faq_bg_mask.webp";
import data from "@/data/faq";

export default function FaqOne() {
  return (
    <div className="our_faq mt__120 bg_gray pt_150 pb_150">
      <div className="container pt_120">
        <div className="row align-items-center row-gap-3">
          <div
            className="col-lg-6 order-1 order-lg-0 wow animated fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <div className="img_container">
              <Image
                src={MainImage}
                alt="faq_bg_mask"
                className="faq_bg_mask w-100"
              />
            </div>
          </div>

          <div
            className="col-lg-6 order-0 order-lg-1 wow animated fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <div className="content">
              <p className="section_subtitle">{data.subHeading}</p>
              <h2 className="section_title mt-0 mb-3">{data.heading}</h2>
              <p className="section_description black pb-4">{data.description}</p>

              <ul className="faq_accordion" id="our_faq_accordion">
                {data.faqs.map((faq, index) => (<li
                  key={index}
                  className="faq_accordion__item wow animated fadeInRight"
                  data-wow-delay="0.2s"
                  data-wow-duration={`${0.3 * (index + 1)}s`}
                >
                  <h4 className="faq_accordion__header mb-0" id={`item_${index + 1}`}>
                    <button
                      className={`faq_accordion__button px-0 text-start ${index != 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse_${index + 1}`}
                      aria-expanded="true"
                      aria-controls={`collapse_${index + 1}`}
                    >
                      {faq.title}
                    </button>
                  </h4>
                  <div
                    id={`collapse_${index + 1}`}
                    className={`accordion-collapse collapse ${index == 0 ? 'show' : ''}`}
                    aria-labelledby={`item_${index + 1}`}
                    data-bs-parent="#our_faq_accordion"
                  >
                    <div className="faq_accordion__body">
                      <p className="vm_para">
                        {faq.description}
                      </p>
                    </div>
                  </div>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
