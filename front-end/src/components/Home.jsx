import { useEffect, useState } from "react";
import style from "../style/Home.module.css";
import getTrandingNow from "../data/getTrendingNow";
import MediaCard from "./MediaCard";

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const trandingNow = await getTrandingNow();
            setData(trandingNow);
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div className={style.pageContent}>
            <div className={style.container}>
                <div className={style.filterWrap}>
                    filter prova prova prova prova prova prova prova prova
                </div>
                <div className={style.highlighted}>
                    <p>Tranding now TEST</p>
                    <div className={style.result}>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            data.map((item) => {
                                return (
                                    <MediaCard
                                        image={item.images.jpg.image_url}
                                        name={item.title.title_english}
                                        key={item.mal_id}
                                    />
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
