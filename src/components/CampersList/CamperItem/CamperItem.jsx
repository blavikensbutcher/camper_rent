import Button from "../../../shared/components/Button/Button.jsx";
import css from "./CamperItem.module.css";
import SharedSVG from "../../../shared/sharedSVG/SharedSvg.jsx";
import { truncateString } from "../../../../helpers/truncateString.js";
import { TagsList } from "../../TagsList/TagsList.jsx";

export const CamperItem = ({ data }) => {

  const avrgMark = "4.4";
  const reviews = "2 reviews";

  return (
    <li className={css.card_item}>
      <img src={data.gallery[0]} width={300} className={css.image} />
      <div className={css.global_container}>
        <div className={css.description_container}>
          <div className={css.header_name}>
            <h2>{data.name}</h2>
            <p className={css.price}>
              €{data.price}.00{" "}
              <button>
                <SharedSVG svgId={"heart"} className={css.heart_svg} />
              </button>
            </p>
          </div>
          <div className={css.location_reviews_container}>
          <span>
            <SharedSVG
              svgId={"rating"}
              className={css.icon}
            />{" "}
            {avrgMark} ({data.reviews.length} reviews)
          </span>
          <span>
            <SharedSVG svgId={"location"} className={css.location_svg} />{" "}
            {data.location}
          </span>
          </div>
          <p className={css.camper_descr}>
            {truncateString(data.description, 100)}
          </p>
        </div>
        <div className={css.tags_container}>
          <TagsList data={data} adults={data.adults} />
        </div>
        <Button>Show More</Button>
      </div>
    </li>
  );
};
