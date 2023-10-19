import style from "../style/Filter.module.css";
import PropTypes from "prop-types";

export default function Filter({ name, type }) {
    const genres = ["Action", "Comedy", "Drama", "Horror", "Science Fiction"];
    const years = ["2020", "2021", "2022", "2023"];
    const seasons = ["Spring", "Summer", "Autumn", "Winter"];
    const formats = ["HD", "SD", "4K"];
    const statuses = ["Released", "Upcoming"];

    return (
        <div>
            <div className={style.name}>{name}</div>
            {type === "SEARCH" ? (
                <div
                    className={`${style.filterDefault} ${
                        style[type.toLowerCase()]
                    }`}
                >
                    <input type="text" name="search" id="" />
                </div>
            ) : (
                <div />
            )}
        </div>
    );
}

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};
