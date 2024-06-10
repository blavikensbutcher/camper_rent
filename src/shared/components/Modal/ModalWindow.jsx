import React, { useState } from "react";
import { Modal } from "antd";
import css from './ModalWindow.module.css'
import { truncateString } from "../../../../helpers/truncateString.js";
import {TagsList} from "../../../components/TagsList/TagsList.jsx";
import {VehicleInfo} from "../../../components/VehicleInfo/VehicleInfo.jsx";
import {BookingForm} from "../../../components/BookingForm/BookingForm.jsx";
import {ReviewSection} from "../../../components/ReviewSection/ReviewSection.jsx";
import {LocationAndRating} from "../../../components/LocationAndRating/LocationAndRating.jsx";

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
                            <LocationAndRating data={data} avMark={avrgMark} className={css.container}/>
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
                            <div className={css.review_container}>
                               <div>
                                   <ul className={css.features_ul}>
                                       <li><TagsList data={data}/></li>
                                       <li><VehicleInfo data={data}/></li>
                                   </ul></div>
                                <div> <BookingForm /></div>
                            </div>
                        )}

                        {showReviews && (

                            <ul className={css.review_container}>
                                <li><ReviewSection data={data} /></li>
                                <li><BookingForm /></li>
                            </ul>
                        )}

                    </div>
                </div>
            </Modal>
        </>
    );
};
