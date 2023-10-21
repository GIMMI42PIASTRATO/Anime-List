import PropTypes from "prop-types";
import style from "../style/MediaCard.module.css";

export default function MediaCard({ image, name1, name2 }) {
    // Il nome1 rappresenta il nome dell'anime in inglese, il nome2 rappresenta il nome dell'anime se name1 è null
    return (
        <div className={style.cardContainer}>
            <a href="#">
                <img src={image} alt="anime logo" />
            </a>
            <a href="#">{name1 ? name1 : name2}</a>
        </div>
    );
}

MediaCard.propTypes = {
    image: PropTypes.string.isRequired,
    name1: PropTypes.string,
    name2: PropTypes.string,
};
