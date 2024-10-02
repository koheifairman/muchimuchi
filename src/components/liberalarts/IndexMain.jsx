import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import iconAnimeStyles from "../../styles/anime/IconAnime.module.css";

import youtubeIcon from "../../../public/about/about-mascot-icon.webp";

const IndexMain = () => {
  // データ
  const iconImages = [
    {
      id: 1,
      path: "courage",
      src: "/liberalarts/liberalarts-courage-icon.webp",
      hover: "/hover/hover-frankl.webp",
      alt: "勇気出る系のアイコン",
    },
    {
      id: 2,
      path: "difficult",
      src: "/liberalarts/liberalarts-difficult-icon.webp",
      hover: "/hover/hover-levistrauss.webp",
      alt: "小難しい系のアイコン",
    },
    {
      id: 3,
      path: "interesting",
      src: "/liberalarts/liberalarts-interesting-icon.webp",
      hover: "/hover/hover-murakamiharuki.webp",
      alt: "面白い系のアイコン",
    },
  ];
  const labelParts = ["むちむち無知の知くん", "【リベラル・アーツ】"];
  // ステート
  const [clickedIconId, setClickedIconId] = useState(undefined);
  const router = useRouter();
  // 関数
  const clickRouter = (imageArg) => {
    router.push(`/liberalarts/${imageArg.path}`);
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
        <div className="youtube-label">
          {labelParts.map((labelArg, index) => (
            <div key={index}>{labelArg}</div>
          ))}
        </div>
      </div> */}
      {/* アイコン一覧 */}
      {iconImages.map((imageArg) => {
        return (
          <div key={imageArg.id} className="icon-container">
            {/* アイコン画像 */}
            <Image
              src={imageArg.src}
              alt={imageArg.alt}
              width={500}
              height={120}
              layout="intrinsic"
              className={`${iconAnimeStyles.iconImage} ${
                clickedIconId === imageArg.id ? iconAnimeStyles.iconAnimate : ""
              }`}
              onClick={() => {
                setClickedIconId(imageArg.id);
                setTimeout(() => {
                  clickRouter(imageArg);
                }, 900);
              }}
            />
            {/* ホバー画像 */}
            <div className={`hover-image-${imageArg.id}`}>
              <Image
                src={imageArg.hover}
                alt="ホバー画像"
                width={100}
                height={100}
                layout="intrinsic"
              />
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .container {
          width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 auto;
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
        }
        // ---アイコン一覧---
        .icon-container {
          position: relative;
          border-radius: 12px;
          width: 500px;
          height: 120px;
          margin: 20px 0 20px 0;
        }
        // ---hover-image-1---
        .hover-image-1 {
          position: absolute;
          bottom: 0px; /* 最初は隠す */
          right: 0px;
          opacity: 0;
          transform: translate(0, 0) scale(1); /* 初期位置 */
          transition: transform 1s ease, opacity 1s ease;
        }
        .icon-container:hover .hover-image-1 {
          transform: translate(30px, -30px) scale(1.5);
          opacity: 1;
        }
        // ---hover-image-2---
        .hover-image-2 {
          position: absolute;
          bottom: 0px;
          left: 0px;
          opacity: 0;
          transform: translate(0, 0) scale(1);
          transition: transform 1s ease, opacity 1s ease;
        }
        .icon-container:hover .hover-image-2 {
          transform: translate(-30px, -30px) scale(1.5);
          opacity: 1;
        }
        // ---hover-image-3---
        .hover-image-3 {
          position: absolute;
          bottom: 0px;
          right: 0px;
          opacity: 0;
          transform: translate(0, 0) scale(1);
          transition: transform 1s ease, opacity 1s ease;
        }
        .icon-container:hover .hover-image-3 {
          transform: translate(30px, -30px) scale(1.5);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default IndexMain;

IndexMain.displayName = "../components/liberalarts/IndexMain";
