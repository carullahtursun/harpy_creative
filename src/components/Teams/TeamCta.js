import React from "react";
import Link from "next/link";

export default function TeamCta() {
  return (
    <div className="link_widget w_content position-relative mx-auto mt_100 pb_100">
      <Link href="/team" className="link">
        Join Our Team
      </Link>
      <span></span>
    </div>
  );
}
