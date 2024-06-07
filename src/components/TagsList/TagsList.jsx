import { TagItem } from "./TagItem/TagItem.jsx";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";
import css from "./TagsList.module.css";

export const TagsList = ({ data }) => {
  console.log(data);

  return (
    <ul className={css.tags_container}>
      <TagItem>
        <SharedSVG svgId={"users"} className={css.svg_one} />
        {data.adults} Adults
      </TagItem>
      {data.transmission === "automatic" && (
        <TagItem>
          <SharedSVG svgId={"automatic"} className={css.svg_two} /> Automatic
        </TagItem>
      )}
      {data.engine === "petrol" && (
        <TagItem>
          <SharedSVG svgId={"gas"} className={css.svg_one} /> Petrol
        </TagItem>
      )}
      <TagItem>
        <SharedSVG svgId={"kitchen"} className={css.svg_two} /> Kitchen
      </TagItem>
      <TagItem>
        <SharedSVG svgId={"bed"} className={css.svg_two} /> Beds
      </TagItem>
      <TagItem>
        <SharedSVG svgId={"wind"} className={css.svg_one} /> AC
      </TagItem>
    </ul>
  );
};
