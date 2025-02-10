import React from "react";
import { ArrowUpRight } from "react-feather";
import Link from "next/link";

export default function ServiceThree() {
  return (
    <div className="services pt_140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-7 text-center">
            <p className="section_subtitle">Why Choose Us</p>
            <h2 className="section_title mt-2">
              We have bright a new digital work system for you
            </h2>
          </div>
        </div>
        <div className="row row-gap-3 mt-4">
          <div className="col-sm-6 col-lg-3 d-flex justify-content-center">
            <div
              className="vm_service text-start wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <img
                src="assets/images/services/strategy_plan.svg"
                alt="strategy_plan"
              />

              <div className="content">
                <h4 className="title">
                  <Link href="service" className="position-relative">
                    Stratagy Plan
                    <ArrowUpRight />
                  </Link>
                </h4>
                <p className="vm_para">
                  Creating a strategic plan is a critical process for
                </p>
                <ul className="list p-0">
                  <li className="list_item">Brand Strategy</li>
                  <li className="list_item">Brand Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 d-flex justify-content-center">
            <div
              className="vm_service text-start wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
            >
              <img
                src="assets/images/services/email_marketing.svg"
                alt="email_marketing"
              />

              <div className="content">
                <h4 className="title">
                  <Link href="service" className="position-relative">
                    Email Marketing
                    <ArrowUpRight />
                  </Link>
                </h4>
                <p className="vm_para">
                  Email marketing is a powerful tool for businesses to connect
                </p>
                <ul className="list p-0">
                  <li className="list_item">Add Email Marketing</li>
                  <li className="list_item">Web Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 d-flex justify-content-center">
            <div
              className="vm_service text-start wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.6s"
            >
              <img
                src="assets/images/services/content_marketing.svg"
                alt="content_marketing"
              />

              <div className="content">
                <h4 className="title">
                  <Link href="service" className="position-relative">
                    Content Marketing
                    <ArrowUpRight />
                  </Link>
                </h4>
                <p className="vm_para">
                  Content marketing is a strategic approach focused on creating
                </p>
                <ul className="list p-0">
                  <li className="list_item">Content Spiking</li>
                  <li className="list_item">Monthly Support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 d-flex justify-content-center">
            <div
              className="vm_service text-start wow animated fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.8s"
            >
              <img
                src="assets/images/services/seo_optimization.svg"
                alt="seo_optimization"
              />
              <div className="content">
                <h4 className="title">
                  <Link href="service" className="position-relative">
                    SEO Optimization
                    <ArrowUpRight />
                  </Link>
                </h4>
                <p className="vm_para">
                  Utilize tools like Google Keyword Planner to discover
                </p>
                <ul className="list p-0">
                  <li className="list_item">Google SEO</li>
                  <li className="list_item">Online Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
