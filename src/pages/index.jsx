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
        <meta name="description" content="トップページ。" />
        <meta property="og:title" content="むちむち無知の知くんのサイト" />
        <meta property="og:description" content="トップページ。" />
        <meta property="og:url" content="https://muchimuchi.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="トップページ。" />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link rel="canonical" href="https://muchimuchi.vercel.app" />
      </Head>
    </div>
  );
};

export default index;

index.displayName = "/";
