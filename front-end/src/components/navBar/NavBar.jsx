//import React from "react";
import sytle from "./NavBar.module.css";
import logo from "../../assets/anime-list.svg";

export default function NavBar() {
    return (
        <div className={sytle.nav}>
            <div className={sytle.wrap}>
                <a className={sytle.logo}>
                    <img className={sytle.img} src={logo} alt="" />
                </a>
                <div>
                    <a className={sytle.link}>Home</a>
                    <a className={sytle.link}>Profile</a>
                    <a className={sytle.link}>Anime List</a>
                </div>
                <div>SEARCH</div>
            </div>
        </div>
    );
}
