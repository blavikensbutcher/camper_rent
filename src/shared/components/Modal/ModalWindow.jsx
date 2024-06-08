import React from "react";
import { Modal } from "antd";
import css from './ModalWindow.module.css'
import SharedSVG from "../../sharedSVG/SharedSvg.jsx";
export const ModalWindow = ({isModalOpen, showModal, handleCancel, setIsModalOpen, data}) => {

    console.log(data)

  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={902}
        style={{padding: 40}}
      >
          <div className={css.modal_container}>
              <div className={css.description_container}>
                  <div className={css.header_name}>
                      <h2>{data.name}</h2>
                      <p className={css.price}>
                          €{data.price}.00{" "}
                      </p>
                  </div>
              </div>
          </div>
      </Modal>
    </>
);
};
