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
        <meta name="description" content="Podcastのページ。" />
        <meta property="og:title" content="Podcast" />
        <meta property="og:description" content="Podcastのページ。" />
        <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="Podcastのページ。" />
        <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" />
      </Head>
    </div>
  );
};

export default podcast;

podcast.displayName = "/podcast";
