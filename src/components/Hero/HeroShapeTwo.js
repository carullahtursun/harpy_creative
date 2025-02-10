import Image from "next/image";

import hTwoWeb from "@/../public/assets/images/hero/positional_element/h2_wave.svg";
import hTwoTopRight from "@/../public/assets/images/hero/positional_element/h2_top_right.svg";
import bottomLeft from "@/../public/assets/images/hero/positional_element/h2_bottom_left.svg";
import bottomLeftOne from "@/../public/assets/images/hero/positional_element/bottom_left_01.svg";

export default function HeroShapeTwo() {
  return (
    <>
      <div className="hm2_circle position-absolute start-50 translate-middle"></div>
      <Image src={hTwoWeb} alt="wave" className="position-absolute hm2_wave" />
      <Image
        src={hTwoTopRight}
        alt="h2_top_right"
        className="cloud_shape position-absolute top-0 end-0"
      />
      <Image
        src={bottomLeft}
        alt="h2_bottom_left"
        className="hm2_bottom_left position-absolute bottom-0 start-0"
      />
      <Image
        src={bottomLeftOne}
        alt="bottom_left_one"
        className="bottom_left_01 position-absolute bottom-0 start-0"
      />
    </>
  );
}
