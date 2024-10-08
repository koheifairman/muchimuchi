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
        <meta name="description" content="リベラル・アーツトップページ。" />
        <meta
          property="og:title"
          content="リベラル・アーツ | むちむち無知の知くんのサイト"
        />
        <meta
          property="og:description"
          content="リベラル・アーツトップページ。"
        />
        <meta
          property="og:url"
          content="https://muchimuchi.vercel.app/liberalarts"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="リベラル・アーツ | むちむち無知の知くんのサイト"
        />
        <meta
          name="twitter:description"
          content="リベラル・アーツトップページ。"
        />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link
          rel="canonical"
          href="https://muchimuchi.vercel.app/liberalarts"
        />
      </Head>
    </div>
  );
};

export default LiberalartsIndex;

LiberalartsIndex.displayName = "./liberalarts/index";
