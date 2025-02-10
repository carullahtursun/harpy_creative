import React from "react";
import PostCard from "@/components/BlogComponents/PostCard";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Pagination from "@/components/Common/Pagination";
import CtaOne from "@/components/Cta/CtaOne";
import HeaderThree from "@/components/Header/HeaderThree";
import VimixLayout from "@/components/Layout/VimixLayout";

import data from '@/data/blog';

export default function BlogGrid() {
  return (
    <VimixLayout>
      <HeaderThree />
      <BreadCrumb
        pageTitle="Blog Grid"
        activePage="Blog Grid"
        breadCrumbBg="assets/images/breadcrumb/blog.webp"
      />
      <div className="blogs pt_150">
        <div className="container">
          <div className="row row-gap-5">
            {data.map((blog, index) => (
              <div
                className="col-sm-6 col-lg-4 wow animated fadeInUp"
                key={index}
              >
                <PostCard {...blog} />
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      </div>
      <CtaOne />
    </VimixLayout>
  );
}
