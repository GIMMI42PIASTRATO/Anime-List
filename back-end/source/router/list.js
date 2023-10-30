const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose")
const List = require("../database/models/list")

router.post("/:id", async (req, res) => {
    console.log("👋 Hello from the list router");
    const { id } = req.params;

    try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error);
        }

        const { title, score, type, episodes } = data;
        const { image_url } = data.images.jpg;

        const list = new List({title, score, type, episodes, image_url})

        await list.save()
        
    }
    catch(err) {
        res.status(500).json({ msg: err});
    }


})

module.exports = router;