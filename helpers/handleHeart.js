export const handleHeart = (e) => {

    if (e.target.dataset.isclicked !== "yes") {
        e.target.style.fill = "var(--red)";
        e.target.style.stroke = "transparent";
        e.target.dataset.isclicked = "yes";
        return "yes"
        }
    else if (e.target.dataset.isclicked === "yes") {
        e.target.style.fill = "transparent";
        e.target.style.stroke = "var(--black)";
        e.target.dataset.isclicked = "no";
        return "no"
    }
}

