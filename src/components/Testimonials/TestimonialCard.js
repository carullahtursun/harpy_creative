import React from "react";

const TestimonialCard = ({ rating, text, role, name, image }) => {
  return (
    <div
      className="col-lg-6 wow animated fadeInLeft"
      data-wow-duration="1.5s"
      data-wow-delay="0.2s"
    >
      <div
        className="vm_testimonial"
        style={{
          backgroundImage:
            "url('assets/images/testimonials/testimonial_bg.png')",
        }}
      >
        <div className="vm_testimonial__header d-flex align-items-end justify-content-between gap-3">
          <div className="rating">
            <p className="vm_para mb-1">{rating}</p>
            <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-1">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="assets/images/icons/star_b.svg"
                  alt="star"
                />
              ))}
            </div>
          </div>
          <div className="vm_testimonial__img_inner">
            <img src={image} alt="testimonial_img" />
          </div>
        </div>
        <p className="vm_testimonial__text">{text}</p>
        <p className="vm_para mb-1">{role}</p>
        <h4 className="mb-0">{name}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
