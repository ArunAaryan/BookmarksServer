import fs, { PathOrFileDescriptor } from "fs";
import path from "path";
import { Bookmark } from "../types/bookmarks";
const file = "/bookmarks.json";
const completePath = path.join(
  "/Users/arunaaryan/Documents/Coding/NodeProjects/BookmarksApp/Server",
  file
);
export const readData = (): Bookmark[] => {
  const rawData: string = fs.readFileSync(completePath, "utf8");
  return JSON.parse(rawData);
};

export const writeData = (data: any) => {
  const rawData = JSON.stringify(data);
  fs.writeFileSync(completePath, rawData);
  return true;
};
