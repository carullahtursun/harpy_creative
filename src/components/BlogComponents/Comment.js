import React from "react";
import Image from "next/image";

import { blogDetail as data } from "@/data/blog";

export default function Comment() {
  return (
    <div className="comment_area pt_150">
      <h3>{data.comment.commentCount} Comments</h3>
      <ul className="comment_list">
        {data.comment.comments.map((comment, index) => <li key={index}>
          <div className="media d-md-flex align-items-md-center">
            <div className="media-left me-3 mb-3 mb-md-0">
              <Image src={comment.image} alt="visitor" />
            </div>
            <div className="media-body pe-xl-5">
              <h4 className="mb-3">{comment.name}</h4>
              <p className="vm_para mb-0">{comment.description}</p>
              <button className="reply">{comment.replyBtnText}</button>
            </div>
          </div>
          <ul className="ps-xl-5">
            {comment.replies.map((reply, i) => <li key={i}>
              <div className="media d-md-flex align-items-md-center">
                <div className="media-left me-3 mb-3 mb-md-0">
                  <Image src={reply.image} alt="visitor" />
                </div>
                <div className="media-body pe-xl-5">
                  <h4 className="mb-3">{reply.name}</h4>
                  <p className="vm_para mb-0">{reply.description}</p>
                  <button className="reply">{comment.replyBtnText}</button>
                </div>
              </div>
            </li>)}
          </ul>
        </li>)}
      </ul>
    </div>
  );
}
