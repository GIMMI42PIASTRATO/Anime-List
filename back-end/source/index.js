const express = require("express");
const listRouter = require("./router/list");
const app = express();
const cors = require("cors")

require("./database")

const PORT = 3000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionSuccessStatus: 200,
}))

app.use(express.json());
app.use((req, res, next) => {
    console.log("Current location: ", req.url);
    console.log("Current method: ", req.method);
    next();
})

app.use("/api/list", listRouter)

app.listen(PORT, () => console.log(`🏃 Server is running on url http://localhost:${PORT}`))
