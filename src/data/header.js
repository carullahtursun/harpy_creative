const menuItems = [
  {
    label: "Home",
    href: "#",
    subMenu: [
      { label: "Home 01", href: "/" },
      { label: "Home 02", href: "home-two" },
      { label: "Home 03", href: "home-three" },
    ],
  },
  {
    label: "About Us",
    href: "about",
    subMenu: [],
  },
  {
    label: "Service",
    href: "#",
    subMenu: [
      { label: "Service", href: "service" },
      { label: "Service Details", href: "service-details" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    subMenu: [
      { label: "Portfolio", href: "portfolio" },
      { label: "Portfolio Details", href: "portfolio-details" },
      { label: "Team", href: "team" },
      { label: "Testimonials", href: "testimonial" },
      { label: "Pricing", href: "pricing" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    subMenu: [
      { label: "Blog", href: "blog" },
      { label: "Blog Grid", href: "blog-grid" },
      { label: "Blog Details", href: "blog-details" },
    ],
  },
  {
    label: "Contact Us",
    href: "contact",
    subMenu: [],
  },
  // Add more menu items as needed
];

const desktopMenu = [
  {
    label: "Home",
    href: "#",
    subMenu: [
      { label: "Home 01", href: "/" },
      { label: "Home 02", href: "home-two" },
      { label: "Home 03", href: "home-three" },
    ],
  },
  {
    label: "About Us",
    href: "about",
    subMenu: [],
  },
  {
    label: "Service",
    href: "#",
    subMenu: [
      { label: "Service", href: "service" },
      { label: "Service Details", href: "service-details" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    subMenu: [
      { label: "Portfolio", href: "portfolio" },
      { label: "Portfolio Details", href: "portfolio-details" },
      { label: "Team", href: "team" },
      { label: "Testimonial", href: "testimonial" },
      { label: "Pricing", href: "pricing" },
      { label: "404 Page", href: "not-found" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    subMenu: [
      { label: "Blog", href: "blog" },
      { label: "Blog Grid", href: "blog-grid" },
      { label: "Blog Details", href: "blog-details" },
    ],
  },
  {
    label: "Contact Us",
    href: "contact",
    subMenu: [],
  },
];

export { menuItems, desktopMenu };
