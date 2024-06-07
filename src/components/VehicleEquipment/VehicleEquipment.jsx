import css from "./VehicleEquipment.module.css";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";
import Button from "../../shared/components/Button/Button.jsx";

export const VehicleEquipment = () => {

  return (
    <>
      <span className={css.section_text}>Filters</span>
      <h3 className={css.header_text}>Vehicle Equipment</h3>
        <div className={css.btn_list}>
            <button className={css.filter_btn}><SharedSVG className={css.svg_img_two} svgId={"wind"}/> AC</button>
            <button className={css.filter_btn}><SharedSVG className={css.svg_img} svgId={"automatic"}/> Automatic</button>
            <button className={css.filter_btn}><SharedSVG className={css.svg_img} svgId={"kitchen"}/> Kitchen</button>
            <button className={css.filter_btn}><SharedSVG className={css.svg_img} svgId={"tv"}/> TV</button>
            <button className={css.filter_btn}><SharedSVG className={css.svg_img} svgId={"shower"}/> Shower/WC</button>
        </div>
    </>
  );
};
