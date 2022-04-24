import styled from "@emotion/styled";
import React from "react";
import { useRecoilValue } from "recoil";
import itemListSelector from "../recoil/itemListSelector";
import { IItemEl } from "../types/itemInterface";

const ItemList = ({}) => {
  const itemListArr: IItemEl[] = useRecoilValue(itemListSelector);

  return (
    <List>
      {itemListArr.map((item, index) => {
        return (
          <ItemElWrap key={item.id}>
            <img src={item.image_link} alt="이미지 사진" />
            <div>{item.name}</div>
            <div>${item.price}</div>
          </ItemElWrap>
        );
      })}
    </List>
  );
};

export default ItemList;

const List = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const ItemElWrap = styled.li`
  width: 33%;
  text-align: center;
  padding: 0 20px 50px;
  & div {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    padding: 5px 0 0;
  }
`;
