import style from "./filters.module.css";
import PropTypes from "prop-types";
import { TbSearch } from "react-icons/tb";

export default function Filters({ name, type, dropDownData }) {
    return (
        <div>
            <div className={style.name}>{name}</div>
            {type === "SEARCH" ? (
                <div className={style.filterDefault}>
                    <input
                        className={style.search}
                        type="text"
                        name="search"
                        id=""
                        placeholder={<TbSearch />}
                    />
                </div>
            ) : type === "SEARCH_DROPDOWN" ? (
                <div className={style.filterDefault}>
                    <div className={style.placeholder}></div>
                    <input
                        className={style.search}
                        type="text"
                        name="search"
                        id=""
                    />
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
