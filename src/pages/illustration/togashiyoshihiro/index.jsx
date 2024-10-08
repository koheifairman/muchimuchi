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
    label: "冨樫義博",
    path: undefined,
  },
];

const images = [
  {
    id: 1,
    src: "https://storage.googleapis.com/muchimuchi_bucket/illustration/togashi/togashi-8.webp",
    alt: "来い！",
    date: "2024/9/14",
    height: 566,
    comment:
      "19巻、No.192最終ページの模写です。蚊女の身体のシェイプ描いていて気持ちよかったです。蜘蛛男の手たくさん描くの面倒で勝手に2本にしました笑。他にも所々描きやすい形に変えてしまっています（模写とは）。見比べてみてください〜",
  },
  {
    id: 2,
    src: "https://storage.googleapis.com/muchimuchi_bucket/illustration/togashi/togashi-3.webp",
    alt: "教えねーよ、敵だろお前",
    date: "2024/9/14",
    height: 579,
    comment:
      "パームは身体が蟻になりましたが、心は人間の頃のままでした。ドヤ顔で敵と決めつけられて、そりゃ怒ります。",
  },
  {
    id: 3,
    src: "https://storage.googleapis.com/muchimuchi_bucket/illustration/togashi/togashi-2.webp",
    alt: "お前をぶっ殺したい気持ち",
    date: "2024/9/14",
    height: 342,
    comment:
      "「ここぞ！」というシーンの描き文字がいい味を出しています。すごく怖いです。",
  },
  {
    id: 4,
    src: "https://storage.googleapis.com/muchimuchi_bucket/illustration/togashi/togashi-1.webp",
    alt: "本読む人",
    date: "2024/9/14",
    height: 572,
    comment:
      "33巻にちょっとだけ登場するモブです。暗黒大陸編に入り、描き込みが丁寧になった印象があります。誌面で見た当時、それがなんか嬉しくて描いたんだと思います。",
  },
  {
    id: 5,
    src: "https://storage.googleapis.com/muchimuchi_bucket/illustration/togashi/togashi-5.webp",
    alt: "師団長",
    date: "2024/9/14",
    height: 281,
    comment: "蟻の師団長達です。みんなキャラデザが好きです。",
  },
  {
    id: 6,
    src: "https://storage.googleapis.com/muchimuchi_bucket/illustration/togashi/togashi-6.webp",
    alt: "ヒソカ１",
    date: "2024/9/14",
    height: 587,
    comment: "ヒソカの隆々した筋肉は描きたくなります。",
  },
  {
    id: 7,
    src: "https://storage.googleapis.com/muchimuchi_bucket/illustration/togashi/togashi-7.webp",
    alt: "ヒソカ２",
    date: "2024/9/14",
    height: 489,
    comment: "ヒソカはスタイルいいので、色んなポーズが画になりますね。",
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
        <title>冨樫義博</title>
        <meta name="description" content="冨樫義博のイラストページ。" />
        <meta
          property="og:title"
          content="冨樫義博 | むちむち無知の知くんのサイト"
        />
        <meta property="og:description" content="冨樫義博のイラストページ。" />
        <meta
          property="og:url"
          content="https://muchimuchi.vercel.app/illustration/togashiyoshihiro"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="冨樫義博 | むちむち無知の知くんのサイト"
        />
        <meta name="twitter:description" content="冨樫義博のイラストページ。" />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link
          rel="canonical"
          href="https://muchimuchi.vercel.app/illustration/togashiyoshihiro"
        />
      </Head>
    </div>
  );
};

export default index;

index.displayName = "/illustration/togashiyoshihiro/index";
