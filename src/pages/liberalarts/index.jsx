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
        <title>リベラルアーツのインデックス</title>
        <meta
          name="description"
          content="リベラルアーツのインデックスページ。"
        />
        <meta property="og:title" content="リベラルアーツのインデックス" />
        <meta
          property="og:description"
          content="リベラルアーツのインデックスページ。"
        />
        <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta
          name="twitter:description"
          content="リベラルアーツのインデックスページ。"
        />
        <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" />
      </Head>
    </div>
  );
};

export default LiberalartsIndex;

LiberalartsIndex.displayName = "./liberalarts/index";
