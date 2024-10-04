// モジュール
import fs from "fs"; // fs：Node.jsのモジュール。ファイルシステム。ファイルやディレクトリを扱う（読み込み、作成、削除、移動など）
import path from "path"; //path：Node.jsのモジュール。ファイルやディレクトリのパス操作をする関数（joinなど）を提供する
import matter from "gray-matter"; //matter：mdファイルのフロントマターをパース（解析、変換）する関数
import { serialize } from "next-mdx-remote/serialize"; //mdxの中身をNext.jsでレンダリングできる形式に、サーバーサイドでシリアライズ（変換）する関数
import { MDXRemote } from "next-mdx-remote"; //シリアライズされたMDXをクライアントサイドでレンダリングするコンポーネント
import Image from "next/image";
import Head from "next/head";

import GlobalHeader from "@/components/GlobalHeader";
import markdownStyles from "../../../styles/markdown.module.css";
import Maintenance from "@/components/Maintenance.jsx";

// getStaticPaths：クライアントサイドで事前に静的生成したいページのパスを指定
export const getStaticPaths = async () => {
  const fileDirectory = path.join(process.cwd(), "articles", "liberalarts");
  // path.join('a','b',...)：パス（/a/b/...）を動的生成
  //絶対パス（/Users/takiguchikouhei/dev/blog/src/pages/blog/private/articles）を取得

  const files = fs.readdirSync(fileDirectory); //パス内のファイルをで配列で取得（例：['privateryan.mdx', ...]）

  const paths = files.map((filesArg) => {
    const fileName = filesArg.replace(/\.mdx$/, ""); //「.mdx」削除（例：['privateryan', ...]）
    return {
      params: { courageId: fileName }, //例：{ courageId: 'privateryan' }
    };
  });

  return {
    paths, //paths：パスオブジェクトの配列（例：[{ params: { courageId: 'privateryan' } },{ params: { courageId: ...} }]）
    fallback: false, //指定されていないページ（pathsに含まれないパス）にアクセスされたら404ページを表示
  };
};

export const getStaticProps = async ({ params }) => {
  const filePath = path.join(
    process.cwd(),
    "articles",
    "liberalarts",
    `${params.courageId}.mdx`,
  ); //${params.courageId}.mdxを取得

  const fileContent = fs.readFileSync(filePath, "utf-8"); //${params.courageId}.mdxの中身を読み込む
  const { data, content } = matter(fileContent); //中身をdata（フロントマター）とcontent（本文）に分ける
  const mdxSource = await serialize(content); // content（本文）をJSXに変換

  return {
    props: {
      frontMatter: data, //props名「frontMatter」=data（フロントマター）
      mdxSource, //props名「mdxSource」=mdxSource
    },
  };
};

// カスタムコンポーネント
const components = {
  Thumbnail: (props) => <div className={markdownStyles.thumbnail} {...props} />,
  Subtitle: (props) => <div className={markdownStyles.subtitle} {...props} />,
  Maintenance,
  Image,
};

// （{...mdxSource}）：スプレッド構文。{mdxSource}内のすべてのプロパティ（content、カスタムコンポーネントなど）を<MDXRemote />に渡す。
const CouragePost = ({ frontMatter, mdxSource }) => {
  return (
    <div>
      <GlobalHeader />
      <div className={markdownStyles.markdown}>
        <MDXRemote {...mdxSource} components={components} />
      </div>

      <Head>
        <title>{frontMatter.title}</title>
        <meta property="og:type" content="article" />
        <meta
          name="description"
          content="勇気出る系リベラルアーツの記事ページ。"
        />
        <meta property="og:title" content="勇気出る系リベラルアーツの記事" />
        <meta
          property="og:description"
          content="勇気出る系リベラルアーツの記事ページ。"
        />
        <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta
          name="twitter:description"
          content="勇気出る系リベラルアーツの記事ページ。"
        />
        <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" />
      </Head>
    </div>
  );
};

export default CouragePost;

CouragePost.displayName = "./liberalarts/courage/[courageId]";
