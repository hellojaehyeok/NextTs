import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import ItemEl from '../../src/components/itemEl';
import { IItemType } from '../../src/types/itemInterface';

interface IDetail {
  item: IItemType;
}

const Detail = ({ item }: IDetail) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
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

  return {
    props: {
      item: itemData,
    },
  };
}

export default Detail;
