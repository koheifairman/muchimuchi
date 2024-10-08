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

// getStaticPaths：クライアントサイドで事前に静的生成するページパスを指定
// path.join('a','b',...)：パス（/a/b/...）を動的生成
// fileDirectory = /~/articles/liberalarts
// files = ['privateryan.mdx', ...]
// fileName = ['privateryan', ...]
// paths = {params: { courageId: 'privateryan'}, { params: { courageId: ...}}
// paths（getStaticPaths戻り値） = [{ params: { courageId: 'privateryan' } },{ params: { courageId: ...} }]
// fallback: false：指定されていないパス（pathsに含まれないパス）にアクセスされたら404ページ表示
export const getStaticPaths = async () => {
  const fileDirectory = path.join(process.cwd(), "articles", "liberalarts");
  const files = fs.readdirSync(fileDirectory);

  const paths = files.map((filesArg) => {
    const fileName = filesArg.replace(/\.mdx$/, "");
    return {
      params: { courageId: fileName },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// filePath = /~/articles/liberalarts/${params.courageId}.mdx
// fileContent = ${params.courageId}.mdxの中身全体
// data = fileContentのフロントマター部分
// content = fileContentの本文部分
// mdxSource = JSXに変換したcontent
// frontMatter（プロップス） = data
// mdxSource（プロップス） = mdxSource
export const getStaticProps = async ({ params }) => {
  const filePath = path.join(
    process.cwd(),
    "articles",
    "liberalarts",
    `${params.courageId}.mdx`,
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: data,
      mdxSource,
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
        <meta
          name="description"
          content={`「${frontMatter.title}」の記事ページ。`}
        />
        <meta
          property="og:title"
          content={`${frontMatter.title} | むちむち無知の知くんのサイト`}
        />
        <meta
          property="og:description"
          content={`「${frontMatter.title}」の記事ページ。`}
        />
        <meta
          property="og:url"
          content={`https://muchimuchi.vercel.app/liberalarts/courage/${frontMatter.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${frontMatter.title} | むちむち無知の知くんのサイト`}
        />
        <meta
          name="twitter:description"
          content={`「${frontMatter.title}」の記事ページ。`}
        />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link
          rel="canonical"
          href={`https://muchimuchi.vercel.app/liberalarts/courage/${frontMatter.slug}`}
        />
      </Head>
    </div>
  );
};

export default CouragePost;

CouragePost.displayName = "./liberalarts/courage/[courageId]";
