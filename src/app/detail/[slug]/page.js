"use client";
import HeaderOne from "@/components/Header/HeaderOne";
import VimixLayout from "@/components/Layout/VimixLayout";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

import {portfolioDetailData as data} from "@/data/portfolio";
import {getPortfolioById} from "@/config/portfolioService";
import {useParams} from "next/navigation";

function extractYouTubeVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}


export default function index() {
    const params = useParams(); // App Router'da bu şekilde slug alınır
    const {slug} = params;  // params.slug şeklinde alırsın
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        if (slug) {
            getPortfolioById(slug).then(setPortfolio);
        }
    }, [slug]);


    return (
        <VimixLayout>
            <HeaderOne/>
            <div className="portfolio_details_page pb_140">
                {/*  <div className="thumb">
          <Image src={data.portfolioBannerImage} className="w-100" alt="img" />
        </div>*/}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-11 pt_140">
                            <h2 className="mb-2">{portfolio?.title}</h2>
                            <p className="vm_para ">{portfolio?.subtitle}</p>
                            {/* <div className="row">
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
              </div>*/}
                            <div className="portfolio_category pt-2">
                                {portfolio?.tags.map((tag, index) => <Link key={index} href={"#"}>{tag}</Link>)}
                            </div>
                            <p className="vm_para whitespace-pre-line" style={
                                {
                                    whiteSpace: "pre-line",
                                    wordWrap: "break-word",
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word"
                                }
                            }>{portfolio?.content}</p>

                            {/*<ul className="portfolio_list pt-4 pb-4">
                {data.items.map((item, index) => <li key={index} className="vm_para">
                  <span className="color_black">{item.name}</span> {item.value}
                </li>)}
              </ul>*/}
                            <div className="thumb mb-4">
                                <Image width={856} height={500} src={portfolio?.images[0]?.url} alt="img"/>
                            </div>
                            <div className="row">
                                {
                                    portfolio?.images?.slice(1, 3).map((image, index) => (
                                        <div key={index} className="col-sm-6">
                                            <div className="thumb mb-4">
                                                <Image width={416} height={500} src={image.url} alt="img"/>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="thumb">
                                    {portfolio?.videoUrl ? (
                                        <iframe
                                            width="100%"
                                            height="500"
                                            src={`https://www.youtube.com/embed/${extractYouTubeVideoId(portfolio?.videoUrl)}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <p>Video bulunamadı</p>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VimixLayout>
    );
}
