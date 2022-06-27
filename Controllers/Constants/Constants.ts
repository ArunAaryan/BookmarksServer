import { Bookmark } from "../../types/bookmarks";

export const ROOT = "";
export const FOLDER_ERROR = { error: "!Folder Not Found" };
export const NEW_BOOKMARK: Bookmark = {
  k_uuid: "",
  f_order: 0,
  mod_date: Date.now(),
  folder: "",
  title: "",
  url: "",
  order: 0,
};
