import { MdOutlineAddCircle } from "react-icons/md";
import style from "./quickAction.module.css";
import PropTypes from "prop-types";

export default function QuickAction({ color = "black", id }) {
    const handleAdd = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/api/list/${id}`,
                {
                    method: "POST",
                }
            );
            const data = await response.json();

            if (data.status === 500) {
                throw new Error(data.msg);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <MdOutlineAddCircle
                className={style.buttonWrap}
                style={{ color: color }}
                onClick={() => handleAdd()}
            />
        </div>
    );
}

QuickAction.propTypes = {
    color: PropTypes.string,
    id: PropTypes.number.isRequired,
};
