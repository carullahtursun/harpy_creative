import React from "react";
import BreadCrumb from "@/components/Common/BreadCrumb";
import VimixLayout from "@/components/Layout/VimixLayout";
import TeamCta from "@/components/Teams/TeamCta";
import TeamMemberCard from "@/components/Teams/TeamMemberCard";

import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <VimixLayout>
      <BreadCrumb
        pageTitle="Team Page"
        activePage="Teams"
        breadCrumbBg="assets/images/breadcrumb/team.webp"
      />
      <section className="team pt_150">
        <div className="container">
          <div className="row row-gap-lg-5 row-gap-4">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                imageUrl={member.imageUrl}
                name={member.name}
                role={member.role}
              />
            ))}
          </div>
        </div>
      </section>
      <TeamCta />
    </VimixLayout>
  );
}
