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
        <title>勇気出る系リベラルアーツのインデックス</title>
        <meta
          name="description"
          content="勇気出る系リベラルアーツのインデックスページ。"
        />
        <meta
          property="og:title"
          content="勇気出る系リベラルアーツのインデックス"
        />
        <meta
          property="og:description"
          content="勇気出る系リベラルアーツのインデックスページ。"
        />
        <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta
          name="twitter:description"
          content="勇気出る系リベラルアーツのインデックスページ。"
        />
        <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" />
      </Head>
    </div>
  );
};

export default CourageIndex;

CourageIndex.displayName = "./liberalarts/courage/index";
