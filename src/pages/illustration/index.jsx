import GlobalHeader from "@/components/GlobalHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbsStyles from "@/styles/breadcrumbs/breadcrumbs1.module.css";
import IndexMain from "@/components/illustration/IndexMain";

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
    label: "イラスト",
    path: undefined,
  },
];
const index = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <IndexMain />

      <Head>
        <title>イラスト</title>
        <meta name="description" content="イラスト作者一覧ページ。" />
        <meta
          property="og:title"
          content="イラスト | むちむち無知の知くんのサイト"
        />
        <meta property="og:description" content="イラスト作者一覧ページ。" />
        <meta
          property="og:url"
          content="https://muchimuchi.vercel.app/illustration"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="イラスト | むちむち無知の知くんのサイト"
        />
        <meta name="twitter:description" content="イラスト作者一覧ページ。" />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link
          rel="canonical"
          href="https://muchimuchi.vercel.app/illustration"
        />
      </Head>
    </div>
  );
};

export default index;

index.displayName = "/illustration/index";
