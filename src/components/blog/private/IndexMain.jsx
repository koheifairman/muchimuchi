import { useState } from "react";
import { useRouter } from "next/router";

const IndexMain = ({ posts }) => {
  // ---ステート---
  const [selectedTag, setSelectedTag] = useState(undefined);
  const router = useRouter();
  // ---関数---
  const clickRouter = (postsArg) => {
    router.push(`/blog/private/${postsArg.frontMatter.slug}`);
  };
  // jsx, mdx部分非表示
  const removeJSXAndMDX = (removeArg) => {
    const withoutJSXContent = removeArg.replace(/<[^>]*>[^<]*<\/[^>]*>/g, ""); // 正規表現でJSXタグとその中身全体を削除
    const withoutJSXTags = withoutJSXContent.replace(/<\/?[^>]+(>|$)/g, ""); // 残った単独のJSXタグも削除（例: <img />のような自己閉じタグ）
    const withoutJSXAndMDX = withoutJSXTags.replace(/^#.*$/gm, "").trim(); // 行頭が#で始まるものを削除
    return withoutJSXAndMDX;
  };
  // ---データ---
  const allTags = Array.from(
    new Set(posts.flatMap((postsArg) => postsArg.frontMatter.tags)),
  );
  const filteredPosts = selectedTag
    ? posts.filter((postArg) => postArg.frontMatter.tags.includes(selectedTag))
    : posts;
  // tagsを日本語に変換
  const tagTranslations = {
    music: "音楽",
    miscellaneous: "雑記",
    liberalarts: "リベラル・アーツ",
    illustration: "イラスト",
    courage: "勇気出る系",
  };

  // {posts} = {oasisreunion.mdx{slug:oasisreunion, frontMatter:〜, content:〜}, ...}（articles/blogの全mdxファイルの情報）

  // Array.from()：配列に変換する関数（Setは配列のように扱えるがオブジェクトなので、配列に変換する必要あり）
  // new：オブジェクトを生成するキーワード
  // Set：JavaScriptオブジェクト。値を一意に保持する（配列の中身を重複させない）
  // new Set()：値を一意に保持したオブジェクトを生成
  // flatMap：配列内の指定要素（この場合frontMatter.tags）を1次元配列で返すメソッド。（例：oasisreunion.mdxから["music"]）
  // {allTags} = ["music", "miscellaneous", ...];（articles/blogの全mdxファイルのfrontMatter.tags）

  // filter()：配列を指定条件でフィルターして新しい配列を作るメソッド
  // includes()：配列や文字列に指定要素が含まれるか調べるメソッド。trueかfalseを返す。
  // selectedTag：初期値undefined
  // filteredPosts（selectedTagが値を持つ時）：frontMatter.tagsがselectedTagを含むかフィルターされた{posts}
  // filteredPosts（selectedTagが値を持たない時）：{posts}そのまま

  // ||：論理和（OR）を表す演算子。左辺||右辺で、左辺が真なら左辺を返し、左辺が偽なら右辺を返す
  // 左辺tagTranslations[tagArg]が真なら（tagTranslations[music]など）ならtagTranslations[tagArg]を表示
  // 左辺tagTranslations[tagArg]が偽なら（例：tagTranslations[××]）ならtagArg（tagTranslationsに含めてない××）をそのまま表示
  return (
    <div className="container">
      {/* フィルターボタン */}
      <div className="tag-container">
        {/* 「全て表示」ボタン */}
        <button
          onClick={() => setSelectedTag(undefined)}
          className="tag-button"
        >
          全て表示
        </button>
        {/* 個別ボタン */}
        {allTags.map((tagArg, index) => {
          return (
            <button
              key={index}
              onClick={() =>
                setSelectedTag(tagArg === selectedTag ? undefined : tagArg)
              }
              className={`tag-button ${tagArg === selectedTag ? "active" : ""}`}
            >
              {tagTranslations[tagArg] || tagArg}
            </button>
          );
        })}
      </div>

      {/* フィルターされた記事一覧 */}
      {filteredPosts.map((postsArg) => {
        return (
          <div key={postsArg.frontMatter.slug} className="article-container">
            <div className="title" onClick={() => clickRouter(postsArg)}>
              {postsArg.frontMatter.title}
            </div>
            <div className="date">更新: {postsArg.frontMatter.date}</div>
            <div className="content">
              {removeJSXAndMDX(postsArg.content).substring(0, 150)}...
            </div>
            <hr className="hr" />
          </div>
        );
      })}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 30px auto 0 auto;
          width: 900px;
        }
        // ---タグ一覧---
        .tag-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-bottom: 20px;
        }
        .tag-button {
          background-color: #f0f0f0;
          border: none;
          padding: 10px 20px;
          margin: 0 10px;
          cursor: pointer;
          font-size: 16px;
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }
        .tag-button:hover {
          background-color: #d3d3d3;
        }
        .tag-button.active {
          background-color: #a9a9a9;
        }
        // ---タグ一覧---
        .article-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 auto 0 auto;
          width: 900px;
        }
        .title {
          font-family: "Zen Maru Gothic";
          font-style: normal;
          font-size: 36px;
          font-weight: 400;
          margin: 0;
        }
        .title:hover {
          text-decoration: underline;
          text-decoration-thickness: 2px;
          cursor: pointer;
        }
        .date {
          font-family: "Zen Maru Gothic";
          font-style: normal;
          font-size: 20px;
          font-weight: 100;
          margin: 10px auto 10px auto;
        }
        .content {
          font-family: "Zen Maru Gothic";
          font-style: normal;
          font-size: 20px;
          font-weight: 100;
          margin: 0;
        }
        .hr {
          width: 100%;
          border: none;
          border-bottom: 2px dashed #a9a9a9;
          margin: 20px auto 20px auto;
        }
      `}</style>
    </div>
  );
};

export default IndexMain;

IndexMain.displayName = "../components/blog/private/IndexMain";
