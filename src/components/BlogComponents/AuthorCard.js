import React from "react";
import Image from "next/image";

import { blogDetail as data } from "@/data/blog";

export default function AuthorCard() {
  return (
    <div className="blog_author bg_gray p-4">
      <div className="media d-md-flex">
        <div className="media-left me-3 align-self-center mb-3 mb-md-0">
          <Image src={data.author.image} alt="img" />
        </div>
        <div className="media-body">
          <h4 className="color_black mb-3">{data.author.name}</h4>
          <p className="mb-0 vm_para">
            {data.author.paraOne}
            <br />
            {data.author.paraTwo}
          </p>
        </div>
      </div>
    </div>
  );
}
