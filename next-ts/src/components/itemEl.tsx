import { css } from '@emotion/react';
import React from 'react';
import { IItemType } from '../types/itemInterface';

interface ItemElType {
  item: IItemType;
}

const ItemEl = ({ item }: ItemElType) => {
  const { image_link, name, brand, price, description } = item;

  return (
    <div
      css={css`
        width: 1000px;
        margin: 0 auto;
      `}
    >
      <img src={image_link} alt="아이템 이미지" />

      <div
        css={css`
          display: flex;
          font-size: 16px;
          line-height: 25px;
        `}
      >
        Name : {name} <br />
        Brand : {brand} <br />
        Price : {price} <br />
      </div>

      <div>
        Description : <br /> <hr />
        {description}
      </div>
    </div>
  );
};

export default ItemEl;
