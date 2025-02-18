// Portfolio One
import portfolioOneImg from "@/../public/assets/images/portfolio/portfolio_01.webp";
import portfolioTwoImg from "@/../public/assets/images/portfolio/portfolio_02.webp";
import portfolioThreeImg from "@/../public/assets/images/portfolio/portfolio_03.webp";
import portfolioFourImg from "@/../public/assets/images/portfolio/portfolio_04.webp";
import portfolioFiveImg from "@/../public/assets/images/portfolio/portfolio_05.webp";
import portfolioSixImg from "@/../public/assets/images/portfolio/portfolio_06.webp";
import portfolioSevenImg from "@/../public/assets/images/portfolio/portfolio_07.webp";
import portfolioEightImg from "@/../public/assets/images/portfolio/portfolio_08.webp";
import portfolioTenImg from "@/../public/assets/images/portfolio/portfolio_10.webp";
import portfolioFifteenImg from "@/../public/assets/images/portfolio/portfolio_15.webp";
import portfolioSixteenImg from "@/../public/assets/images/portfolio/portfolio_16.webp";
import portfolioEighteenImg from "@/../public/assets/images/portfolio/portfolio_18.webp";
import portfolioNineteenImg from "@/../public/assets/images/portfolio/portfolio_19.webp";
import portfolioTwentyImg from "@/../public/assets/images/portfolio/portfolio_20.webp";
import portfolioTwentyOneImg from "@/../public/assets/images/portfolio/portfolio_21.webp";
import portfolioTwentyTwoImg from "@/../public/assets/images/portfolio/portfolio_22.webp";
import portfolioTwentyThreeImg from "@/../public/assets/images/portfolio/portfolio_23.webp";

export const portfolioOneData = {
  title: "Explore Our Special Top Project",
  subTitle: "Our Project",
  slides: [
    [
      portfolioOneImg,
      portfolioTwoImg,
      portfolioThreeImg,
      portfolioFourImg,
      portfolioFiveImg,
      portfolioSixImg,
      portfolioSevenImg,
      portfolioEightImg,
    ],
    [
      portfolioOneImg,
      portfolioTwoImg,
      portfolioThreeImg,
      portfolioFourImg,
      portfolioFiveImg,
      portfolioSixImg,
      portfolioSevenImg,
      portfolioEightImg,
    ],
  ],
};

// Portfolio Two
export const portfolioTwoData = {
  subHeading: "En İyi İş",
  heading: "Parlak yeni bir dijital çalışma vitrimiz var",
  slides: [
    [
      portfolioOneImg,
      portfolioThreeImg,
      portfolioFourImg,
      portfolioFiveImg,
      portfolioSixImg,
      portfolioEightImg,
    ]
    /*[
      portfolioOneImg,
      portfolioThreeImg,
      portfolioFourImg,
      portfolioFiveImg,
      portfolioSixImg,
      portfolioEightImg,
    ],*/
  ],
};

// Portfolio full width
export const portfolioFullWidth = [
  {
    image: portfolioFifteenImg,
    size: 3,
  },
  {
    image: portfolioSixteenImg,
    size: 6,
  },
  {
    image: portfolioFifteenImg,
    size: 3,
  },
  {
    image: portfolioEighteenImg,
    size: 4,
  },
  {
    image: portfolioNineteenImg,
    size: 4,
  },
  {
    image: portfolioTwentyImg,
    size: 4,
  },
];

// Portfolio with filter
export const portfolioWithFilter = [
  {
    image: portfolioTenImg,
    category: "web_design",
  },
  {
    image: portfolioTwoImg,
    category: "web_design",
  },
  {
    image: portfolioThreeImg,
    category: "web_design",
  },
  {
    image: portfolioFourImg,
    category: "web_development",
  },
  {
    image: portfolioFiveImg,
    category: "web_development",
  },
  {
    image: portfolioSevenImg,
    category: "web_development",
  },
  {
    image: portfolioSixImg,
    category: "graphic_design",
  },
  {
    image: portfolioEightImg,
    category: "graphic_design",
  },
  {
    image: portfolioTwentyOneImg,
    category: "graphic_design",
  },
  {
    image: portfolioTwentyTwoImg,
    category: "web_design",
  },
  {
    image: portfolioTwentyThreeImg,
    category: "web_development",
  },
];

import PortfoliBannerImage from "@/../public/assets/images/portfolio/portfolio-details.webp";
import PortfoliDetails_1 from "@/../public/assets/images/portfolio/portfolio-details-1.webp";
import PortfoliDetails_2 from "@/../public/assets/images/portfolio/portfolio-details-2.webp";
import PortfoliDetails_3 from "@/../public/assets/images/portfolio/portfolio-details-3.webp";
import PortfoliDetails_4 from "@/../public/assets/images/portfolio/portfolio-details-4.webp";

export const portfolioDetailData = {
  title: "Website for Creative Ux/ui Design for business service",
  paraOne:
    "Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus felis Maecenas sed tortor molestie, sagittis nibh.",
  paraTwo:
    "Duis sed augue condimentum, blandit sapien in, accumsan eros. Curabitur sodales pulvinar libero et venenatis. Nullam eleifend risus a quam dictum auctor. Mauris at leo non dui euismod varius. Cras vel erat at est aliquam laoreet. Donec tincidunt, nunc eu gravida malesuada, tellus leo.Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus felis Maecenas sed tortor molestie, sagittis nibh.",
  clientName: "MD Towkib Tanvir (MG)",
  timeframe: "August 05, 2024",
  website: "www.creativemela.com",
  categories: [
    {
      link: "/",
      name: "Elementary Pro",
    },
    {
      link: "/",
      name: "Wordpress",
    },
  ],
  items: [
    {
      name: "Regular",
      value: "This Is Text Message",
    },
    {
      name: "Medium",
      value: "Medium Typography",
    },
    {
      name: "SemiBold",
      value: "Just Amazing",
    },
    {
      name: "Blod",
      value: "Awesome",
    },
  ],
  portfolioBannerImage: PortfoliBannerImage,
  portfolioImageOne: PortfoliDetails_1,
  portfolioImageTwo: PortfoliDetails_2,
  portfolioImageThree: PortfoliDetails_3,
  portfolioImageFour: PortfoliDetails_4,
};
