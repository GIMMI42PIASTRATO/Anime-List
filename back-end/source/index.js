const express = require("express");
const listRouter = require("./router/list");
const app = express();

require("./database")

const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
    console.log("Current location: ", req.url);
    console.log("Current method: ", req.method);
    next();
})

app.use("/api/list", listRouter)

app.listen(PORT, () => console.log(`🏃 Server is running on url http://localhost:${PORT}`))
