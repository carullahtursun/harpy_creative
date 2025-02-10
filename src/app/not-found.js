import React from "react";
import BreadCrumb from "@/components/Common/BreadCrumb";
import HeaderOne from "@/components/Header/HeaderOne";
import Link from "next/link";
import VimixLayout from "@/components/Layout/VimixLayout";
import Image from "next/image";

import data from "@/data/not-found";

export default function NotFound() {
  return (
    <VimixLayout>
      <HeaderOne />
      <BreadCrumb
        pageTitle="Not Found "
        activePage="404"
        breadCrumbBg="assets/images/breadcrumb/service.webp"
      />
      <section className="pt_150 pb_150">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                <Image
                  src={data.notFoundImage}
                  className="img-fluid mb-lg-5 mb-4"
                  alt="not_found"
                />
                <h2 className="section_title mb-3 mb-lg-4 wow  fadeInUp animated">{data.title}</h2>
                <p className="fs-5 wow  fadeInUp animated mb-4 mb-lg-5">{data.description}</p>
                <Link
                  href="/"
                  className="vm_btn fill_btn btn_black btn_27_59 d-inline-block vm-animate-3"
                >
                  <span className="d-flex align-items-center">
                    <svg
                      className="me-3"
                      width="16"
                      height="8"
                      viewBox="0 0 16 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.646446 4.35355C0.451184 4.15829 0.451184 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM16 4.5L1 4.5V3.5L16 3.5V4.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    {data.btnText}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VimixLayout>
  );
}
