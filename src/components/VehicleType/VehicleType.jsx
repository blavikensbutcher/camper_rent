import css from "./VehicleType.module.css";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";
import { useGetAllCampersQuery } from "../../redux/contacts/camperApi.js";
import clsx from "clsx";

export const VehicleType = ({ setFilteredCampers, vanType, setVanType }) => {
  const { data } = useGetAllCampersQuery();

  const handleClick = (e) => {
    const chosenValue = String(e.currentTarget.dataset.id);

    setVanType(chosenValue);
    setFilteredCampers(data.filter((item) => item.form === chosenValue));
  };

  return (
    <>
      <h3 className={css.header_text}>Vehicle Type</h3>
      <div className={css.btn_list}>
        <button
          className={clsx(
            css.vehicle_btn,
            vanType === "panelTruck" && css.active
          )}
          onClick={handleClick}
          data-id="panelTruck"
        >
          <SharedSVG svgId={"camper3"} className={css.vehicle_svg} />
          Van
        </button>
        <button
          className={clsx(
            css.vehicle_btn,
            vanType === "Fully Integrated" && css.active
          )}
          onClick={handleClick}
          data-id="Fully Integrated"
        >
          <SharedSVG svgId={"camper2"} className={css.vehicle_svg} />
          Fully Integrated
        </button>
        <button
          className={clsx(css.vehicle_btn, vanType === "alcove" && css.active)}
          onClick={handleClick}
          data-id="alcove"
        >
          <SharedSVG svgId={"camper"} className={css.vehicle_svg} />
          Alcove
        </button>
      </div>
    </>
  );
};
