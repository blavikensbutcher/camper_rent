import css from "./LocationAndRating.module.css";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";
import React from "react";

export const LocationAndRating = ({ data, avMark, ...props }) => {
  return (
    <div className={css.location_reviews_container} {...props}>
      <span className={css.location_span}>
        <SharedSVG svgId={"rating"} className={css.icon} /> {avMark.toFixed(1)}{" "}
        ({data.reviews.length} reviews)
      </span>
      <span className={css.location_span}>
        <SharedSVG svgId={"location"} className={css.location_svg} />{" "}
        {data.location}
      </span>
    </div>
  );
};
