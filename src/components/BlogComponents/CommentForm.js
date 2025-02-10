import React from "react";
import Image from "next/image";
import ArrowRightWhite from "@/../public/assets/images/icons/arrow_right_white.svg";

import { blogDetail as data } from "@/data/blog";

export default function CommentForm() {
  return (
    <form className="vm_form" action="#">
      <h3>{data.commentForm.title}</h3>
      <div className="d-block d-sm-flex align-items-center justify-content-between gap-2 gap-lg-4">
        <label htmlFor="name" className="vm_para w-100">
          {data.commentForm.nameLabel}
          <input
            type="text"
            id="name"
            name="name"
            placeholder={data.commentForm.namePlaceholder}
            required
          />
        </label>
        <label htmlFor="email" className="vm_para w-100">
          {data.commentForm.mailLabel}
          <input
            type="email"
            id="email"
            name="email"
            placeholder={data.commentForm.mailPlaceholder}
            required
          />
        </label>
      </div>
      <label htmlFor="message" className="vm_para">
        {data.commentForm.messageLabel}
        <textarea
          id="message"
          rows="3"
          placeholder={data.commentForm.messagePlaceholder}
          required
        ></textarea>
      </label>

      <p className="vm_para position-relative">{data.commentForm.description}</p>
      <button
        type="submit"
        className="vm_btn fill_btn btn_black btn_17_32 d-inline-block mt-lg-3"
      >
        <span className="d-flex align-items-center">
          <Image src={ArrowRightWhite} alt="arrow_right" className="me-3" />
          Post Comments
        </span>
      </button>
    </form>
  );
}
