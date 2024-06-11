import css from "./VehicleType.module.css";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";
import Fuse from "fuse.js";
import { useState, useMemo } from "react";
import { useGetAllCampersQuery } from "../../redux/contacts/camperApi.js";

export const VehicleType = ({ filteredCampers, setFilteredCampers }) => {
  const { data } = useGetAllCampersQuery();

  const handleClick = (e) => {
    const chosenValue = String(e.target.dataset.id);
    setFilteredCampers(data.filter((item) => item.form === chosenValue));
  };

  return (
    <>
      <h3 className={css.header_text}>Vehicle Type</h3>
      <div className={css.btn_list}>
        <button
          className={css.vehicle_btn}
          onClick={handleClick}
          data-id="panelTruck"
        >
          <SharedSVG svgId={"camper3"} className={css.vehicle_svg} />
          Van
        </button>
        <button
          className={css.vehicle_btn}
          onClick={handleClick}
          data-id="Fully Integrated"
        >
          <SharedSVG svgId={"camper2"} className={css.vehicle_svg} />
          Fully Integrated
        </button>
        <button
          className={css.vehicle_btn}
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
