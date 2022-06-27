import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Bookmark } from "./types/bookmarks";
import { readData } from "./Controllers/DataHandler";
import {
  deleteOne,
  findByFolder,
  findOneById,
  insertOne,
  returnFolders,
} from "./Controllers/CrudHandler";
// Use JSON file for storage
dotenv.config();
// const file = "./bookmarks.json";
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(json());
app.get("/bookmarks", async (req, res) => {
  console.log("request received");
  const data = readData();
  res.send({ data });
});
app.get("/bookmark/:id", async (req, res) => {
  const bookmark: Bookmark | {} = findOneById(req.params.id);
  res.send(bookmark);
});
app.get("/bookmarks/folders", (req, res) => {
  const folders: String[] = returnFolders(); // cahce folders lateron
  res.send(folders);
});

app.get("/bookmarks/:folder", (req, res) => {
  const folderBookmarks = findByFolder(req.params.folder);
  res.send(folderBookmarks);
});

app.delete("/bookmark/:id", (req, res) => {
  const id = req.params.id;
  const response = deleteOne(id);
  res.send(response);
});
app.listen(port, () => {
  console.log("app is live");
});
