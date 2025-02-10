"use client";
import React from "react";
import Link from "next/link";

const BreadCrumb = ({ pageTitle, activePage, breadCrumbBg }) => {
  return (
    <div
      className="breadcrumb_wrap"
      style={{
        backgroundImage: `url(${breadCrumbBg})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb_content">
              <h2 className="page_title">{pageTitle}</h2>
              <div className="page_list_border">
                <span className="page_list_dot_1"></span>
                <span className="page_list_dot_2"></span>
                <span className="page_list_dot_3"></span>
                <span className="page_list_dot_4"></span>
                <ul className="page_list">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>{activePage}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
