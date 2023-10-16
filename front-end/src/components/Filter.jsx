// import React from "react";
import style from "../style/Filter.module.css";
import PropTypes from "prop-types";

export default function Filter({ name, type }) {
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
