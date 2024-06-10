export const avrgMark = (data) => {
    let avrgMark = 0;

    data.reviews.forEach((item) => {
        avrgMark += item.reviewer_rating;
    });

    return avrgMark /= data.reviews.length;
}
