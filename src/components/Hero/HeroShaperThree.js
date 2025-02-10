import Image from "next/image";
import HomeThreeTopLeft from "@/../public/assets/images/hero/positional_element/hm3_top_left.svg";
import HomeThreeTopRight from "@/../public/assets/images/hero/positional_element/hm3_top_right.svg";
import HomeThreeBottomRight from "@/../public/assets/images/hero/positional_element/hm3_bottom_right.svg";
import HomeThreeBottomLeftOne from "@/../public/assets/images/hero/positional_element/hm3_bottom_left_1.svg";
import HomeThreeBottomLeftTwo from "@/../public/assets/images/hero/positional_element/hm3_bottom_left_2.svg";

export default function HeroShapeThree() {
  return (
    <>
      <Image
        src={HomeThreeTopLeft}
        alt="home_three_top_left"
        className="hm3_top_left position-absolute top-0 start-0 img-fluid"
      />
      <Image
        src={HomeThreeTopRight}
        alt="home_three_top_right"
        className="hm3_top_right position-absolute top-0 end-0 img-fluid"
      />
      <Image
        src={HomeThreeBottomRight}
        alt="home_three_bottom_right"
        className="hm3_bottom_right position-absolute bottom-0 end-0 img-fluid"
      />
      <Image
        src={HomeThreeBottomLeftOne}
        alt="home_three_bottom_left_one"
        className="hm3_bottom_left_1 position-absolute bottom-0 start-0 img-fluid"
      />
      <Image
        src={HomeThreeBottomLeftTwo}
        alt="home_three_bottom_left_two"
        className="hm3_bottom_left_2 position-absolute bottom-0 start-0 img-fluid"
      />
    </>
  );
}
