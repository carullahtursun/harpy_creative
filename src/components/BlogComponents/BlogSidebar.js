import React from "react";

import SidebarSearch from "./SidebarSearch";
import SidebarCategory from "./SidebarCategory";
import SidebarSocialLinks from "./SidebarSocialLinks";
import SidebarCta from "./SidebarCta";

export default function BlogSidebar() {
  return (
    <aside className="widget_area">
      <SidebarSearch />
      <SidebarCategory />
      <SidebarSocialLinks />
      <SidebarCta />
    </aside>
  );
}
