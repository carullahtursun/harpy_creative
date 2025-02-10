"use client";
import React, { useEffect } from "react";
import GLightbox from "glightbox";
import Image from "next/image";
import Link from "next/link";

import video from "@/data/video";

export default function VideoOne() {
  useEffect(() => {
    let lightbox = GLightbox({
      // Optional GLightbox configuration options
      selector: ".popup_video",
      touchNavigation: true,
      loop: false,
    });
  }, []);
  return (
    <div className="video_thumbnail position-relative overflow-hidden mt_150">
      <Image src={video.image} alt="video_bg" className="w-100" />
      <Link
        className="popup_video video_play_button p-0 position-absolute top-50 start-50 translate-middle"
        href={video.url}
      >
        <span></span>
      </Link>
    </div>
  );
}
