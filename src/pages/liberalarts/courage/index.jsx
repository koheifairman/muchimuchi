import GlobalHeader from "../../../components/GlobalHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbsStyles from "@/styles/breadcrumbs/breadcrumbs2.module.css";
import IndexMain from "../../../components/liberalarts/courage/IndexMain";

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
    label: "勇気出る系",
    path: undefined,
  },
];

const CourageIndex = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <IndexMain />

      <Head>
        <title>勇気出る系</title>
      </Head>
    </div>
  );
};

export default CourageIndex;

CourageIndex.displayName = "./liberalarts/courage/index";
