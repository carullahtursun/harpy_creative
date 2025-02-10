import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentIcon from "@/../public/assets/images/icons/comment_icon.svg";

import { blogDetail as data } from "@/data/blog";

export default function RelatedBlog() {
  return (
    <div className="blogs pt_150">
      <div className="row mb-4">
        <div className="col-lg-10">
          <p className="section_subtitle">{data.relatedBlog.subHeading}</p>
          <h2 className="section_title mb-4">{data.relatedBlog.heading}</h2>
        </div>
      </div>
      <div className="row row-gap-3">
        {data.relatedBlog.posts.map((post, index) => <div key={index} className="col-12 col-sm-6">
          <div className="vm_blog">
            <div className="vm_blog__thumbnail">
              <Link href="blog-details" className="d-inline-block w-100">
                <Image src={post.image} alt="blog_image" />
              </Link>
            </div>
            <div className="vm_blog__content">
              <h4 className="title mb-0">
                <Link href="blog-details" className="">
                  {post.title}
                  <i data-feather="arrow-up-right"></i>
                </Link>
              </h4>
              <div className="divider"></div>
              <div className="d-flex align-items-center">
                <p className="date d-flex align-items-center justify-content-center flex-column mb-0">
                  <span>{post.day} /</span>
                  <span>{post.month}</span>
                </p>
                <div className="d-flex align-items-center gap-2">
                  <Image src={CommentIcon} alt="c_icon" />
                  <p className="vm_para fs_20 mb-0">{post.commentCount}</p>
                  <p className="vm_para fs_20 mb-0">Comment</p>
                </div>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
}
