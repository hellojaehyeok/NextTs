import styled from '@emotion/styled';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import { useRecoilValue } from 'recoil';
// import itemListSelector from '../recoil/itemListSelector';
import { IItemType } from '../types/itemInterface';

const API__URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

const ItemList = () => {
  // 비동기 통신을 recoil로 하는것이 효과적인가? 궁금하다.
  // const itemListArr: IItemType[] = useRecoilValue(itemListSelector);

  const [itemListArr, setItemListArr] = useState<IItemType[]>([]);

  const getListData = async () => {
    const list: IItemType[] = await axios.get(API__URL).then((res: any) => res.data);
    setItemListArr([...list]);
  };

  useEffect(() => {
    getListData();
  }, []);

  return (
    <List>
      {itemListArr.map(item => {
        return (
          <ItemElWrap key={item.id}>
            <Link href={`/detail/${item.id}`}>
              <a>
                <img src={item.image_link} alt="이미지 사진" />
                <div>{item.name}</div>
                <div>${item.price}</div>
              </a>
            </Link>
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
  cursor: pointer;
  transition: 400ms;
  &:hover {
    transform: translateY(-20px);
  }
  & div {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    padding: 5px 0 0;
  }
`;
