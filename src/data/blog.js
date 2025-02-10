import Blog_1 from "@/../public/assets/images/blog/blog-1.webp";
import Blog_2 from "@/../public/assets/images/blog/blog-2.webp";
import Blog_3 from "@/../public/assets/images/blog/blog-3.webp";
import Blog_4 from "@/../public/assets/images/blog/blog-4.webp";
import Blog_5 from "@/../public/assets/images/blog/blog-5.webp";
import Blog_6 from "@/../public/assets/images/blog/blog-6.webp";

import LatestBlogImageOne from "@/../public/assets/images/blog/blog-1.webp";
import LatestBlogImageTwo from "@/../public/assets/images/blog/blog-2.webp";
import LatestBlogImageThree from "@/../public/assets/images/blog/blog-3.webp";

export default [
  {
    imageUrl: Blog_1,
    title: "Best Digital Agency Websites to Inspire Your Agency’s Brand",
    date: { day: 12, month: "Aug" },
    commentCount: 5,
    slug: "blog-details",
  },
  {
    imageUrl: Blog_2,
    title: "10 Tips for Effective Email Marketing Campaigns",
    date: { day: 15, month: "Sep" },
    commentCount: 8,
    slug: "blog-details",
  },
  {
    imageUrl: Blog_3,
    title: "The Importance of Mobile-Friendly Websites",
    date: { day: 20, month: "Oct" },
    commentCount: 12,
    slug: "blog-details",
  },
  {
    imageUrl: Blog_4,
    title: "How to Create Engaging Content for Social Media",
    date: { day: 5, month: "Nov" },
    commentCount: 6,
    slug: "blog-details",
  },
  {
    imageUrl: Blog_5,
    title: "The Power of Video Marketing: Tips and Strategies",
    date: { day: 18, month: "Dec" },
    commentCount: 10,
    slug: "blog-details",
  },
  {
    imageUrl: Blog_6,
    title: "SEO Trends to Watch Out for in the Coming Year",
    date: { day: 3, month: "Jan" },
    commentCount: 7,
    slug: "blog-details",
  },
];

export const latestBlogData = {
  heading: "We solution with the Our Latest News & Blogs",
  subHeading: "Best news and blogs",
  blogs: [
    {
      image: LatestBlogImageOne,
      title: "Best Digital Agency Websites to geo Inspire Your Agency's Brand",
      day: "12",
      month: "Aug",
      commentsCount: "05",
    },
    {
      image: LatestBlogImageTwo,
      title:
        "While I don't have real-time access to the internet and my training",
      day: "01",
      month: "Jun",
      commentsCount: "10",
    },
    {
      image: LatestBlogImageThree,
      title: "Dribbble is a community of designers sharing screenshots their",
      day: "17",
      month: "Mar",
      commentsCount: "05",
    },
  ],
};

import CommentIcon from "@/../public/assets/images/icons/comment_icon.svg";
import BlogBanner from "@/../public/assets/images/blog/blog-details.webp";
import Author_1 from "@/../public/assets/images/blog/author-1.webp";
import Visitor_1 from "@/../public/assets/images/blog/visitor-1.webp";
import Visitor_2 from "@/../public/assets/images/blog/visitor-2.webp";
import SidebarBg from "@/../public/assets/images/about_us/sidebar.svg";

import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

