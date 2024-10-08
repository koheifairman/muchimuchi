import GlobalHeader from "../components/GlobalHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import breadcrumbsStyles from "../styles/breadcrumbs/breadcrumbs1.module.css";
import Maintenance from "@/components/Maintenance";
// import YoutubeMain from "../components/youtube/YoutubeMain";
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
    label: "YouTube",
    path: undefined,
  },
];

const youtube = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <Maintenance />
      {/* <YoutubeMain /> */}

      <Head>
        <title>YouTube</title>
        <meta name="description" content="YouTubeチャンネル一覧ページ。" />
        <meta
          property="og:title"
          content="YouTube | むちむち無知の知くんのサイト"
        />
        <meta
          property="og:description"
          content="YouTubeチャンネル一覧ページ。"
        />
        <meta
          property="og:url"
          content="https://muchimuchi.vercel.app/youtube"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="YouTube | むちむち無知の知くんのサイト"
        />
        <meta
          name="twitter:description"
          content="YouTubeチャンネル一覧ページ。"
        />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link rel="canonical" href="https://muchimuchi.vercel.app/youtube" />
      </Head>
    </div>
  );
};

export default youtube;

youtube.displayName = "/about";
