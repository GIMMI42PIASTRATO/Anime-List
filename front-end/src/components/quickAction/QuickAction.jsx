import { FaPlus } from "react-icons/fa";
import style from "./quickAction.module.css";
import PropTypes from "prop-types";

export default function QuickAction({ id }) {
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
        <div className={style.container}>
            <FaPlus className={style.icon} onClick={() => handleAdd()} />
        </div>
    );
}

QuickAction.propTypes = {
    id: PropTypes.number.isRequired,
};
