import css from "./VehicleType.module.css";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";

export const VehicleType = () => {
  return (
    <>
      <h3 className={css.header_text}>Vehicle Type</h3>
      <div className={css.btn_list}>
        <button className={css.vehicle_btn}>
            <SharedSVG svgId={"camper3"} className={css.vehicle_svg}/>
            Van</button>
        <button className={css.vehicle_btn}>
            <SharedSVG svgId={"camper2"} className={css.vehicle_svg}/>
            Fully Integrated</button>
        <button className={css.vehicle_btn}>
            <SharedSVG svgId={"camper"} className={css.vehicle_svg}/>
            Alcove</button>
      </div>
    </>
  );
};
