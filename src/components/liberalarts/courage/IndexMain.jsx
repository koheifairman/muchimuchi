import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import iconAnimeStyles from "../../../styles/anime/IconAnime.module.css";

const IndexMain = () => {
  // データ
  const iconImages = [
    {
      id: 1,
      path: "searchformeaning",
      src: "https://storage.googleapis.com/muchimuchi_bucket/liberalarts/courage/courage-searchformeaning-icon.webp",
      hover:
        "https://storage.googleapis.com/muchimuchi_bucket/hover/hover-frankl.webp",
      hoverWidth: 132,
      alt: "夜と霧",
    },
    {
      id: 2,
      path: "conquestofhappiness",
      src: "https://storage.googleapis.com/muchimuchi_bucket/liberalarts/courage/courage-conquestofhappiness-icon.webp",
      hover:
        "https://storage.googleapis.com/muchimuchi_bucket/hover/hover-russell.webp",
      hoverWidth: 142,
      alt: "幸福論",
    },
    {
      id: 3,
      path: "privateryan",
      src: "https://storage.googleapis.com/muchimuchi_bucket/liberalarts/courage/courage-privateryan-icon.webp",
      hover:
        "https://storage.googleapis.com/muchimuchi_bucket/hover/hover-tomhanks.webp",
      hoverWidth: 142,
      alt: "プライベート・ライアン",
    },
  ];
  // ステート
  const [clickedIconId, setClickedIconId] = useState(undefined);
  const router = useRouter();
  // 関数
  const clickRouter = (imageArg) => {
    router.push(`/liberalarts/courage/${imageArg.path}`);
  };

  return (
    <div className="container">
      {iconImages.map((imageArg) => {
        return (
          <div key={imageArg.id} className="icon-container">
            {/* アイコン画像 */}
            <Image
              src={imageArg.src}
              alt={imageArg.alt}
              width={500}
              height={120}
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
                width={imageArg.hoverWidth}
                height={100}
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
          margin: 0 auto 0 auto;
          padding-top: 30px;
        }
        .icon-container {
          border-radius: 12px;
          width: 500px;
          height: 120px;
          margin: 20px 0 20px 0;
          position: relative;
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

IndexMain.displayName = "../components/liberalarts/courage/IndexMain";
