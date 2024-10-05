import GlobalHeader from "@/components/GlobalHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbsStyles from "@/styles/breadcrumbs/breadcrumbs1.module.css";
import IndexMain from "@/components/music/IndexMain";
import Head from "next/head";

const breadcrumbsItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: ">",
    path: undefined,
  },
  {
    id: 3,
    label: "音楽",
    path: undefined,
  },
];

const music = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <IndexMain />

      <Head>
        <title>音楽</title>
        {/* <meta name="description" content="音楽のページ。" />
        <meta property="og:title" content="音楽" /> */}
        <meta property="og:description" content="音楽のページ。" />
        {/* <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="音楽のページ。" /> */}
        {/* <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" /> */}
      </Head>
    </div>
  );
};

export default music;

music.displayName = "/music";
