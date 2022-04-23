import axios from "axios";
import { selector } from "recoil";
import { IItemEl } from "../types/itemInterface";

const API__URL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

export default selector({
  key: "itemListSelector",
  get: async ({}): Promise<IItemEl[]> => {
    const list: Promise<IItemEl[]> = axios
      .get(API__URL)
      .then((res: any) => res.data);
    return list;
  },
});
