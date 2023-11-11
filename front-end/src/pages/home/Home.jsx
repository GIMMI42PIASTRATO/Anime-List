import { useEffect, useState } from "react";
import style from "./home.module.css";
import getSeasonal from "../../data/getTrendingNow";
import MediaCard from "../../components/mediaCard/MediaCard";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const bottomRef = useRef(null);

    // Questo codice è stato creato come prova aggiungere anime alla lista, varrà inserito all'interno di un componente che verrà creato in futuro

    useEffect(() => {
        async function fetchData() {
            const { pagination } = await getSeasonal(page);

            if (page > pagination.last_visible_page) {
                return;
            }

            const { data } = await getSeasonal(page);
            setData((prevData) => [...prevData, ...data]);
            await new Promise((r) => setTimeout(r, 1000));

            setLoading(false);
        }

        fetchData();
    }, [page]);

    useEffect(() => {
        function handleScroll() {
            if (
                bottomRef.current &&
                window.innerHeight + window.scrollY >=
                    bottomRef.current.offsetTop
            ) {
                setPage((prevPage) => prevPage + 1);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={style.pageContent}>
                <div className={style.container}>
                    <div className={style.filterWrap}>
                        filter prova prova prova prova prova prova prova prova
                    </div>
                    <div className={style.highlighted}>
                        <h1 className={style.sectionTitle}>Seasonal Anime</h1>
                        <div className={style.result}>
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                data.map((item) => {
                                    return (
                                        <MediaCard
                                            image={item.images.jpg.image_url}
                                            name={item.title_english}
                                            name2={item.title}
                                            id={item.mal_id}
                                            key={uuidv4()}
                                        />
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div ref={bottomRef}></div>
        </>
    );
}
