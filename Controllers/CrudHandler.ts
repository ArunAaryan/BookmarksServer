import { read } from "fs";
import { readData, writeData } from "./DataHandler";
import { Bookmark } from "../types/bookmarks";
import { ROOT } from "./Constants/Constants";
const findOneById = (id: string): Bookmark | {} => {
  const data: Bookmark[] = readData();
  const bookmark: Bookmark | undefined = data.find(
    (bookmark) => bookmark.k_uuid === id
  );
  return bookmark || { error: "Not Found!" };
  //   return bookmark;
};

const deleteOne = (id: string) => {
  console.log(id);
  const data: Bookmark[] = readData();
  const bookmarks: Bookmark[] = data.filter(
    (bookmark) => bookmark.k_uuid !== id
  );
  writeData(bookmarks);
  return { message: "deleted" };
};

const returnFolders = (): String[] => {
  const data: Bookmark[] = readData();
  const folderSet = new Set<String>();
  data.forEach((bookmark) => {
    folderSet.add(bookmark.folder);
  });
  return Array.from(folderSet);
};

const findByFolder = (folder: string): Bookmark[] | [] => {
  // const folderList : String[] = returnFolders()
  folder = folder || ROOT;
  const data: Bookmark[] = readData();
  const folderBookmarks: Bookmark[] = data.filter(
    (bookmark) => bookmark.folder === folder
  );
  return folderBookmarks || { error: "!Folder Not Found" };
};
const insertOne = (bookmark: Bookmark): Bookmark | any => {
  const data: Bookmark[] = readData();
  try {
    data.push(bookmark);
  } catch (err) {
    return err;
  }
  writeData(data);
  return bookmark;
};
// const findAll = () :
export { findOneById, returnFolders, findByFolder, insertOne, deleteOne };
