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
    label: "久保帯人",
    path: undefined,
  },
];

const images = [
  {
    id: 1,
    src: "/illustration/kubo/kubo-1.webp",
    alt: "ギンvs一護",
    date: "2024/9/14",
    comment:
      "46巻400話の1ページの模写です。「13kmや」のちょっとあとですね。ギンは意外と全編通して戦闘描写少ないので、この巻は貴重です...。卍解「神殺鎗」、作中屈指の性能だと思いますが、一護・藍染とつよつよキャラ相手にしか使っていないので（しかも一護には多分手加減してるし）、なんか目立ってないなあ...と謎に悔しい。",
  },
  {
    id: 2,
    src: "/illustration/kubo/kubo-5.webp",
    alt: "ギン",
    date: "2024/9/14",
    comment: "ギンです。かっこいいです。",
  },
  {
    id: 3,
    src: "/illustration/kubo/kubo-2.webp",
    alt: "シャウロン",
    date: "2024/9/14",
    comment:
      "シャウロンです。グリムジョーの従属官で一番好きです。帰刃のデザインめちゃかっこよくないですか。解号「截て」ってのもいい。変換出ねーよ...。",
  },
  {
    id: 4,
    src: "/illustration/kubo/kubo-3.webp",
    alt: "檜佐木",
    date: "2024/9/14",
    comment:
      "檜佐木です。38巻の活躍がかっこよかったです（それ以降噛ませ役ですが...）。卍解「風死絞縄」は本編で見たかったなあ。最終話で卍解するする詐欺メタいじりされてるのは笑いました笑。",
  },
  {
    id: 5,
    src: "/illustration/kubo/kubo-4.webp",
    alt: "一角",
    date: "2024/9/14",
    comment:
      "一角です。23巻のvsエドラドはマジでかっこよかった...。あの戦いのせいで「従属官に壊される卍解わろた」みたいによくいじられますが、それはほら、相手も強いんだよっていう演出というか、卍解の登場順の問題というか、「卍解は壊れたら戻らない」っていう後出し設定のせいというか、ねえ、そういうのじゃんか。もう龍紋鬼灯丸のことはそっとしておいてあげて...。",
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
        <title>久保帯人</title>
        <meta name="description" content="久保帯人のイラストページ。" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="久保帯人のイラスト" />
        <meta property="og:description" content="久保帯人のイラストページ。" />
        <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="久保帯人のイラストページ。" />
        <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" />
      </Head>
    </div>
  );
};

export default index;

index.displayName = "/illustration/kubotite/index";
