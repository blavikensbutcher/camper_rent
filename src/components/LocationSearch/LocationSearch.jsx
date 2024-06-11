import css from "./LocationSearch.module.css";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";
import { useState } from "react";
import Fuse from "fuse.js";
import { useGetAllCampersQuery } from "../../redux/contacts/camperApi.js";

export const LocationSearch = ({ filteredCampers, setFilteredCampers }) => {
  const [text, setText] = useState("");
  const { data } = useGetAllCampersQuery();

  const options = {
    includeScore: true,
    keys: ["location"],
    threshold: 0.2,
  };

  const fuse = data ? new Fuse(filteredCampers, options) : null;

  function handleInput(e) {
    const inputText = e.target.value;
    setText(inputText);

    if (fuse && inputText) {
      const result = fuse.search(inputText);
      setFilteredCampers(result.map((res) => res.item));
    } else {
      setFilteredCampers(data.slice(0, 4));
    }
  }

  return (
    <div className={css.location_search_container}>
      <p className={css.location_text}>Location</p>
      <input
        className={css.input}
        type="text"
        onInput={handleInput}
        autoFocus={true}
        placeholder="City"
      />
      <span className={css.svg_container}>
        <SharedSVG className={css.location_svg} svgId={"location"} />
      </span>
    </div>
  );
};
