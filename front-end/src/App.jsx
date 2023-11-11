// import React from "react";
import Navbar from "./components/navBar/NavBar.jsx";
import Home from "./pages/home/Home.jsx";
import AnimeList from "./pages/animeList/AnimeList.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/animelist" element={<AnimeList />} />
            </Routes>
        </>
    );
}
