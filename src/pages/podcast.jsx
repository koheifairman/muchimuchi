import GlobalHeader from "../components/GlobalHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbsStyles from "@/styles/breadcrumbs/breadcrumbs1.module.css";
import Maintenance from "../components/Maintenance";
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
    label: "Podcast",
    path: undefined,
  },
];

const podcast = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <Maintenance />

      <Head>
        <title>Podcast</title>
        <meta name="description" content="Podcast紹介ページ。" />
        <meta
          property="og:title"
          content="Podcast | むちむち無知の知くんのサイト"
        />
        <meta property="og:description" content="Podcast紹介ページ。" />
        <meta
          property="og:url"
          content="https://muchimuchi.vercel.app/podcast"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Podcast | むちむち無知の知くんのサイト"
        />
        <meta name="twitter:description" content="Podcast紹介ページ。" />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link rel="canonical" href="https://muchimuchi.vercel.app/podcast" />
      </Head>
    </div>
  );
};

export default podcast;

podcast.displayName = "/podcast";
