const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb://jahnavi592006_db_user:NAtdEPyIT6uNhSYA@ac-pgmvhn5-shard-00-00.e3abduo.mongodb.net:27017,ac-pgmvhn5-shard-00-01.e3abduo.mongodb.net:27017,ac-pgmvhn5-shard-00-02.e3abduo.mongodb.net:27017/portfolioDB?ssl=true&replicaSet=atlas-1wbebz-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String
});

const Project = mongoose.model("Project", ProjectSchema);

app.get("/projects", async (req, res) => {

    const projects = await Project.find();

    res.json(projects);
});

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});