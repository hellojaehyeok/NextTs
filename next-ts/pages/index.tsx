import type { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import itemListSelector from "../src/recoil/itemListSelector";
import { IItemEl } from "../src/types/itemInterface";

const Home: NextPage = () => {
  const itemList: IItemEl[] = useRecoilValue(itemListSelector);

  return (
    <div>
      {itemList.map((item, index) => {
        return (
          <div key={item.id}>
            <img src={item.image_link} alt="이미지 사진" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
