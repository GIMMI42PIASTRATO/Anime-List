import { MdOutlineAddCircle } from "react-icons/md";
import style from "./quickAction.module.css";
import PropTypes from "prop-types";

export default function QuickAction({ color = "black" }) {
    return (
        <div>
            <MdOutlineAddCircle
                className={style.buttonWrap}
                style={{ color: color }}
            />
        </div>
    );
}

QuickAction.propTypes = {
    color: PropTypes.string,
};
