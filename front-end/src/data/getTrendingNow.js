const getTrandingNow = async () => {
    try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime?filter=airing&limit=25");
        const data = await response.json();

        if (data.status) {
            throw new Error(data.type);
        }

        return data.data;

    } catch(err) {
        console.log(err)
    }
}

export default getTrandingNow;