export const blogDetail = {
  postDetail: {
    commentIcon: CommentIcon,
    blogBanner: BlogBanner,
    title: "Best Digital Agency Websites to geo Inspire Your Agency's.",
    subTitleOne: "Where does it come from template",
    subTitleTwo: "Figma template design",
    day: "12",
    month: "Aug",
    commentCount: "02",
    paraOne: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remainig essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.",
    paraTwo: "Duis sed augue condimentum, blandit sapien in, accumsan eros. Curabitur sodales pulvinar libero et venenatis. Nullam eleifend risus a quam dictum auctor. Mauris at leo non dui euismod varius. Cras vel erat at est aliquam laoreet. Donec tincidunt, nunc eu gravida malesuada, tellus leo.",
    paraThree: "Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus felis. Vivamus sed neque iaculis, ultrices nulla eu, venenatis dui. Praesent luctus urna eu dapibus pulvinar. Curabitur sed magna accumsan neque fermentum laoreet. Ut nunc Mauris at leo non dui euismod varius.",
    paraFour: "Duis sed augue condimentum, blandit sapien in, accumsan eros. Curabitur sodales pulvinar libero et venenatis. Nullam eleifend risus a quam dictum auctor. Mauris at leo non dui euismod varius. Cras vel erat at est aliquam laoreet. Donec tincidunt, nunc eu gravida malesuada, tellus leo.",
    paraFive: "Maecenas sed tortor molestie, sagittis nibh sit amet, dapibus felis. Vivamus sed neque iaculis, ultrices nulla eu, venenatis dui. Praesent luctus urna eu dapibus pulvinar. Curabitur sed magna accumsan neque fermentum laoreet. Ut nunc Mauris at leo non dui euismod varius.",
    faqs: [
      "Will you provide website layout about design",
      "Branding With Business Agency",
      "Why should I work with an agency over a freelancer",
      "How much do you charge for branding",
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
    ],
    categories: [
      {
        link: "/",
        name: "Creative",
      },
      {
        link: "/",
        name: "Consultant",
      },
      {
        link: "/",
        name: "Business",
      },
    ]
  },
  author: {
    name: "Alvia rahmilo bayo",
    paraOne: "Fusce condimentum enim vestibulum libero gravida, ut accumsan quam",
    paraTwo: "bibendum. Curabitur gravida est sit amet cursus.",
    image: Author_1,
  },
  relatedBlog: {
    heading: "We solution with the Our Latest News & Blogs",
    subHeading: "Best news and blogs",
    posts: [
      {
        image: Blog_1,
        title: "The shift towards sustainability is not just a moral conscien",
        day: "12",
        month: "Jan",
        commentCount: "02",
      },
      {
        image: Blog_2,
        title: "Sustainability in business goes beyond merely conscien",
        day: "07",
        month: "Feb",
        commentCount: "15",
      },
    ],
  },
  comment:
    {
      commentCount: "02",
      comments: [
        {
          image: Visitor_1,
          name: "Monsur Rahman Lito",
          description: "Phasellus ac consequat turpis, sit amet fermentum nulla. Donec dignissim augue nunc. Praesent bibendum erat ac lectus lobortis.",
          replyBtnText: "Reply",
          replies: [
            {
              image: Visitor_2,
              name: "Towkibur Rahman",
              description: "Phasellus ac consequat turpis, sit amet fermentum nulla. Donec dignissim augue nunc. Praesent bibendum erat ac lectus lobortis.",
            }
          ]
        }
      ],
    },
    commentForm: {
      title: "Leave a Comment",
      nameLabel: "Your Name",
      namePlaceholder: "Enter Your Name",
      mailLabel: "Your Mail",
      mailPlaceholder: "Enter Your Mail",
      messageLabel: "Message",
      messagePlaceholder: "Write your message",
      description: "Call us 24/7 or fill out the form below to receive a free.",
    },
    sidebar: {
      title: "Service List",
      categories: [
        {
          link: "/",
          name: "Uncategorized",
        },
        {
          link: "/",
          name: "Marketing",
        },
        {
          link: "/",
          name: "Agency",
        },
        {
          link: "/",
          name: "Creative",
        },
        {
          link: "/",
          name: "Consulting",
        },
        {
          link: "/",
          name: "Finance",
        },
      ],
      socialLinks: [
        {
          link: "/",
          icon: <Facebook />,
        },
        {
          link: "/",
          icon: <Twitter />,
        },
        {
          link: "/",
          icon: <Instagram />,
        },
        {
          link: "/",
          icon: <Linkedin />,
        },
      ],
      cta: {
        image: SidebarBg,
        title: "Have Any Query Feel Free Contact",
        phone: "(1)245-45678 call",
      }
    },
};
