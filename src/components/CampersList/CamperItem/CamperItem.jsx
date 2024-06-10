import React, { useEffect, useState } from "react";
import Button from "../../../shared/components/Button/Button.jsx";
import css from "./CamperItem.module.css";
import SharedSVG from "../../../shared/sharedSVG/SharedSvg.jsx";
import { truncateString } from "../../../../helpers/truncateString.js";
import { TagsList } from "../../TagsList/TagsList.jsx";
import { ModalWindow } from "../../../shared/components/Modal/ModalWindow.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilteredVans, removeVan,
  selectFilteredVans,
} from "../../../redux/filters/filterSlice.js";

export const CamperItem = ({ data, favorite, setFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    showModal();
  };

  const handleHeartClick = (e) => {


    if (e.target.dataset.isclicked !== "yes") {
      e.target.style.fill = "var(--red)";
      e.target.style.stroke = "transparent";
      e.target.dataset.isclicked = "yes";
      setFavorite(prevState => {
        return [...prevState, data];
      })
    } else if (e.target.dataset.isclicked === "yes") {
      e.target.style.fill = "transparent";
      e.target.style.stroke = "var(--black)";
      e.target.dataset.isclicked = "no";

      const removed = favorite.filter(item => item._id !== data._id)
      setFavorite(removed)
    }
  };

  let avrgMark = 0;

  data.reviews.forEach((item) => {
    avrgMark += item.reviewer_rating;
  });

  avrgMark /= data.reviews.length;

  return (
    <>
      <li className={css.card_item}>
        <img
          src={data.gallery[0]}
          width={300}
          className={css.image}
          alt="Camper Image"
        />
        <div className={css.global_container}>
          <div className={css.description_container}>
            <div className={css.header_name}>
              <h2>{data.name}</h2>
              <p className={css.price}>
                €{data.price}.00{" "}
                <button className={css.heart_btn} onClick={handleHeartClick}>
                  <SharedSVG svgId={"heart"} className={css.heart_svg} />
                </button>
              </p>
            </div>
            <div className={css.location_reviews_container}>
              <span>
                <SharedSVG svgId={"rating"} className={css.icon} />{" "}
                {avrgMark.toFixed(1)} ({data.reviews.length} reviews)
              </span>
              <span>
                <SharedSVG svgId={"location"} className={css.location_svg} />{" "}
                {data.location}
              </span>
            </div>
            <p className={css.camper_descr}>
              {truncateString(data.description, 100)}
            </p>
          </div>
          <div className={css.tags_container}>
            <TagsList data={data} adults={data.adults} />
          </div>
          <Button onClick={handleClick}>Show More</Button>
        </div>
      </li>
      <ModalWindow
        data={data}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        showModal={showModal}
        handleCancel={handleCancel}
        avrgMark={avrgMark}
      />
    </>
  );
};
