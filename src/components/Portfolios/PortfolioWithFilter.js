"use client";
import { React, useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import Link from "next/link";
import imagesLoaded from "imagesloaded";
import Image from "next/image";
import ArrowDown from "@/../public/assets/images/icons/download_icon.svg";
import { portfolioWithFilter as portfolios } from "@/data/portfolio";
import {getPortfolios} from "@/config/portfolioService";

const PortfolioWithFilter = ({portfolios}) => {
  const isotope = useRef();

  useEffect(() => {
    isotope.current = new Isotope(".portfolio_filter_area", {
      itemSelector: ".grid_item",
      percentPosition: true,
      masonry: {
        columnWidth: 0,
      },
      transitionDuration: "0.5s",
    });

    // Initialize imagesLoaded
    imagesLoaded(".portfolio_filter_area").on("progress", () => {
      isotope.current.layout();
    });
  }, []);
  // handling filter key change



  return (
    <div className="container pt_50 pb_100">
      <div className="d-flex align-items-center justify-content-center gap-2 filter_btns">
      </div>
      <div className="portfolio_filter_area row pt_50 mt-lg-3">
          {portfolios&& portfolios?.map((portfolio, index) => (
          <div
            key={index}
            className={`grid_item col-sm-6 col-md-4 all ${portfolio?.title}`}
          >
            <Image
              src={portfolio?.images[0]?.url}
              alt="portfolio_img"
              className="portfolio_img"
              width={500}
              height={400}
            />
            <Link
              href={`/detail/${portfolio?.id}`}
              className="portfolio_link d-flex align-items-center justify-content-center"
            >
              <Image src={ArrowDown} alt="arrow_down" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioWithFilter;
