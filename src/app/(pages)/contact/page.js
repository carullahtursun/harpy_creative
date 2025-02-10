import BreadCrumb from "@/components/Common/BreadCrumb";
import ContactInfoCard from "@/components/Contacts/ContactInfoCard";
import FullWidthMap from "@/components/Contacts/FullWidthMap";
import VimixLayout from "@/components/Layout/VimixLayout";
import React from "react";

export default function Contact() {
  return (
    <VimixLayout>
      <BreadCrumb
        pageTitle="Contact Page"
        activePage="Contact"
        breadCrumbBg="assets/images/breadcrumb/contact.webp"
      />
      <FullWidthMap />
      <ContactInfoCard />
    </VimixLayout>
  );
}
