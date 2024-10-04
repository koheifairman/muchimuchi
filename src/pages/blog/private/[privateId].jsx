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
  const fileDirectory = path.join(process.cwd(), "articles", "blog");
  // path.join('a','b',...)：パス（/a/b/...）を動的生成
  //絶対パス（/Users/takiguchikouhei/dev/blog/articles/blog）を取得

  const files = fs.readdirSync(fileDirectory); //パス内のファイルをで配列で取得（例：['oasisreunon.mdx', ...]）

  const paths = files.map((filesArg) => {
    const fileName = filesArg.replace(/\.mdx$/, ""); //「.mdx」削除（例：['oasisreunon', ...]）
    return {
      params: { privateId: fileName }, //例：{ privateId: 'oasisreunon' }
    };
  });

  return {
    paths, //paths：パスオブジェクトの配列（例：[{ params: { privateId: 'oasisreunon' } },{ params: { privateId: ...} }]）
    fallback: false, //指定されていないページ（pathsに含まれないパス）にアクセスされたら404ページを表示
  };
};

export const getStaticProps = async ({ params }) => {
  const filePath = path.join(
    process.cwd(),
    "articles",
    "blog",
    `${params.privateId}.mdx`,
  ); //${params.privateId}.mdxを取得

  const fileContent = fs.readFileSync(filePath, "utf-8"); //${params.privateId}.mdxの中身を読み込む
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
const PrivatePost = ({ frontMatter, mdxSource }) => {
  return (
    <div>
      <GlobalHeader />
      <div className={markdownStyles.markdown}>
        <MDXRemote {...mdxSource} components={components} />
      </div>

      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content="ブログ記事のページ。" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ブログ記事" />
        <meta property="og:description" content="ブログ記事のページ。" />
        <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="ブログ記事のページ。" />
        <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" />
      </Head>
    </div>
  );
};

export default PrivatePost;

PrivatePost.displayName = "./blog/private/[privateId]";
