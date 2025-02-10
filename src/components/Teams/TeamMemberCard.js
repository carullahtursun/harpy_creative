import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import Link from "next/link";
import Image from "next/image";

const TeamMemberCard = ({ imageUrl, name, role }) => {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="vm_team">
        <div className="vm_team__thumb position-relative">
          <Link href="team">
            <Image src={imageUrl} alt="team_member" />
          </Link>
          <ul className="social_list d-flex align-items-center flex-column position-absolute m-0 p-0">
            <li className="social_list__item d-flex align-items-center justify-content-center">
              <Link href="/" className="social_list__link">
                <Facebook />
              </Link>
            </li>
            <li className="social_list__item d-flex align-items-center justify-content-center">
              <Link href="/" className="social_list__link">
                <Instagram />
              </Link>
            </li>
            <li className="social_list__item d-flex align-items-center justify-content-center">
              <Link href="/" className="social_list__link">
                <Twitter />
              </Link>
            </li>
            <li className="social_list__item d-flex align-items-center justify-content-center">
              <Link href="/" className="social_list__link">
                <Linkedin />
              </Link>
            </li>
          </ul>
        </div>
        <div className="vm_team__content text-center">
          <p className="name mb-1">{name}</p>
          <p className="vm_para mb-0">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
