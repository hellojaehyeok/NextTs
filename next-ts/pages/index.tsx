import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import ItemList from "../src/components/itemList";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>메인페이지</title>
      </Head>

      <ItemList />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;
