//import React from "react";
import sytle from "./NavBar.module.css";
import logo from "../../assets/anime-list.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className={sytle.nav}>
            <div className={sytle.wrap}>
                <a className={sytle.logo}>
                    <img className={sytle.img} src={logo} alt="" />
                </a>
                <div>
                    <Link className={sytle.link} to={"/"}>
                        Home
                    </Link>
                    <Link className={sytle.link} to={"/profile"}>
                        Profile
                    </Link>
                    <Link className={sytle.link} to={"/animelist"}>
                        Anime List
                    </Link>
                </div>
                <div>SEARCH</div>
            </div>
        </div>
    );
}
