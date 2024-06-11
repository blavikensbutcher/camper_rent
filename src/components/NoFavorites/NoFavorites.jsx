import css from "./NoFavorites.module.css";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";
import { NavLink } from "react-router-dom";

export const NoFavorites = ({children}) => {
  return (
    <div className={css.bounce_in_top}>
      <div className={css.container}>
        <p className={css.text}>{children}</p>
        <NavLink to="index" className={css.filter_btn}>
          <SharedSVG svgId={"heart_broken"} className={css.heart} /> Home
        </NavLink>
      </div>
    </div>
  );
};
