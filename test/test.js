const data = handleFetch()

async function handleFetch() {
    const response = await fetch("https://api.jikan.moe/v4/anime/100")
    const data = await response.json()

    return data
}

console.log(data)