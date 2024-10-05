import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import iconAnimeStyles from "../../styles/anime/IconAnime.module.css";

// import youtubeIcon from "../../../public/about/about-mascot-icon.webp";

const IndexMain = () => {
  // データ
  const image = {
    id: 1,
    src: "https://storage.googleapis.com/muchimuchi_bucket/music/music-blog-icon.webp",
    path: "/blog/private",
    alt: "Blog",
  };
  const labelParts = ["初心者を見守る", "チャンネル"];
  const hoverImageSrc =
    "https://storage.googleapis.com/muchimuchi_bucket/hover/hover-noel.webp";
  // ステート
  const [clickedId, setClickedId] = useState(undefined);
  const router = useRouter();
  // 関数
  const iconClick = (id) => {
    setClickedId(id);
  };
  const clickRouter = () => {
    router.push(`${image.path}`);
  };

  return (
    <div className="container">
      {/* YouTube */}
      {/* <div className="youtube-container">
        <div className="youtube-title">YouTube</div>
        <a
          className="youtube-image-container"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={youtubeIcon}
            alt="YouTubeアイコン"
            width={150}
            height={150}
            layout="intrinsic"
          />
        </a>
        {labelParts.map((labelArg, index) => {
          return (
            <div key={index} className="youtube-label">
              {labelArg}
            </div>
          );
        })}
      </div> */}
      {/* Blogアイコン */}
      <div className="icon-container">
        {/* アイコン画像 */}
        <Image
          src={image.src}
          alt={image.alt}
          width={500}
          height={120}
          className={`${iconAnimeStyles.iconImage} ${
            clickedId === image.id ? iconAnimeStyles.iconAnimate : ""
          }`}
          onClick={() => {
            iconClick(image.id);
            setTimeout(() => {
              clickRouter();
            }, 900);
          }}
        />
        {/* ホバー画像 */}
        <div className="hover-image">
          <Image src={hoverImageSrc} alt="ノエル" width={95} height={100} />
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 auto 0 auto;
          padding-top: 30px;
        }
        // ---YouTube---
        .youtube-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .youtube-title {
          font-family: "Zen Maru Gothic";
          font-size: 32px;
          font-weight: 400;
          margin: 0;
          text-align: center;
        }
        .youtube-image-container {
          width: 150px;
          margin: 0 auto;
        }
        .youtube-image-container:hover {
          cursor: pointer;
        }
        .youtube-label {
          font-family: "Robot";
          font-size: 24px;
          font-weight: 700;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        // ---アイコン---
        .icon-container {
          border-radius: 12px;
          width: 500px;
          height: 120px;
          margin: 20px 0 20px 0;
          position: relative;
        }
        .hover-image {
          position: absolute;
          bottom: 0px;
          right: 0px;
          opacity: 0;
          transform: translate(0, 0) scale(1);
          transition: transform 1s ease, opacity 1s ease;
        }
        .icon-container:hover .hover-image {
          transform: translate(30px, -30px) scale(1.5);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default IndexMain;

IndexMain.displayName = "../components/music/IndexMain";
