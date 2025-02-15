"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { useThemeContext } from "@/context/ThemeContext";
import { desktopMenu } from "@/data/header";
import Image from "next/image";

import logoWhite from "@/../public/assets/images/logo/logo_white.svg";
import logoBlack from "@/../public/assets/images/logo/logo_black.svg";
import arrowRight from "@/../public/assets/images/icons/arrow_right_white.svg";
import menuWhite from "@/../public/assets/images/icons/menu_white.svg";

export default function HeaderThree({ defaultHeader }) {
  const { toggleMobileMenu, isFixedTop } = useThemeContext();
  const [showBox, setShowBox] = useState(false);
  const pathName = usePathname();
  const routePath = pathName == "/" ? pathName : pathName.replace(/^\/+/g, "");

  useEffect(() => {
    const closeSearch = () => {
      setShowBox(false);
    };

    window.addEventListener("click", closeSearch);

    return () => {
      window.removeEventListener("click", closeSearch);
    };
  }, []);

  const checkActiveMenu = (menu) => {
    if (menu.href == "#" && menu.subMenu.length > 0) {
      return menu.subMenu.find((subMenuItem) => subMenuItem.href == routePath)
        ? "active"
        : "";
    }

    return routePath == menu.href ? "active" : "";
  };

  const toggleSearchBox = (e) => {
    e.stopPropagation();
    setShowBox(!showBox);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <header
        className={`header ${defaultHeader ? "bg_black" : "header_white"} ${
          isFixedTop ? "fixed_top" : ""
        }`}
      >
        <div className="header__main mx-auto bg_black row align-items-center">
          <div className="col-6 col-lg-2 p-0">
            <div className="header__left">
              <div className="header__logo">
                <Link href="/">
                  <Image
                    src={logoWhite}
                    alt="logo"
                    className="logo logo_white d-none"
                  />
                  <Image
                    src={logoBlack}
                    alt="logo"
                    className="logo logo_black d-none"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-7 col-lg-8 col-xl-6 d-none d-lg-block p-0">
            <div className="header__center d-flex align-items-center justify-content-center">
              <nav className="mainmenu__nav">
                <ul className="primary-menu nav nav-pills">
                  {desktopMenu.map((menuItem, index) => (
                    <li
                      key={index}
                      className={`nav-item ${
                        menuItem.subMenu.length > 0
                          ? "menu_item_has_children"
                          : ""
                      }`}
                    >
                      {menuItem.subMenu.length > 0 ? (
                        <>
                          <Link
                            className={`nav-link ${checkActiveMenu(menuItem)}`}
                            href={menuItem.href}
                            scroll={false}
                          >
                            {menuItem.label}
                          </Link>
                          <ul className="sub_menu">
                            {menuItem.subMenu.map((subMenuItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subMenuItem.href}
                                  className={`${
                                    routePath == subMenuItem.href
                                      ? "current"
                                      : ""
                                  }`}
                                >
                                  {subMenuItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          className={`nav-link ${checkActiveMenu(menuItem)}`}
                          href={menuItem.href}
                          scroll={false}
                        >
                          {menuItem.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-6 col-lg-2 col-xl-4 p-0">
            <div className="header__right d-flex align-items-center justify-content-end">
              <Link
                href="contact"
                className="vm_btn fill_btn btn_black btn_17_32 translate_none d-none d-xl-inline-block"
              >
                <span className="d-flex align-items-center">
                  <Image src={arrowRight} alt="arrow_right" className="me-3" />
                  Başlayalım
                </span>
              </Link>

              <div className="position-relative flex-shrink-0">
                <div className="search ms-auto">
                  <button
                    className={`header_search_btn ${showBox ? "close" : ""}`}
                    onClick={toggleSearchBox}
                  ></button>
                </div>
                <div
                  className={`header_search_box position-absolute end-0 ${
                    showBox ? "show_box" : ""
                  }`}
                  onClick={stopPropagation}
                >
                  <form
                    className="single_form header_search_form d-flex align-items-center"
                    action="#"
                  >
                    <input
                      type="text"
                      name="search"
                      placeholder="Search query..."
                      required
                      className="search"
                      autoComplete="off"
                    />
                    <button
                      type="submit"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1376_579)">
                          <path
                            d="M23.707 22.293L17.738 16.324C19.3647 14.3346 20.1644 11.7961 19.9719 9.23357C19.7793 6.67103 18.6092 4.28053 16.7036 2.55652C14.798 0.832514 12.3026 -0.0931045 9.73367 -0.0288727C7.16472 0.0353591 4.71873 1.08453 2.90164 2.90162C1.08455 4.71871 0.035382 7.1647 -0.0288498 9.73365C-0.0930816 12.3026 0.832537 14.798 2.55655 16.7036C4.28056 18.6092 6.67106 19.7793 9.23359 19.9718C11.7961 20.1644 14.3346 19.3646 16.324 17.738L22.293 23.707C22.4816 23.8892 22.7342 23.99 22.9964 23.9877C23.2586 23.9854 23.5094 23.8802 23.6948 23.6948C23.8803 23.5094 23.9854 23.2586 23.9877 22.9964C23.99 22.7342 23.8892 22.4816 23.707 22.293ZM10 18C8.41778 18 6.87106 17.5308 5.55546 16.6518C4.23987 15.7727 3.21449 14.5233 2.60899 13.0615C2.00349 11.5997 1.84506 9.99113 2.15374 8.43928C2.46243 6.88743 3.22435 5.46197 4.34317 4.34315C5.46199 3.22433 6.88746 2.4624 8.4393 2.15372C9.99115 1.84504 11.5997 2.00347 13.0615 2.60897C14.5233 3.21447 15.7727 4.23985 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C17.9976 12.121 17.154 14.1545 15.6543 15.6542C14.1545 17.154 12.121 17.9976 10 18Z"
                            fill="#E82B4B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1376_579">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              <button
                className="menu menu_btn flex-shrink-0"
                onClick={toggleMobileMenu}
              >
                <Image src={menuWhite} alt="menu" className="menu_icon" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu toggleMobileMenu={toggleMobileMenu} />
    </>
  );
}
