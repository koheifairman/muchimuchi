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
      </Head>
    </div>
  );
};

export default youtube;

youtube.displayName = "/about";
