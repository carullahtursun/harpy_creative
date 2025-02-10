import BreadCrumb from "@/components/Common/BreadCrumb";
import HeaderOne from "@/components/Header/HeaderOne";
import VimixLayout from "@/components/Layout/VimixLayout";
import dynamic from "next/dynamic";
import Link from "next/link";

const PortfolioWithFilter = dynamic(
  () => import("@/components/Portfolios/PortfolioWithFilter"),
  { ssr: false }
);

export default function Portfolio() {
  return (
    <VimixLayout>
      <HeaderOne />
      <BreadCrumb
        pageTitle="Portfolio Page"
        activePage="Portfolio"
        breadCrumbBg="assets/images/breadcrumb/portfolio.webp"
      />
      <PortfolioWithFilter />

      <div className="link_widget w_content position-relative mx-auto mt_100 pb_100">
        <Link href="portfolio" className="link">
          Load More
        </Link>
        <span></span>
      </div>
    </VimixLayout>
  );
}
