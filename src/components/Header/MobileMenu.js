"use client";
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  X,
} from "react-feather";
import { menuItems } from "@/data/header";
import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logoWhite from "@/../public/assets/images/logo/Logo_Horizon_Creative_white.svg";

export default function MobileMenu() {
  const {
    openSubMenuIndex,
    setOpenSubMenuIndex,
    toggleSubMenu,
    toggleMobileMenu,
  } = useThemeContext();
  const pathName = usePathname();
  const routePath = pathName == "/" ? pathName : pathName.replace(/^\/+/g, "");

  const checkActiveMenu = (menu) => {
    if (menu.href == "#" && menu.subMenu.length > 0) {
      return menu.subMenu.find((subMenuItem) => subMenuItem.href == routePath)
        ? "active"
        : "";
    }

    return routePath == menu.href ? "active" : "";
  };

  const hideMobileMenu = (index = null) => {
    toggleMobileMenu();
    setOpenSubMenuIndex(index);
  };

  return (
    <div className="popup_mobile_menu">
      <div className="c-backdrop" onClick={toggleMobileMenu}></div>
      <div className="menu">
        <div className="menu__top">
          <div className="menu_header d-flex align-items-center justify-content-between">
            <Link className="logo" href="/">
              <Image src={logoWhite} alt="logo_white" />
            </Link>
            <div className="close_button d-flex align-items-center justify-content-center">
              <button className="close" onClick={toggleMobileMenu}>
                <X />
              </button>
            </div>
          </div>
          <p className="menu_discription">
            Dijital dünyada markanızı öne çıkarmak için buradayız. Yapay zeka destekli çözümler, etkileyici dijital pazarlama stratejileri, profesyonel post prodüksiyon ve marka kimliği hizmetlerimizle sizinleyiz.
          </p>

        </div>

        <div className="menu__content mobile_menu_nav">
          <ul className="menu_list d-flex d-lg-none flex-column">
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={`menu_list__item ${
                  menuItem.subMenu.length > 0
                    ? "mobile_menu_item_has_children"
                    : ""
                } ${openSubMenuIndex === index ? "is_toggle" : ""}`}
              >
                <Link
                  className={`menu_list__link ${checkActiveMenu(menuItem)}`}
                  href={menuItem.subMenu.length > 0 ? "#" : menuItem.href}
                  onClick={(event) =>
                    menuItem.subMenu.length > 0
                      ? toggleSubMenu(index, event)
                      : hideMobileMenu(null)
                  }
                  scroll={false}
                >
                  {menuItem.label}
                </Link>
                {menuItem.subMenu.length > 0 && (
                  <ul
                    className={`sub_menu ${
                      openSubMenuIndex === index ? "open" : ""
                    }`}
                  >
                    {menuItem.subMenu.map((subMenuItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subMenuItem.href}
                          className={`${
                            routePath == subMenuItem.href ? "current" : ""
                          }`}
                          onClick={() => hideMobileMenu(index)}
                        >
                          {subMenuItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <ul className="address d-none d-lg-block">
            <li>
              <div>
                <MapPin />
              </div>
              <p className="text-white mb-0">
                İstanbul, Türkiye
              </p>
            </li>
            <li>
              <div>
                <Phone />
              </div>
              <div className="d-flex flex-column">
                <a href="tel:+88011223344">+90 552 474 8188</a>
                <a href="tel:+88011223344">+90 507 166 0967</a>
              </div>
            </li>
            <li>
              <div>
                <Mail />
              </div>
              <div className="d-flex flex-column">
                <a href="#">
                  harpyemre@gmail.com
                  </a>
                <a href="#">
                  imranharpy@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="social_share">
          <p className="social_share__title">Bizi bul</p>
          <ul className="social_share__list d-flex align-items-center m-0 p-0">
            {/* <li className="facebook d-flex align-items-center justify-content-center">
              <a href="#" className="social_share__list_link">
                <Facebook />
              </a>
            </li> */}
            <li className="instagram d-flex align-items-center justify-content-center">
              <a href="https://www.instagram.com/harpycreative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
               className="social_share__list_link"
                target="_blank"
                rel="noopener noreferrer"
               >
                <Instagram />
              </a>
            </li>
            {/* <li className="linkedin d-flex align-items-center justify-content-center">
              <a href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social_share__list_link">
                <Twitter />
              </a>
            </li>
            <li className="linkedin d-flex align-items-center justify-content-center">
              <a href="#" className="social_share__list_link"
              target="_blank"
              rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
