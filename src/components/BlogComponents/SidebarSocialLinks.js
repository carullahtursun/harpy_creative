import Link from "next/link";
import React from "react";

import { blogDetail as data } from "@/data/blog";

export default function SidebarSocialLinks() {
  return (
    <div className="widget widget_social">
      <h4 className="widget_headline">Social Icon</h4>
      <ul>
        {data.sidebar.socialLinks.map((social, index) => <li key={index}>
          <Link href={social.link}>
            {social.icon}
          </Link>
        </li>)}
      </ul>
    </div>
  );
}
