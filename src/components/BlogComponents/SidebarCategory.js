import Link from "next/link";
import React from "react";
import { ChevronRight } from "react-feather";

import { blogDetail as data } from "@/data/blog";

export default function SidebarCategory() {
  return (
    <div className="widget widget_category">
      <h4 className="widget_headline">{data.sidebar.title}</h4>
      <ul>
        {data.sidebar.categories.map((category, index) => <li key={index}>
          <Link href={category.link}>
            {category.name}
            <span className="arrow-icon">
              <ChevronRight />
            </span>
          </Link>
        </li>)}
      </ul>
    </div>
  );
}
