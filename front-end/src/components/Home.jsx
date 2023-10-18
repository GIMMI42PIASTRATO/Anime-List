// import React from "react";
import style from "../style/Home.module.css";
import Filter from "./Filter";

export default function Home() {
    return (
        <div className={style.pageContent}>
            <div className={style.container}>
                <div className={style.filterWrap}></div>
                <div className={style.highlighted}></div>
            </div>
        </div>
    );
}
