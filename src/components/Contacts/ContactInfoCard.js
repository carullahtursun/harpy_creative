import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

import Link from "next/link";

import data from '@/data/contact';

export default function ContactInfoCard() {
  return (
    <div className="contact_area">
      <div className="container">
        <div className="our_info d-md-flex position-relative">
          {data.cards.map((card, index) => <div
            key={index}
            className="contact__inner text-lg-center wow animated fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay={`${0.2 * (index + 1)}s`}
          >
            <h3 className="contact_title">{card.title}</h3>
            <p className="vm_para">{card.description}</p>
            { card.infoOne ? <p className="contact_info">{card.infoOne}</p> : '' }
            { card.infoTwo ? <p className="contact_info">{card.infoTwo}</p> : '' }
          </div>)}
        </div>
        <div className="row pt_150">
          <div className="col-lg-8">
            <h3
              className="mb-5 wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              {data.getInTouchBtnText}
            </h3>
            <ContactForm />
          </div>
          <div className="col-lg-4 pt-5">
            <div
              className="widget widget_call_to_action p-0 text-lg-center wow animated fadeInRight"
              data-wow-duration="1.5s"
              data-wow-delay="1.2s"
            >
              <div className="thumb">
                <Image src={data.cta.image} alt="img" />
              </div>
              <div className="content">
                <h3 className="text-white">{data.cta.title}</h3>
                <Link
                  className="vm_btn fill_btn btn_red btn_17_32 d-inline-block"
                  href="tel:+245-45678"
                >
                  <span>{data.cta.phone} Ara</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
