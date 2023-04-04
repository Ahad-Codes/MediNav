const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://24100107:MediNavDBPass@medinavcluster.cjn7ovx.mongodb.net/MediNavDB?retryWrites=true&w=majority"
);

// Routers
const usersRouter = require("./routes/Users");
app.use("/user", usersRouter);

const reportRouter = require("./routes/Report");
app.use("/report", reportRouter);

// const listRouter = require("./routes/List");
// app.use("/list", listRouter);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
