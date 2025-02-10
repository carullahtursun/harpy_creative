import React from "react";
import BlogSidebar from "@/components/BlogComponents/BlogSidebar";
import PostCard from "@/components/BlogComponents/PostCard";
import BreadCrumb from "@/components/Common/BreadCrumb";
import Pagination from "@/components/Common/Pagination";
import HeaderThree from "@/components/Header/HeaderThree";
import VimixLayout from "@/components/Layout/VimixLayout";

import data from '@/data/blog';

export default function Blog() {
  return (
    <VimixLayout>
      <HeaderThree />
      <BreadCrumb
        pageTitle="Blog Page"
        breadCrumbBg="assets/images/breadcrumb/blog_left.webp"
        activePage="Blog"
      />
      <div className="blog-area pt_150 pb_150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row row-gap-5">
                {data.map((blog, index) => (
                  <div className="col-sm-6" key={index + 1}>
                    <PostCard key={index} {...blog} />
                  </div>
                ))}
              </div>
              <Pagination />
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </VimixLayout>
  );
}
