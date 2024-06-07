import Button from "../../../shared/components/Button/Button.jsx";
import css from './CamperItem.module.css'
import SharedSVG from "../../../shared/sharedSVG/SharedSvg.jsx";
import {truncateString} from "../../../../helpers/truncateString.js";

export const CamperItem = ({data }) => {



  console.log(data)


  const avrgMark = "4.4"
  const reviews = "2 reviews"
  const location = "Kyiv, Ukraine"


  return (
    <li className={css.card_item}>
      <img src={data.gallery[0]} width={300} className={css.image} />
      <div>
        <div className={css.description_container}>
          <h2>{data.name}</h2>
          <p>
            €{data.price} <button><SharedSVG svgId={"heart"} className={css.heart_svg}/></button>
          </p>

          <span>
            <SharedSVG
              svgId={"rating"}
              width={16}
              height={16}
              className={css.icon}
            />{" "}
            {avrgMark} ({reviews})
          </span>
          <span>
            <SharedSVG svgId={"location"} className={css.location_svg} />{" "}
            {data.location}
          </span>
          <p className={css.camper_descr}>
            {truncateString(data.description, 100)}
          </p>
        </div>
        <div className={css.tags_container}>
          <Button>2 adults</Button>
          <Button>Automatic</Button>
          <Button>Petrol</Button>
          <Button>1 beds</Button>
          <Button>AC</Button>
        </div>
        <Button>Show More</Button>
      </div>
    </li>
  );
};
