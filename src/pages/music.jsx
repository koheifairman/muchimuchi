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
        <meta
          name="description"
          content="音楽コンテンツ（ブログ、YouTube）に関するページ。"
        />
        <meta
          property="og:title"
          content="音楽 | むちむち無知の知くんのサイト"
        />
        <meta
          property="og:description"
          content="音楽コンテンツ（ブログ、YouTube）に関するページ。"
        />
        <meta property="og:url" content="https://muchimuchi.vercel.app/music" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="音楽 | むちむち無知の知くんのサイト"
        />
        <meta
          name="twitter:description"
          content="音楽コンテンツ（ブログ、YouTube）に関するページ。"
        />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link rel="canonical" href="https://muchimuchi.vercel.app/music" />
      </Head>
    </div>
  );
};

export default music;

music.displayName = "/music";
