import "../styles/global.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>むちむち無知の知くんのサイト</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

App.displayName = "/_app";
