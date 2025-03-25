"use client";
import BreadCrumb from "@/components/Common/BreadCrumb";
import HeaderOne from "@/components/Header/HeaderOne";
import VimixLayout from "@/components/Layout/VimixLayout";
import dynamic from "next/dynamic";
import Link from "next/link";
import {useEffect, useState} from "react";
import {getPortfolios} from "@/config/portfolioService";

const PortfolioWithFilter = dynamic(
  () => import("@/components/Portfolios/PortfolioWithFilter"),
  { ssr: false }
);

export default function Portfolio() {

    //get portfolio data
    const [portfolios, setPortfolios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await getPortfolios();
            setPortfolios(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
            isLoading ? (
                <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <VimixLayout>
                    <HeaderOne />
                    <BreadCrumb
                        pageTitle=""
                        activePage=""
                        breadCrumbBg="assets/images/breadcrumb/portfoy-banner.png"
                    />
                    <PortfolioWithFilter portfolios={portfolios}/>
                </VimixLayout>
            )
  );
}
