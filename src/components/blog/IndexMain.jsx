import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import iconAnimeStyles from "../../styles/anime/IconAnime.module.css";

const IndexMain = () => {
  // ステート
  const [clickedIconId, setClickedIconId] = useState(undefined);
  const router = useRouter();
  // データ
  const iconImages = [
    {
      id: 1,
      label: "liberalarts",
      src: "https://storage.googleapis.com/muchimuchi_bucket/blog/blog-liberalarts-icon.webp",
      hover:
        "https://storage.googleapis.com/muchimuchi_bucket/about/about-mascot-icon.webp",
      hoverWidth: 58,
      alt: "リベラル・アーツ",
    },
    {
      id: 2,
      label: "private",
      src: "https://storage.googleapis.com/muchimuchi_bucket/blog/blog-private-icon.webp",
      hover:
        "https://storage.googleapis.com/muchimuchi_bucket/hover/hover-noel.webp",
      hoverWidth: 95,
      alt: "私的なこと",
    },
  ];
  //関数
  const clickRouter = (imagesArg) => {
    if (imagesArg.id === 1) {
      router.push(`/liberalarts`);
    } else if (imagesArg.id === 2) {
      router.push(`/blog/private`);
    }
  };

  return (
    <div className="container">
      {iconImages.map((imagesArg) => {
        return (
          <div key={imagesArg.id} className="icon-container">
            {/* アイコン画像 */}
            <Image
              src={imagesArg.src}
              alt={imagesArg.alt}
              width={500}
              height={120}
              priority
              className={`${iconAnimeStyles.iconImage} ${
                clickedIconId === imagesArg.id
                  ? iconAnimeStyles.iconAnimate
                  : ""
              }`}
              onClick={() => {
                setClickedIconId(imagesArg.id);
                setTimeout(() => {
                  clickRouter(imagesArg);
                }, 900);
              }}
            />
            {/* ホバー画像 */}
            <div className={`hover-image-${imagesArg.id}`}>
              <Image
                src={imagesArg.hover}
                alt="ホバー画像"
                width={imagesArg.hoverWidth}
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

IndexMain.displayName = "../components/blog/IndexMain";
