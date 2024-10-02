import GlobalHeader from "../../../components/GlobalHeader";
import Breadcrumbs from "../../../components/Breadcrumbs";
import breadcrumbsStyles from "../../../styles/breadcrumbs/breadcrumbs2.module.css";
import IllustrationMain from "../../../components/illustration/IllustrationMain";

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
    path: "/illustration",
  },
  {
    id: 4,
    label: ">",
    path: undefined,
  },
  {
    id: 5,
    label: "石黒正数",
    path: undefined,
  },
];

const images = [
  {
    id: 1,
    src: "/illustration/ishiguro/ishiguro-1.webp",
    alt: "そうかいそうかい",
    date: "2024/9/14",
    comment:
      "シーサイドがメイド喫茶と化した経緯と二人の関係性をテンポよく描いた1ページ。「儲かるらしい」からやるばあちゃんの現金さが好きです笑。歳とってもたくましい根性に素朴な親しみを感じます。",
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
      <IllustrationMain images={images} />

      <Head>
        <title>石黒正数のイラスト</title>
        <meta name="description" content="石黒正数のイラストページ。" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="石黒正数のイラスト" />
        <meta property="og:description" content="石黒正数のイラストページ。" />
        <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="石黒正数のイラストページ。" />
        <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" />
      </Head>
    </div>
  );
};

export default index;

index.displayName = "/illustration/ishiguromasakazu/index";
