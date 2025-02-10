import Image from "next/image";
import React from "react";
import partners from "@/data/partner";

export default function PartnerScrolling() {
  return (
    <section className="partners pt_100">
      <div className="container d-flex overflow-hidden">
        <ul className="partners__list d-flex align-items-center justify-content-center m-0 p-0">
          {partners.map((partner, index) => (
            <li key={index}>
              <Image
                src={partner.src}
                alt={partner.title ?? 'partners_brand'}
                className="partners__brand"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
