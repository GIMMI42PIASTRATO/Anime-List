import { MdOutlineAddCircle } from "react-icons/md";
import style from "./quickAction.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function QuickAction({ color = "black", id }) {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const handleAdd = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3001/api/v1/anime/${id}`,
                    {
                        method: "POST",
                    }
                );

                const data = await response.json();
            } catch (err) {
                console.log(err);
            }
        };
        handleAdd();
    }, [isClicked]);

    return (
        <div>
            <MdOutlineAddCircle
                className={style.buttonWrap}
                style={{ color: color }}
                onClick={() => {
                    setIsClicked(true);
                }}
            />
        </div>
    );
}

QuickAction.propTypes = {
    color: PropTypes.string,
};
