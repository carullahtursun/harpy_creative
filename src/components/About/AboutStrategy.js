import Image from "next/image";
import { aboutMainData as data } from "@/data/about";


export default function AboutStrategy() {
  return (
    <div
      className="box_hadow mt-lg-5 mt-4 wow animated fadeInUp"
      data-wow-duration="1.5s"
      data-wow-delay="0.4s"
    >
      <div className="row">
        {data.services.map((service, index) => <div key={index} className="col-4 border_right_1 p-4">
          <div className="ps-3">
            <Image src={service.icon} alt="svg_img" />
            <h5 className="color_black mt-3 mb-0">{service.name}</h5>
          </div>
        </div>)}
      </div>
    </div>
  );
}
