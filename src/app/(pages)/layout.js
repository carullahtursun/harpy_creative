import HeaderThree from "@/components/Header/HeaderThree";
import React from "react";
import HeaderOne from "@/components/Header/HeaderOne";

export default function OtherPagesLayout({ children }) {
  return (
    <>
      <HeaderOne />
      {children}
    </>
  );
}
