"use client";
import React from "react";
import Link from "next/link";
import { ArrowUp } from "react-feather";
import { useThemeContext } from "@/context/ThemeContext";
import Image from "next/image";

import data from "@/data/footer";

export default function     Footer() {
  const { showScrollTop, scrollToTop } = useThemeContext();
  return (
    <>
      <button
        className={`backto_top ${showScrollTop ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <ArrowUp />
      </button>
      <footer className="footer">
        <div className="footer__top bg_black">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-6 col-lg-4">
                <div className="footer_logo">
                  <Link href="/" className="d-inline-block h-100">
                    <Image
                        width={150}
                        height={150}
                      src={data.mainLogo}
                      alt="logo"
                      className="main-logo-img logo"
                    />
                  </Link>
                </div>
              </div>

              <div className="col-sm-8 col-md-6 col-lg-4 mb-lg-0 mb-3 align-self-center">
                {data.title ? (
                  <h6 className="title widget_title">{data.title}</h6>
                ) : (
                  ""
                )}
                {data.descriptionOne ? (
                  <p className="vm_para footer_l">
                    {data.descriptionOne} <br /> {data.descriptionTwo}
                  </p>
                ) : (
                  ""
                )}
                {data.email ? (
                  <p className="title contact">{data.email}</p>
                ) : (
                  ""
                )}
                {data.phone ? (
                  <p className="title contact">{data.phone}</p>
                ) : (
                  ""
                )}
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4 mb-lg-0 mb-3 align-self-center">
                {data.topLinksTitle ? (
                  <h6 className="title widget_title">{data.topLinksTitle}</h6>
                ) : (
                  ""
                )}
                <div className="row">
                  <div className="col-6">
                    <ul className="ps-0 mb-0">
                      {data.links.map((link, index) => (
                        <li key={index} className="mb-1 mb-md-3">
                          <Link
                            href={`${link.href}`}
                            className="vm_para footer_l f_l py-3"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="ps-0 mb-0">
                      {data.usefulLinks.map((link, index) => (
                        <li key={index} className="mb-1 mb-md-3">
                          <Link
                            href={`${link.href}`}
                            className="vm_para footer_l f_l py-3"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__end">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6 col-lg-4 order-sm-1 order-lg-0">
                {data.footerBottomTitle ? (
                  <h3 className="title mb-0">{data.footerBottomTitle}</h3>
                ) : (
                  ""
                )}
              </div>

              <div className="col-sm-12 col-lg-5 order-sm-0 order-lg-1">
                <form className="single_form position-relative" action="#">
                  <input
                    type="email"
                    name="email"
                    placeholder="E -posta adresinizi girin ..."
                    required
                  />
                  <button
                    type="submit"
                    className="position-absolute d-flex align-items-center justify-content-center"
                  >
                    <Image src={data.submitArrowImage} alt="submit" />
                  </button>
                </form>
              </div>

              <div className="col-sm-6 col-lg-3 order-sm-2 order-lg-2">
                <p className="vm_para footer_l mb-0 text-center text-sm-end">
                  <span>{data.copyRightText}</span>
                  <a href="#" className="brand_link ms-1">
                    {data.companyName}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
