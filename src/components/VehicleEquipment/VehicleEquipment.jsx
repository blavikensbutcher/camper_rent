import css from "./VehicleEquipment.module.css";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";

export const VehicleEquipment = ({ filteredCampers, setFilteredCampers }) => {
  function handleClick(e) {
    const chosenValue = e.target.dataset.id;

    setFilteredCampers(
      filteredCampers.filter(
        (item) =>
          item.transmission === chosenValue || item.details[chosenValue] > 0,
      ),
    );
  }

  return (
    <>
      <span className={css.section_text}>Filters</span>
      <h3 className={css.header_text}>Vehicle Equipment</h3>
      <div className={css.btn_list}>
        <button
          className={css.filter_btn}
          onClick={handleClick}
          data-id="airConditioner"
        >
          <SharedSVG className={css.svg_img_two} svgId={"wind"} /> AC
        </button>
        <button
          className={css.filter_btn}
          onClick={handleClick}
          data-id="automatic"
        >
          <SharedSVG className={css.svg_img} svgId={"automatic"} /> Automatic
        </button>
        <button
          className={css.filter_btn}
          onClick={handleClick}
          data-id="kitchen"
        >
          <SharedSVG className={css.svg_img} svgId={"kitchen"} /> Kitchen
        </button>
        <button className={css.filter_btn} onClick={handleClick} data-id="TV">
          <SharedSVG className={css.svg_img} svgId={"tv"} /> TV
        </button>
        <button
          className={css.filter_btn}
          onClick={handleClick}
          data-id="shower"
        >
          <SharedSVG className={css.svg_img} svgId={"shower"} /> Shower/WC
        </button>
      </div>
    </>
  );
};
