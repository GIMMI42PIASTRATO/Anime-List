import style from "./pageContent.module.css";

export default function PageContent({ children }) {
    return (
        <div className={style.pageContent}>
            <div className={style.container}>{children}</div>
        </div>
    );
}
