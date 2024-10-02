import GlobalHeader from "../components/GlobalHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import breadcrumbsStyles from "../styles/breadcrumbs/breadcrumbs1.module.css";
import AboutMain from "../components/about/AboutMain";

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
    label: "About",
    path: undefined,
  },
];

const about = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <AboutMain />

      <Head>
        <title>About</title>
        <meta
          name="description"
          content="マスコットキャラ「むちむち無知の知くん」と管理人の紹介ページ。"
        />
        <meta property="og:title" content="About" />
        <meta
          property="og:description"
          content="マスコットキャラ「むちむち無知の知くん」と管理人の紹介ページ。"
        />
        <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta
          name="twitter:description"
          content="マスコットキャラ「むちむち無知の知くん」と管理人の紹介ページ。"
        />
        <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" />
      </Head>
    </div>
  );
};

export default about;

about.displayName = "/about";
