import css from "./LocationSerach.module.css";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";
import { useState } from "react";

export const LocationSearch = () => {
  const [text, setText] = useState("");


  function handleInput(e) {
    setText(e.target.value);
  }



  return (
      <div className={css.location_search_container}>
          <p className={css.location_text}>Location</p>
          <input className={css.input} type="text" onInput={handleInput}/>
          <span className={css.svg_container}>
            <SharedSVG className={css.location_svg} svgId={"location"}/>
          </span>
          {text.length <= 0 && (<p className={css.input_placeholder}> City</p>
          )}
      </div>
  );
};
