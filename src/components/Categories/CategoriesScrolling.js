import React from "react";
import categories from "@/data/category";

export default function CategoriesScrolling() {
  return (
    <section className="categories pt_150">
      <ul className="categories__list scroll_animate d-flex align-items-center">
        {categories.map((category, index) => (
          <li key={index} className="categories_item mb-0">
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
