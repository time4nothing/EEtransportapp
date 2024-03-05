import express from "express";
import axios from "axios";

const app = new express();
const port = 3000;

app.use(express.urlencoded( { extended: true } ));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/login", (req, res) => {
    console.log(req.body);
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})