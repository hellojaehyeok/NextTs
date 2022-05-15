import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import ItemEl from '../../src/components/itemEl';
import { IItemType } from '../../src/types/itemInterface';

interface IDetail {
  item: IItemType;
  current_env: string;
}

const Detail = ({ item, current_env }: IDetail) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {current_env} 모드 입니다.
          <ItemEl item={item} />
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const itemData: IItemType = await axios.get(API_URL).then((res: any) => res.data);

  const current_env = process.env.name;

  return {
    props: {
      item: itemData,
      current_env: current_env,
    },
  };
}

export default Detail;
