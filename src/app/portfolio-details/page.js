import HeaderOne from "@/components/Header/HeaderOne";
import VimixLayout from "@/components/Layout/VimixLayout";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { portfolioDetailData as data } from "@/data/portfolio";

export default function PortfolioDetails() {
  return (
    <VimixLayout>
      <HeaderOne />
      <div className="portfolio_details_page pb_140">
        <div className="thumb">
          <Image src={data.portfolioBannerImage} className="w-100" alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-11 pt_140">
              <h2 className="mb-2">{data.title}</h2>
              <p className="vm_para pb-4">{data.paraOne}</p>
              <div className="row">
                <div className="col-md-4">
                  <p className="mb-2 vm_para">Clients: </p>
                  <h6 className="fw-400">{data.clientName}</h6>
                </div>
                <div className="col-md-4">
                  <p className="mb-2 vm_para">Timeframe: </p>
                  <h6 className="fw-400">{data.timeframe}</h6>
                </div>
                <div className="col-md-4">
                  <p className="mb-2 vm_para">Website Link: </p>
                  <h6 className="fw-400">{data.website}</h6>
                </div>
              </div>
              <div className="portfolio_category pt-4">
                {data.categories.map((category, index) => <Link key={index} href={category.link}>{category.name}</Link>)}
              </div>
              <p className="vm_para">{data.paraTwo}</p>
              <ul className="portfolio_list pt-4 pb-4">
                {data.items.map((item, index) => <li key={index} className="vm_para">
                  <span className="color_black">{item.name}</span> {item.value}
                </li>)}
              </ul>
              <div className="thumb mb-4">
                <Image src={data.portfolioImageOne} alt="img" />
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="thumb mb-4">
                    <Image src={data.portfolioImageTwo} alt="img" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="thumb mb-4">
                    <Image src={data.portfolioImageThree} alt="img" />
                  </div>
                </div>
              </div>
              <div className="thumb">
                <Image src={data.portfolioImageFour} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </VimixLayout>
  );
}
