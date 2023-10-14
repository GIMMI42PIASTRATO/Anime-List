// import React from "react";
import style from "../style/Home.module.css";

export default function Home() {
    return (
        <div className={style.pageContent}>
            <div className={style.container}>
                <div className={style.filterWrap}>
                    <Filter />
                </div>
                <div className={style.highlighted}>
                    {/*highlighted components*/}
                    test di nuovo
                </div>
            </div>
        </div>
    );
}
