import Image from "next/image";

import bottomLeftOne from "@/../public/assets/images/hero/positional_element/bottom_left_01.svg";
import bottomLeft from "@/../public/assets/images/hero/positional_element/bottom_left.svg";
import topLeftOne from "@/../public/assets/images/hero/positional_element/top_left_01.svg";
import topLeftTwo from "@/../public/assets/images/hero/positional_element/top_left_02.svg";
import topLeftThree from "@/../public/assets/images/hero/positional_element/top_left_03.svg";
import roundTop from "@/../public/assets/images/hero/positional_element/round_top.svg";
import rightRight from "@/../public/assets/images/hero/positional_element/right_right.svg";
import bottomRightGray from "@/../public/assets/images/hero/positional_element/bottom_right_gray.svg";
import bottomRightRed from "@/../public/assets/images/hero/positional_element/bottom_right_red.svg";
import arrowHero from "@/../public/assets/images/hero/positional_element/arrow_hero.png";

export default function HeroShapeOne() {
  return (
    <>
      <Image
        src={bottomLeftOne}
        alt="bottom_left_one"
        className="bottom_left_01 position-absolute bottom-0 start-0 img-fluid"
      />
      <Image
        src={bottomLeft}
        alt="bottom_left"
        className="bottom_left position-absolute bottom-0 start-0 img-fluid"
      />
      <Image
        src={topLeftOne}
        alt="top_left_one"
        className="top_left_01 position-absolute top-0 start-0 img-fluid"
      />
      <Image
        src={topLeftTwo}
        alt="top_left_two"
        className="top_left_02 position-absolute top-0 start-0 img-fluid"
      />
      <Image
        src={topLeftThree}
        alt="top_left_three"
        className="top_left_03 position-absolute top-0 start-0 img-fluid"
      />
      <Image
        src={roundTop}
        alt="round_top"
        className="round_top position-absolute top-0 img-fluid"
      />
      <Image
        src={rightRight}
        alt="right_right"
        className="right_right position-absolute top-0 end-0 img-fluid"
      />
      <Image
        src={bottomRightGray}
        alt="bottom_right_gray"
        className="bottom_right_gray position-absolute bottom-0 end-0 img-fluid"
      />
      <Image
        src={bottomRightRed}
        alt="bottom_right_red"
        className="bottom_right_red position-absolute bottom-0 end-0 img-fluid"
      />
      <Image
        src={arrowHero}
        alt="arrow_hero"
        className="arrow_hero position-absolute img-fluid"
      />
    </>
  );
}
