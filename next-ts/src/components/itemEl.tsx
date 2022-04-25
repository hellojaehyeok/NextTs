import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { IItemEl } from "../types/itemInterface";

interface ItemElType {
  item: IItemEl | undefined;
}

const ItemEl = ({ item }: ItemElType) => {
  if (!item) {
    return <>Loading</>;
  }
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
