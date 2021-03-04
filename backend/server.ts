import * as express from "express";
import { resolve } from "path";
// const myDbClient = require("db")
const app = express();

import { config } from "dotenv";
config();

const { PORT } = process.env;

app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(resolve("public", "index.html"));
})

app.post("/api/create-message", (req, res) => {
    // Create
})

app.get("/api/read-message", (req, res) => {
    // Read
})

app.put("/api/update-message", (req, res) => {
    // Update
})

app.delete("/api/delete-message", (req, res) => {
    // Delete
})

app.listen(PORT, () => console.log(`CRUD API listening on port ${PORT}`))
