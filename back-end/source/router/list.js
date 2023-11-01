const { Router } = require("express");
const router = Router();
const List = require("../database/models/list")

router.post("/:id", async (req, res) => {
    console.log("👋 Hello from the list router");
    const mal_id = parseInt(req.params.id);

    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`);
        const { data } = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }
        
        const { title, score, type, episodes } = data;
        const { image_url } = data.images.jpg;

        const list = new List({title, score, type, episodes, image_url, mal_id})
        await list.save()

        res.status(201).json({ msg: "List saved", status: 201 });
        
    }
    catch(err) {
        res.status(500).json({ msg: err.message, status: 500 });
    }
})

module.exports = router;