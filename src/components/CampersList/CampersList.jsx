import { useEffect, useState } from "react";
import { CamperItem } from "./CamperItem/CamperItem.jsx";
import css from "./CampersList.module.css";
import { Loader } from "../../shared/components/Loader/Loader.jsx";

export const CampersList = ({
  data,
  campers,
  filteredCampers,
  setCampers,
  setFilteredCampers,
  page,
  setPage,
  favorite,
  setFavorite,
}) => {
  const incrementPage = () => {
    setPage(page + 3);
  };


  if (!campers.length) {
    return <Loader />;
  }

  return (
    <div>
      <ul className={css.list_items}>
        {filteredCampers.map((item, idx) => (
          <CamperItem
            data={item}
            key={idx}
            page={page}
            setPage={setPage}
            favorite={favorite}
            setFavorite={setFavorite}
          />
        ))}
      </ul>
      {page <= filteredCampers.length ? (
        <button className={css.load_more_btn} onClick={incrementPage}>
          Load More
        </button>
      ) : null}
    </div>
  );
};
