const express = require('express')
const cors = require('cors');
const { connectToServer } = require('./utils/dbConnect');
const router = require('./Routes/UserRoutes');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());
app.use(express.static("public"));

connectToServer();


app.use("/user", router)

app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});