import Link from "next/link";
import React from "react";
import Image from "next/image";

import { blogDetail as data } from "@/data/blog";

export default function PostDetail() {
  return (
    <div className="vm_blog">
      <div className="vm_blog__content mb-4">
        <h2 className="title mb-0 pt-0">
          <Link href="/">{data.postDetail.title}</Link>
        </h2>
        <div className="divider"></div>
        <div className="d-flex align-items-center">
          <p className="date d-flex align-items-center justify-content-center flex-column mb-0">
            <span>{data.postDetail.day} /</span>
            <span>{data.postDetail.month}</span>
          </p>
          <div className="d-flex align-items-center gap-3">
            <Image src={data.postDetail.commentIcon} alt="c_icon" />
            <p className="vm_para fs_20 mb-0">{data.postDetail.commentCount}</p>
            <p className="vm_para fs_20 mb-0">Comment</p>
          </div>
        </div>
      </div>
      <p className="vm_para">{data.postDetail.paraOne}</p>
      <div className="thumb pt-2 mb-4">
        <Image src={data.postDetail.blogBanner} alt="img" />
      </div>
      <h3>{data.postDetail.subTitleOne}</h3>
      <p className="vm_para">{data.postDetail.paraTwo}</p>
      <p className="vm_para">{data.postDetail.paraThree}</p>
      <ul className="single_list_inner mb-4">
        {data.postDetail.faqs.map((faq, index) => <li key={index}>
          <i data-feather="check"></i>
          <span className="vm_para">{faq}</span>
        </li>)}
      </ul>
      <h3>{data.postDetail.subTitleTwo}</h3>
      <p className="vm_para">{data.postDetail.paraFour}</p>
      <p className="vm_para">{data.postDetail.paraFive}</p>
      {data.postDetail.items.map((item, index) => <div key={index} className="row">
        <div className="col-md-3">
          <p className="vm_para">{item.name}</p>
        </div>
        <div className="col-md-9">
          <p className="vm_para">{item.value}</p>
        </div>
      </div>)}
      <div className="blog_details_tags pt-4">
        <h6 className="color_black d-inline-block me-2">Tag Here:</h6>
        {data.postDetail.categories.map((category, index) => <Link key={index} href={category.link}>{category.name}, </Link>)}
      </div>
    </div>
  );
}
