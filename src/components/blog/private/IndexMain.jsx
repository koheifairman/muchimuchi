import { useState } from "react";
import { useRouter } from "next/router";

const IndexMain = ({ posts }) => {
  const router = useRouter();
  const clickRouter = (postsArg) => {
    router.push(`/blog/private/${postsArg.slug}`);
  };

  const removeJSXAndMD = (removeArg) => {
    const withoutJSXContent = removeArg.replace(/<[^>]*>[^<]*<\/[^>]*>/g, ""); // JSXタグとその中身全体を削除する
    const withoutJSXTags = withoutJSXContent.replace(/<\/?[^>]+(>|$)/g, ""); // 残った単独のJSXタグも削除（例: <img />のような自己閉じタグ）
    const withoutJSXAndMD = withoutJSXTags.replace(/^#.*$/gm, "").trim(); // 行頭が#で始まるものを削除
    return withoutJSXAndMD;
  };

  const [selectedTag, setSelectedTag] = useState("");

  // Array.from()：Setオブジェクトを配列に変換する。Setは配列のように扱えるが配列ではなく、変換する必要あり
  // new：オブジェクトを生成するキーワード。new Setで、Setの内容を持ったオブジェクトを生成
  // Set：JavaScriptオブジェクト。値を一意に保持する（配列の中身を重複させない）
  // posts = [oasisreunion.mdx{slug:oasisreunion, frontMatter:〜, content:〜}, ...]
  // flatMap：配列内の指定要素（この場合frontMatter.tags）を1次元配列で返すメソッド。例：oasisreunion.mdxの場合["blog", "private", "music"]
  const allTags = Array.from(
    new Set(posts.flatMap((postsArg) => postsArg.frontMatter.tags)),
  ); //posts（全ての記事）のfrontMatter.tagsの配列を取得（["music", "miscellaneous"]）

  // filter()：配列の要素を指定条件でフィルターして新しい配列を作るメソッド
  // includes()：配列や文字列に指定要素が含まれているか調べるメソッド。trueかfalseを返す。
  // selectedTagが値を持てば（何かタグが選ばれれば）、frontMatter.tagsにselectedTagが含まれるか調べたpostsをfilteredPostsに代入
  // selectedTagが値を持たなければ（タグが選ばれなければ）、postsをそのままfilteredPostsに代入
  const filteredPosts = selectedTag
    ? posts.filter((postArg) => postArg.frontMatter.tags.includes(selectedTag))
    : posts; // selectedTag="music"なら、tagsに"music"含むpostsだけ取得。selectedTag=""なら全てのpostsを取得

  const tagTranslations = {
    music: "音楽",
    miscellaneous: "雑記",
    liberalarts: "リベラル・アーツ",
    illustration: "イラスト",
    courage: "勇気出る系",
  };

  // ||：論理和（OR）を表す演算子。左辺||右辺で、左辺が真なら左辺を返し、左辺が偽なら右辺を返す
  // 左辺tagTranslations[tagArg]が真なら（tagTranslations[music]など）ならtagTranslations[tagArg]を表示
  // 左辺tagTranslations[tagArg]が偽なら（例：tagTranslations[××]）ならtagArg（tagTranslationsに含めてない××）をそのまま表示
  return (
    <div className="container">
      {/* タグ一覧 */}
      <div className="tag-container">
        <button onClick={() => setSelectedTag("")} className="tag-button">
          全て表示
        </button>
        {allTags.map((tagArg) => {
          return (
            <button
              key={tagArg}
              onClick={() =>
                setSelectedTag(tagArg === selectedTag ? "" : tagArg)
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
          <div key={postsArg.slug} className="article-container">
            <div className="title" onClick={() => clickRouter(postsArg)}>
              {postsArg.frontMatter.title}
            </div>
            <div className="date">更新: {postsArg.frontMatter.date}</div>
            <div className="content">
              {removeJSXAndMD(postsArg.content).substring(0, 150)}...
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
