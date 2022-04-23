import type { AppProps } from "next/app";
import "../sass/app.scss";
import Header from "../src/components/common/header";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Suspense>
        <Component {...pageProps} />
      </Suspense>
    </RecoilRoot>
  );
}

export default MyApp;
