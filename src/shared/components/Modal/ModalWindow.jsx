import React from "react";
import { Modal } from "antd";
import css from './ModalWindow.module.css'
import SharedSVG from "../../sharedSVG/SharedSvg.jsx";
export const ModalWindow = ({isModalOpen, showModal, handleCancel, avrgMark, data}) => {

    console.log(data)

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
                    {" "}
                    <span>
                  <SharedSVG svgId={"rating"} className={css.icon}/> {avrgMark}{" "}
                        ({data.reviews.length} reviews)
                </span>
                    <span>
                <SharedSVG svgId={"location"} className={css.location_svg}/>{" "}
                        {data.location}
              </span>
                </div>
                <p className={css.price}>€{data.price}.00 </p>
            </div>

              <div className={css.image_container}>
                  <img className={css.image} src={data.gallery[0]} alt="Track image 1"/>
                  <img className={css.image} src={data.gallery[1]} alt="Track image 2"/>
                  <img className={css.image} src={data.gallery[2]} alt="Track image 3"/>
              </div>

          </div>
        </div>
      </Modal>
    </>
  );
};
