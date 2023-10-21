const getSeasonal = async (page) => {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/seasons/now?unapproved&sfw&limit=25&page=${page}`);
        const data = await response.json();

        if (data.status) {
            throw new Error(data.type);
        }

        return data;

    } catch(err) {
        console.log(err)
    }
}

export default getSeasonal;