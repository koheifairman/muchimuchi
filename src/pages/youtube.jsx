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
        {/* <meta name="description" content="YouTubeのページ。" />
        <meta property="og:title" content="YouTube" />
        <meta property="og:description" content="YouTubeのページ。" /> */}
        {/* <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="YouTubeのページ。" /> */}
        {/* <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" /> */}
      </Head>
    </div>
  );
};

export default youtube;

youtube.displayName = "/about";
