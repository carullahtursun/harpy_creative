import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentIcon from "@/../public/assets/images/icons/comment_icon.svg";

const PostCard = ({ imageUrl, title, date, commentCount, slug }) => {
  return (
    <div
      className="wow animated fadeInUp"
      data-wow-duration="1.5s"
      data-wow-delay="0.3s"
    >
      <div className="vm_blog">
        <div className="vm_blog__thumbnail">
          <Link href={slug} className="d-inline-block w-100">
            <Image src={imageUrl} alt="blog_image" />
          </Link>
        </div>
        <div className="vm_blog__content">
          <h4 className="title mb-0">
            <Link href={slug} className="">
              {title}
            </Link>
          </h4>
          <div className="divider"></div>
          <div className="d-flex align-items-center">
            <p className="date d-flex align-items-center justify-content-center flex-column mb-0">
              <span>{date.day} /</span>
              <span>{date.month}</span>
            </p>
            <div className="d-flex align-items-center gap-2">
              <Image src={CommentIcon} alt="c_icon" />
              <p className="vm_para fs_20 mb-0">{commentCount}</p>
              <p className="vm_para fs_20 mb-0">Comment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
