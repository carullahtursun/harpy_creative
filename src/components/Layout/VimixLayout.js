"use client";
import { vimixUtils } from "@/utils";
import React, { useEffect } from "react";
import Footer from "../Footer/Footer";

export default function VimixLayout({ children }) {
  useEffect(() => {
    vimixUtils.animaiton();
  }, []);
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
