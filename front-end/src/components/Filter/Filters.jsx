import style from "./filters.module.css";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

export default function Filters({ name, type, dropDownData }) {
    return (
        <div className={style.filter}>
            <div className={style.name}>{name}</div>
            {type === "SEARCH" ? (
                <div className={style.filterDefault}>
                    <div className={style.placeholder}>{<FaSearch />}</div>
                    <input
                        className={style.gridItem}
                        type="text"
                        name="search"
                        id=""
                    />
                </div>
            ) : type === "SEARCH_DROPDOWN" ? (
                <div className={style.filterDefault}>
                    <div className={style.placeholder}>Any</div>
                    <input type="text" name="search" id="" />
                    <div className={style.dropdown}>
                        {dropDownData.map((item, i) => (
                            <div className={style.item} key={i}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={style.filterDefault}>
                    <div className={style.placeholder}>Any</div>
                    <input type="text" name="search" id="" readOnly />
                    <div className={style.dropdown}>
                        {dropDownData.map((item, i) => (
                            <div className={style.item} key={i}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

Filters.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dropDownData: PropTypes.arrayOf(PropTypes.string),
};
