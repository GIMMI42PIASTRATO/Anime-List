import { MdOutlineAddCircle } from "react-icons/md";
import style from "./quickAction.module.css";

export default function QuickAction() {
    return (
        <div>
            <MdOutlineAddCircle className={style.buttonWrap} />
        </div>
    );
}
