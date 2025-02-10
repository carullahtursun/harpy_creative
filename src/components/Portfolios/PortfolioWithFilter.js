"use client";
import { React, useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import Link from "next/link";
import imagesLoaded from "imagesloaded";
import Image from "next/image";
import ArrowDown from "@/../public/assets/images/icons/download_icon.svg";
import { portfolioWithFilter as portfolios } from "@/data/portfolio";

const PortfolioWithFilter = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

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
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <div className="container pt_150">
      <div className="d-flex align-items-center justify-content-center gap-2 filter_btns">
        <button
          className={`btn_17_32 ${filterKey === "*" ? "active" : ""}`}
          onClick={handleFilterKeyChange("*")}
        >
          All
        </button>
        <button
          className={`btn_17_32 ${filterKey === "web_design" ? "active" : ""}`}
          onClick={handleFilterKeyChange("web_design")}
        >
          Web Design
        </button>
        <button
          className={`btn_17_32 ${
            filterKey === "web_development" ? "active" : ""
          }`}
          onClick={handleFilterKeyChange("web_development")}
        >
          Web Development
        </button>
        <button
          className={`btn_17_32 ${
            filterKey === "graphics_design" ? "active" : ""
          }`}
          onClick={handleFilterKeyChange("graphic_design")}
        >
          Graphic Design
        </button>
      </div>
      <div className="portfolio_filter_area row pt_50 mt-lg-3">
        {portfolios.map((portfolio, index) => (
          <div
            key={index}
            className={`grid_item col-sm-6 col-md-4 all ${portfolio.category}`}
          >
            <Image
              src={portfolio.image}
              alt="portfolio_img"
              className="portfolio_img"
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
  );
};

export default PortfolioWithFilter;
