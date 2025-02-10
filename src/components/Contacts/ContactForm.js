import Image from "next/image";
import React from "react";
import ArrowRightWhite from "@/../public/assets/images/icons/arrow_right_white.svg";

import data from '@/data/contact';

export default function ContactForm() {
  return (
    <form className="vm_form pb_150" action="#">
      <div
        className="d-block d-sm-flex align-items-center justify-content-between gap-2 gap-lg-4 wow animated fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="0.4s"
      >
        <label htmlFor="name" className="vm_para w-100">
          {data.form.nameLabel}
          <input
            type="text"
            id="name"
            name="name"
            placeholder={data.form.namePlaceholder}
            required
          />
        </label>
        <label htmlFor="email" className="vm_para w-100">
          {data.form.mailLabel}
          <input
            type="email"
            id="email"
            name="email"
            placeholder={data.form.mailPlaceholder}
            required
          />
        </label>
      </div>
      <div
        className="d-block d-sm-flex align-items-center justify-content-between gap-2 gap-lg-4 wow animated fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="0.6s"
      >
        <label htmlFor="phone" className="vm_para w-100">
          {data.form.phoneLabel}
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder={data.form.phonePlaceholder}
            required
          />
        </label>
        <label htmlFor="subject" className="vm_para w-100">
          {data.form.subjectLabel}
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder={data.form.subjectPlaceholder}
            required
          />
        </label>
      </div>
      <label
        htmlFor="message"
        className="vm_para wow animated fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="0.8s"
      >
        {data.form.messageLabel}
        <textarea
          id="message"
          name="message"
          rows="3"
          placeholder={data.form.messagePlaceholder}
          required
        ></textarea>
      </label>
      <p
        className="vm_para position-relative wow animated fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="1s"
      >
        {data.form.description}
      </p>
      <button
        type="submit"
        className="vm_btn fill_btn btn_black btn_17_32 d-inline-block mt-3 wow animated fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay="0.4s"
      >
        <span className="d-flex align-items-center">
          <Image src={ArrowRightWhite} alt="arrow_right" className="me-3" />
          {data.form.btnText}
        </span>
      </button>
    </form>
  );
}
