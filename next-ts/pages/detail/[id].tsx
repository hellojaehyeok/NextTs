import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ItemEl from "../../src/components/itemEl";
import { IItemEl } from "../../src/types/itemInterface";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<IItemEl>();

  // 아이템 정보
  const getItemData = async () => {
    const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const itemData: IItemEl = await axios
      .get(API_URL)
      .then((res: any) => res.data);
    setItem(itemData);
  };

  useEffect(() => {
    if (id) {
      getItemData();
    }
  }, [id]);

  return <ItemEl item={item} />;
};

export default Detail;
