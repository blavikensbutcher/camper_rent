import css from './TagItem.module.css'
import SharedSVG from "../../../shared/sharedSVG/SharedSvg.jsx";

export const TagItem = ( {filteredData , children}) => {

    return (
        <li className={css.item}>
            {children}
        </li>
    )
}
