import React from "react";
import Link from "next/link";
import CommentIcon from "@/../public/assets/images/icons/comment_icon.svg";
import Image from "next/image";

import { latestBlogData } from "@/data/blog";

export default function LatestBlogOne({ padding }) {
  return (
    <section className={`blogs pb_150 pt_150  ${padding}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-7 text-center">
            {latestBlogData.subHeading ? (
              <p
                className="section_subtitle wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                {latestBlogData.subHeading}
              </p>
            ) : (
              ""
            )}
            {latestBlogData.heading ? (
              <h2
                className="section_title text-center wow animated fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                {latestBlogData.heading}
              </h2>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="row row-gap-3">
          {latestBlogData.blogs.map((blog, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-4 wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <div className="vm_blog">
                {blog.image ? (
                  <div className="vm_blog__thumbnail">
                    <Link href="blog-details" className="d-inline-block w-100">
                      <Image src={blog.image} alt="blog_image" />
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                <div className="vm_blog__content">
                  {blog.title ? (
                    <h4 className="title mb-0">
                      <Link href="blog-details" className="">
                        {blog.title}
                        <i data-feather="arrow-up-right"></i>
                      </Link>
                    </h4>
                  ) : (
                    ""
                  )}
                  <div className="divider"></div>
                  <div className="d-flex align-items-center">
                    {blog.day && blog.month ? (
                      <p className="date d-flex align-items-center justify-content-center flex-column mb-0">
                        <span>{blog.day} /</span>
                        <span>{blog.month}</span>
                      </p>
                    ) : (
                      ""
                    )}
                    <div className="d-flex align-items-center gap-2">
                      <Image src={CommentIcon} alt="c_icon" />
                      {blog.commentsCount ? (
                        <p className="vm_para fs_20 mb-0">
                          {blog.commentsCount}
                        </p>
                      ) : (
                        "00"
                      )}
                      <p className="vm_para fs_20 mb-0">Comment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
