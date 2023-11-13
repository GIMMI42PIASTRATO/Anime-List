import style from "./pageContent.module.css";
import PropTypes from "prop-types";

export default function PageContent({ children }) {
    return (
        <div className={style.pageContent}>
            <div className={style.container}>{children}</div>
        </div>
    );
}

PageContent.propTypes = {
    children: PropTypes.node,
};
