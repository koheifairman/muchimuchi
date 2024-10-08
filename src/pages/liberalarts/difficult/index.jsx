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
    label: "小難しい系",
    path: undefined,
  },
];

const DifficultIndex = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <Maintenance />

      <Head>
        <title>小難しい系</title>
        <meta name="description" content="小難しい系トップページ。" />
        <meta
          property="og:title"
          content="小難しい系 | むちむち無知の知くんのサイト"
        />
        <meta property="og:description" content="小難しい系トップページ。" />
        <meta
          property="og:url"
          content="https://muchimuchi.vercel.app/liberalarts/difficult"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="小難しい系 | むちむち無知の知くんのサイト"
        />
        <meta name="twitter:description" content="小難しい系トップページ。" />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link
          rel="canonical"
          href="https://muchimuchi.vercel.app/liberalarts/difficult"
        />
      </Head>
    </div>
  );
};

export default DifficultIndex;

DifficultIndex.displayName = "./liberalarts/difficult/index";
