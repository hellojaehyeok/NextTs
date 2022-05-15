import styled from '@emotion/styled';
import axios from 'axios';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { IItemType } from '../types/itemInterface';

const ItemList = () => {
  const [itemListArr, setItemListArr] = useState<IItemType[]>([]);

  /*
    NEXT_PUBLIC_API_URL의 타입이 "string | undefined" 여서 axios에서 오류가 난다.
    -> as string으로 강제 형변환
  */
  const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

  const getListData = useCallback(async () => {
    const list: IItemType[] = await axios.get(API_URL).then((res: any) => res.data);
    setItemListArr([...list]);
  }, [API_URL]);

  useEffect(() => {
    getListData();
  }, [getListData]);

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
