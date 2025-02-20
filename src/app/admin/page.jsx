'use client';

import React, {useState, useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {useThemeContext} from "@/context/ThemeContext";
import {desktopMenu} from "@/data/header";

import logoWhite from "@/../public/assets/images/logo/logo_white.svg";
import logoBlack from "@/../public/assets/images/logo/logo_black.svg";
import phoneVolumeRed from "@/../public/assets/images/icons/phone_volume_red.svg";
import menuWhite from "@/../public/assets/images/icons/menu_white.svg";
import CategoryForm from "./components/CategoryForm";
import PortfolioForm from "./components/PortfolioForm";

export default function AdminPanel() {
    const {toggleMobileMenu, isFixedTop} = useThemeContext();
    const [activePage, setActivePage] = useState("blog");
    const pathName = usePathname();
    const routePath = pathName == "/" ? pathName : pathName.replace(/^\/+/g, "");

    console.log("sdfsdfs",process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
    return (
        <>
            <header className={`header bg_black ${isFixedTop ? "fixed_top" : ""}`}>
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

                                    <li
                                        className={`nav-item `}
                                    >
                                        <>
                                            <Link
                                                className={`nav-link ${
                                                    activePage === "blog"
                                                        ? "active"
                                                        : ""
                                                }`}
                                                href={"#"}
                                                scroll={false}
                                                onClick={() => setActivePage("blog")}
                                            >
                                                Blog Ekle
                                            </Link>
                                        </>

                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </header>
            <div className="d-flex justify-content-center mt-5">
                <div className="bg-dark text-white shadow-lg p-4 w-100">
                    {activePage === "category" ? <CategoryForm/> : <PortfolioForm/>}
                </div>
            </div>
        </>
    );
}
