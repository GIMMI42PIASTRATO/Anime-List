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
                        className={style.inputDefault}
                        type="text"
                        name="search"
                        id=""
                    />
                </div>
            ) : type === "SEARCH_DROPDOWN" ? (
                <>
                    <div
                        className={`${style.filterDefault} ${style.filterDropdown}`}
                    >
                        <div className={style.valueWrap}>
                            <div className={style.placeholder}>Any</div>
                            <input
                                className={style.inputDefault}
                                type="text"
                                name="search"
                                id=""
                            />
                        </div>
                    </div>
                    <ul className={style.dropdown}>
                        {dropDownData.map((item, i) => (
                            <li className={style.item} key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <div
                        className={`${style.filterDefault} ${style.filterDropdown}`}
                    >
                        <div className={style.valueWrap}>
                            <div className={style.placeholder}>Any</div>
                            <input
                                className={style.inputDefault}
                                type="text"
                                name="search"
                                id=""
                                readOnly
                            />
                        </div>
                    </div>
                    <ul className={style.dropdown}>
                        {dropDownData.map((item, i) => (
                            <li className={style.item} key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

Filters.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dropDownData: PropTypes.arrayOf(PropTypes.string),
};
