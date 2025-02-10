import React from "react";
import Image from "next/image";
import Link from "next/link";

import { blogDetail as data } from "@/data/blog";

export default function SidebarCta() {
  return (
    <div className="widget widget_call_to_action p-0">
      <div className="thumb">
        <Image src={data.sidebar.cta.image} alt="img" />
      </div>
      <div className="content text-center">
        <h3 className="text-white">{data.sidebar.cta.title}</h3>
        <Link
          className="vm_btn fill_btn btn_red btn_17_32 d-inline-block"
          href="tel:+245-45678"
        >
          <span>{data.sidebar.cta.phone}</span>
        </Link>
      </div>
    </div>
  );
}
