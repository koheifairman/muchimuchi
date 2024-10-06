import GlobalHeader from "../../components/GlobalHeader";
import Breadcrumbs from "../../components/Breadcrumbs";
import breadcrumbsStyles from "../../styles/breadcrumbs/breadcrumbs1.module.css";
import IndexMain from "../../components/liberalarts/IndexMain";

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
    path: undefined,
  },
];
const LiberalartsIndex = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <IndexMain />

      <Head>
        <title>リベラル・アーツ</title>
      </Head>
    </div>
  );
};

export default LiberalartsIndex;

LiberalartsIndex.displayName = "./liberalarts/index";
