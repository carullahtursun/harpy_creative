import chartOne from "@/../public/assets/images/why_us/chart-trans-1.webp";
import chartTwo from "@/../public/assets/images/why_us/chart-trans-2.png";
import chartThree from "@/../public/assets/images/why_us/chart-trans-3.png";

export default {
  subHeading: "Why Choose Us",
  heading: "Explore Why Choose Our Best We're Offering",
  tabs: [
    {
      id: "experience",
      isActive: false,
      tabText: "Experience & Expertise",
      title: "Experience & Expertise",
      lineOne:
        "To increase clients and build trust in your business, showcasing your experience and expertise is essential. Here's how you can effectively communicate these qualities:",
      lineTwo:
        "Continuous learning demonstrate a commitment to staying forefront of your field.",
      btnText: "Read More",
      image: chartOne,
    },
    {
      id: "customer_satisfaction",
      isActive: true,
      tabText: "Customer Satisfaction",
      title: "Increasing Clients",
      lineOne:
        "Increasing business involves a combination of effective clients for a marketing, customer relationship management, and delivering exceptional products or services. variations of passages",
      lineTwo:
        "Utilize social media platforms to engage potential clients and share valuable content.",
      btnText: "Read More",
      image: chartTwo,
    },
    {
      id: "trust_reliablity",
      isActive: false,
      tabText: "Trust and Reliability",
      title: "Trust and Reliability",
      lineOne:
        "Building trust and reliability is essential for any business looking to attract and retain Keep clients informed about project progress, changes, and any potential issues.",
      lineTwo:
        "Establish clear and fair policies regarding pricing, refunds, and deliverables.",
      btnText: "Read More",
      image: chartThree,
    },
  ],
};
