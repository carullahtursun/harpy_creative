import reviewImage from "@/../public/assets/images/icons/star_b.svg";
import clientOneImage from "@/../public/assets/images/testimonials/client_01.webp";
import clientTwoImage from "@/../public/assets/images/testimonials/client_03.webp";
import clientThreeImage from "@/../public/assets/images/testimonials/client_04.webp";

export default {
  heading: "Explore our client says for our service",
  subHeading: "Best Testimonials",
  clients: [
    {
      name: "Leonardo Cora",
      designation: "UX/UI Specialist For Vmix",
      image: clientOneImage,
      description:
        "Morbi urna ligula, pharetra a euismod venenatis orci Vestibulu tempor leo aliquam odio interdum tincidunt Nulla id pharetra.",
      review: 5.0,
      reviewImage: reviewImage,
    },
    {
      name: "Muhammad Harper",
      designation: "UX/UI Specialist For Vmix",
      image: clientTwoImage,
      description:
        "Etiam non orci nec orci dictum posuere. Suspendisse potenti. Integertempor leo aliquam odio interdum tincidunt Nulla.",
      review: 5.0,
      reviewImage: reviewImage,
    },
    {
      name: "Cora Leonardo",
      designation: "UX/UI Specialist For Vmix",
      image: clientThreeImage,
      description:
        "Fusce eu mauris nec elit volutpat finibus ac id dui tempor leo aliquam odio interdum tincidunt Nulla id pharetra.",
      review: 5.0,
      reviewImage: reviewImage,
    },
  ],
};

export const testimonials = [
  {
    rating: "Average 5.00 rating",
    text: "Morbi urna ligula, pharetra a euismod venenatis orci. Vestibulum tempor leo aliquam odio interdum tincidunt. Nulla id pharetra.",
    role: "UX/UI Specialist For Vmix",
    name: "Leonardo Cora",
    image: "assets/images/testimonials/client_01.webp",
  },
  {
    rating: "Average 4.75 rating",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget odio in justo aliquam auctor sit amet vel nulla.",
    role: "Frontend Developer",
    name: "Jessica Smith",
    image: "assets/images/testimonials/client_02.webp",
  },
  {
    rating: "Average 4.80 rating",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    role: "Marketing Manager",
    name: "Michael Johnson",
    image: "assets/images/testimonials/client_03.webp",
  },
  {
    rating: "Average 4.90 rating",
    text: "Vivamus dignissim sem ac nisi dictum, in placerat leo convallis. Ut fringilla velit in urna tempus luctus.",
    role: "Product Manager",
    name: "Sophia Williams",
    image: "assets/images/testimonials/client_04.webp",
  },
  {
    rating: "Average 4.95 rating",
    text: "Fusce non mi sit amet lorem consequat venenatis ut sit amet lectus. Vivamus quis nulla felis.",
    role: "Graphic Designer",
    name: "David Brown",
    image: "assets/images/testimonials/client_05.webp",
  },
  {
    rating: "Average 4.85 rating",
    text: "Integer sed eros eget odio imperdiet vestibulum. Quisque nec eros lectus. Nullam auctor lacinia ex non vehicula.",
    role: "Content Writer",
    name: "Emily Jones",
    image: "assets/images/testimonials/client_06.webp",
  },
];