import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowDown from "@/../public/assets/images/icons/download_icon.svg";

import { portfolioFullWidth as portfolios } from "@/data/portfolio";

export default function FullWidthPortfolio() {
  return (
    <div className="portfolio portfolio-max-1920">
      <div className="container-lg-fluid">
        <div className="row row-gap-4">
          {portfolios.map((portfolio, index) => (
            <div
              key={index}
              className={`grid_item position-relative col-sm-${
                portfolio.size ?? 4
              }`}
            >
              <Image
                src={portfolio.image}
                alt="portfolio_img"
                className="portfolio_img w-100"
              />
              <Link
                href="portfolio-details"
                className="portfolio_link d-flex align-items-center justify-content-center"
              >
                <Image src={ArrowDown} alt="arrow_down" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
