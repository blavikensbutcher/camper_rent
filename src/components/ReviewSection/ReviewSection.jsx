import css from "./ReviewSection.module.css";
import SharedSVG from "../../shared/sharedSVG/SharedSvg.jsx";
import React from "react";

export const ReviewSection = ({ data }) => {
    const reviews = data.reviews;

    return (
        <div className={css.review_container}>
            {reviews.map((item) => {
                return (
                    <div key={item.comment} style={{ marginBottom: 24 }}>
                        <div
                            style={{ display: "flex", columnGap: 16, alignItems: "center", marginBottom: 16 }}
                        >
                            <p className={css.image_reviewer}>
                                {item.reviewer_name.charAt(0)}
                            </p>
                            <div >
                                <p className={css.reviewer_name}>{item.reviewer_name}</p>
                                <p>
                                    {Array.from({ length: 5 }, (_, i) => (
                                        i < item.reviewer_rating ? (
                                            <SharedSVG key={i} svgId={"rating"} className={css.icon} />
                                        ) : (
                                            <SharedSVG key={i} svgId={"zerorating"} className={css.zeroicon} />
                                        )
                                    ))}
                                </p>
                            </div>
                        </div>
                        <p className={css.comment}>{item.comment}</p>
                    </div>
                );
            })}
        </div>
    );
};
