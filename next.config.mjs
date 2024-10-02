import withMDX from "@next/mdx";
import nextSitemap from './next-sitemap.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // 必要に応じて他の設定も追加できます
  pageExtensions: ['js', 'jsx', 'mdx'],  // MDXファイルをページとしてサポート
};

// withMDXとwithSitemapをチェーン（順序：MDX設定 => サイトマップ設定）
export default withMDX()(nextConfig, nextSitemap);
