const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const authenticate = require("./auth/authenticate");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

async function main() {
    await mongoose.connect(process.env.BD_CONNECTION_STRING);
    console.log("Connected to Mongodb")
}

main().catch(console.error);

app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/signout", require("./routes/signout"));
app.use("/api/todos", authenticate, require("./routes/todos"));
app.use("/api/refresh-token", require("./routes/refreshToken"));
app.use("/api/user", authenticate, require("./routes/user"));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(port, () =>{
    console.log(`Server is runing on port: ${port}`)
});

module.exports = app;