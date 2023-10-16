// import React from "react";
import style from "../style/Home.module.css";
import Filter from "./Filter";

export default function Home() {
    return (
        <div className={style.pageContent}>
            <div className={style.container}>
                <div className={style.filterWrap}>
                    <Filter name="Search" type="SEARCH" />
                    <Filter name="Genres" type="DROPDOWNSEARCH" />
                    <Filter name="Year" type="DROPDOWNSEARCH" />
                    <Filter name="Season" type="DROPDOWN" />
                    <Filter name="Format" type="DROPDOWN" />
                    <Filter name="Status" type="DROPDOWN" />
                </div>
                <div className={style.highlighted}>
                    {/*highlighted components*/}
                    test di nuovo
                </div>
            </div>
        </div>
    );
}
