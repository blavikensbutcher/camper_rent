import css from './FavoriteSection.module.css'
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";
import {NavLink} from "react-router-dom";

export const FavoriteSection = () => {


    return (
        <>
            <h3 className={css.header}>Navigation</h3>
            <div className={css.btn_list}>
                <NavLink
                    to="/"
                    className={css.filter_btn}
                >
                    <SharedSVG className={css.svg_img} svgId={"gohome"}/> Home
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={css.filter_btn}
                >
                    <SharedSVG className={css.svg_img_two} svgId={"heart"}/> Favorites
                </NavLink>
            </div>
        </>
    )
}
