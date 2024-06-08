import React, { useState } from "react";
import { Modal } from "antd";
import css from './ModalWindow.module.css'
import SharedSVG from "../../sharedSVG/SharedSvg.jsx";
import { truncateString } from "../../../../helpers/truncateString.js";
import { Link } from "react-router-dom";
import {TagsList} from "../../../components/TagsList/TagsList.jsx";
import {VehicleInfo} from "../../../components/VehicleInfo/VehicleInfo.jsx";

export const ModalWindow = ({ isModalOpen, handleCancel, avrgMark, data }) => {
    const [showFeatures, setShowFeatures] = useState(false);
    const [showReviews, setShowReviews] = useState(false);

    const openFeatures = () => {
        setShowFeatures(true);
        setShowReviews(false);
    };

    const openReviews = () => {
        setShowReviews(true);
        setShowFeatures(false);
    };

    return (
        <>
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                width={982}
                style={{ padding: 40 }}
            >
                <div className={css.modal_container}>
                    <div className={css.description_container}>
                        <div>
                            <h2 className={css.header_name}>{data.name}</h2>
                            <div className={css.location_reviews_container}>
                                <span>
                                    <SharedSVG svgId={"rating"}
                                               className={css.icon}/> {avrgMark} ({data.reviews.length} reviews)
                                </span>
                                <span>
                                    <SharedSVG svgId={"location"} className={css.location_svg}/> {data.location}
                                </span>
                            </div>
                            <p className={css.price}>€{data.price}.00 </p>
                        </div>
                        <div className={css.image_container}>
                            <img className={css.image} src={data.gallery[0]} alt="Track image 1"/>
                            <img className={css.image} src={data.gallery[1]} alt="Track image 2"/>
                            <img className={css.image} src={data.gallery[2]} alt="Track image 3"/>
                        </div>
                        <p className={css.track_descr}>{truncateString(data.description, 759)}</p>

                        <ul className={css.toggle_menu}>
                            <li >
                                <button className={css.toggle_menu_item} onClick={openFeatures}>Features</button>
                            </li>
                            <li >
                                <button className={css.toggle_menu_item} onClick={openReviews}>Reviews</button>
                            </li>
                        </ul>

                        {showFeatures && (
                            <div>
                               <div>
                                   <ul className={css.features_ul}>
                                       <li><TagsList data={data}/></li>
                                       <li><VehicleInfo data={data}/></li>
                                   </ul></div>
                                <div></div>
                            </div>
                        )}

                        {showReviews && (
                            <div>
                                {/* Додайте вміст "Reviews" тут */}
                                <p>Reviews Content</p>
                            </div>
                        )}

                        {/* Посилання */}

                    </div>
                </div>
            </Modal>
        </>
    );
};
