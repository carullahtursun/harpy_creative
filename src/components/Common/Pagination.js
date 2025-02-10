import React from "react";
import { ArrowRight } from "react-feather";
import Link from "next/link";

export default function Pagination() {
  return (
    <div className="blog_pagination mt-5 pt-4 w_content mx-auto">
      <ul>
        <li>
          <span className="page_numbers current">1</span>
        </li>
        <li>
          <Link className="page_numbers" href="/">
            2
          </Link>
        </li>
        <li>
          <Link className="page_numbers" href="/">
            3
          </Link>
        </li>
        <li>
          <Link className="page_numbers" href="/">
            4
          </Link>
        </li>
        <li>
          <Link className="page_numbers next" href="/">
            <ArrowRight />
          </Link>
        </li>
      </ul>
    </div>
  );
}
