import GlobalHeader from "@/components/GlobalHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbsStyles from "@/styles/breadcrumbs/breadcrumbs1.module.css";
import IndexMain from "@/components/blog/IndexMain";
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
    label: "Blog",
    path: "/blog",
  },
];

const BlogIndex = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <IndexMain />

      <Head>
        <title>Blog</title>
        <meta name="description" content="ブログトップページ。" />
        <meta
          property="og:title"
          content="Blog | むちむち無知の知くんのサイト"
        />
        <meta property="og:description" content="ブログトップページ。" />
        <meta property="og:url" content="https://muchimuchi.vercel.app/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blog | むちむち無知の知くんのサイト"
        />
        <meta name="twitter:description" content="ブログトップページ。" />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link rel="canonical" href="https://muchimuchi.vercel.app/blog" />
      </Head>
    </div>
  );
};

export default BlogIndex;

BlogIndex.displayName = "./blog/index";
