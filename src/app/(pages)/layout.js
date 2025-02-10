import HeaderThree from "@/components/Header/HeaderThree";
import React from "react";

export default function OtherPagesLayout({ children }) {
  return (
    <>
      <HeaderThree />
      {children}
    </>
  );
}
