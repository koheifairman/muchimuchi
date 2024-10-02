import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import iconAnimeStyles from "../../styles/anime/IconAnime.module.css";
import illustAnimeStyles from "../../styles/anime/IllustAnime.module.css";

const IndexMain = () => {
  // ステート
  const [clickedIconId, setClickedIconId] = useState(undefined);
  const router = useRouter();
  // データ
  const iconImages = [
    {
      id: 1,
      label: "togashiyoshihiro",
      src: "/illustration/togashi/artist-togashi.webp",
      alt: "冨樫義博",
    },
    {
      id: 2,
      label: "kubotite",
      src: "/illustration/kubo/artist-kubo.webp",
      alt: "久保帯人",
    },
    {
      id: 3,
      label: "ishiguromasakazu",
      src: "/illustration/ishiguro/artist-ishiguro.webp",
      alt: "石黒正数",
    },
  ];
  // 関数
  const iconClick = (id) => {
    setClickedIconId(id);
  };
  const clickRouter = (imageArg) => {
    router.push(`/illustration/${imageArg.label}`);
  };

  return (
    <div className="container">
      {iconImages.map((imageArg) => {
        return (
          <div
            key={imageArg.id}
            className={`${
              illustAnimeStyles[`${imageArg.label}-rectangle-container`]
            }`}
          >
            <div
              className={`${illustAnimeStyles[`${imageArg.label}-rectangle`]}`}
            >
              <div className="image-container">
                <Image
                  src={imageArg.src}
                  alt={imageArg.alt}
                  width={250}
                  height={100}
                  layout="intrinsic"
                  className={`${iconAnimeStyles.iconImage} ${
                    clickedIconId === imageArg.id
                      ? iconAnimeStyles.iconAnimate
                      : ""
                  }`}
                  onClick={() => {
                    iconClick(imageArg.id);
                    setTimeout(() => {
                      clickRouter(imageArg);
                    }, 900);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .container {
          width: 900px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;
          padding-top: 30px;
        }
        .image-container {
          z-index: 1;
          position: absolute;
          top: 110px;
          left: 130px;
        }
      `}</style>
    </div>
  );
};

export default IndexMain;

IndexMain.displayName = "../components/illustration/IndexMain";
