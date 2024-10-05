import GlobalHeader from "../components/GlobalHeader";
import IndexHeader from "../components/index/IndexHeader";
import IndexMain from "../components/index/IndexMain";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <GlobalHeader />
      <IndexHeader />
      <IndexMain />

      <Head>
        <title>むちむち無知の知くんのサイト</title>
        {/* <meta name="description" content="ホームページ" />
        <meta property="og:title" content="ホームページ" />
        <meta property="og:description" content="ホームページ" /> */}
        {/* <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="ホームページ" /> */}
        {/* <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" /> */}
      </Head>
    </div>
  );
};

export default index;

index.displayName = "/";
