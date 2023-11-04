import PropTypes from "prop-types";
import style from "./mediaCard.module.css";
import QuickAction from "../quickAction/quickAction";

export default function MediaCard({ image, name1, name2, id }) {
    // Il nome1 rappresenta il nome dell'anime in inglese, il nome2 rappresenta il nome dell'anime se name1 è null
    return (
        <div className={style.cardContainer}>
            <div className={style.cover}>
                <img className={style.image} src={image} alt="anime logo" />
                <QuickAction id={id} />
            </div>
            <a href="#">{name1 ? name1 : name2}</a>
        </div>
    );
}

MediaCard.propTypes = {
    image: PropTypes.string.isRequired,
    name1: PropTypes.string,
    name2: PropTypes.string,
    id: PropTypes.number.isRequired,
};
