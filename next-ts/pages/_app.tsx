import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../sass/app.scss";
import Header from "../components/common/header";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
