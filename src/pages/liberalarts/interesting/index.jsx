import GlobalHeader from "../../../components/GlobalHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbsStyles from "@/styles/breadcrumbs/breadcrumbs2.module.css";
import Maintenance from "@/components/Maintenance";

// モジュール
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
    label: "リベラル・アーツ",
    path: "/liberalarts",
  },
  {
    id: 4,
    label: ">",
    path: undefined,
  },
  {
    id: 5,
    label: "面白い系",
    path: undefined,
  },
];

const InterestingIndex = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <Maintenance />

      <Head>
        <title>面白い系</title>
      </Head>
    </div>
  );
};

export default InterestingIndex;

InterestingIndex.displayName = "./liberalarts/interesting/index";
