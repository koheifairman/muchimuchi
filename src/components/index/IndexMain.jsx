// <Image />の仕様を利用
// クリックでアニメ：useState、IndexAnimeStyle
// ホバーでアニメ：IndexAnimeStyle
import Image from "next/image";
import { useState } from "react";
import iconAnimeStyles from "../../styles/anime/IconAnime.module.css";
import { useRouter } from "next/router";

import mascotIcon from "../../../public/index/index-mascot-icon.webp";
import welcomeBubble from "../../../public/Global/welcome-bubble.webp";
import neverGiveup from "../../../public/Global/never-giveup.webp";

const IndexMain = () => {
  // データ
  const iconImages = [
    {
      id: 1,
      label: "liberalarts",
      src: "/index/index-liberalarts-icon.webp",
      alt: "リベラル・アーツのアイコン",
    },
    {
      id: 2,
      label: "music",
      src: "/index/index-music-icon.webp",
      alt: "音楽のアイコン",
    },
    {
      id: 3,
      label: "illustration",
      src: "/index/index-illustration-icon.webp",
      alt: "イラストのアイコン",
    },
  ];
  // ステート
  const [clickedIconId, setClickedIconId] = useState();
  const [mascotIsClicked, setMascotIsClicked] = useState(false);
  const router = useRouter();
  // 関数
  const iconClick = (id) => {
    setClickedIconId(id);
  };
  const mascotClick = () => {
    setMascotIsClicked(true);
    setTimeout(() => setMascotIsClicked(false), 1000);
  };
  const clickRouter = (imageArg) => {
    router.push(`/${imageArg.label}`);
  };

  // オブジェクトに渡すsrcは、このファイルからではなく/publicからの相対パス

  return (
    <div className="container">
      {/* ---アイコン画像--- */}
      <div className="icon-container">
        {iconImages.map((imageArg) => (
          <div key={imageArg.id} className="icon-inner-container">
            <Image
              src={imageArg.src}
              alt={imageArg.alt}
              width={260}
              height={307}
              className={`${iconAnimeStyles.iconImage} ${
                clickedIconId === imageArg.id ? iconAnimeStyles.iconAnimate : ""
              }`} // ホバーしたらアニメ。クリックしたら、clickedIconId=「IconImagesのid」にしてアニメ。三項演算子（条件式 ? true : false）
              onClick={() => {
                iconClick(imageArg.id); // クリック時に「IconImagesのid」をsetClickedIconIdに渡し、clickedIconId=「IconImagesのid」となる
                setTimeout(() => {
                  clickRouter(imageArg);
                }, 900); // クリック時に、300ms（0.3秒）遅延して、router.push(`/${IconImagesArgument.label}`)実行
              }}
            />
          </div>
        ))}
      </div>

      {/* ---マスコット画像--- */}
      <div className="mascot-container" onClick={() => mascotClick()}>
        <Image
          src={mascotIcon}
          alt="マスコット画像"
          width={600}
          height={271}
          layout="instrinct"
          onClick={() => mascotClick()}
        />
        <div className="hover-image">
          <Image
            src={welcomeBubble}
            alt="ホバー画像（ようこそ！）"
            width={150}
            height={80}
            layout="instrinct"
            onClick={() => mascotClick()}
          />
        </div>
        {/* {関数 && 〜}：関数がtrueの時、〜をレンダー */}
        {mascotIsClicked && (
          <div className="never-giveup">
            <Image src={neverGiveup} alt="負けない..." width={50} height={20} />
          </div>
        )}
      </div>

      {/* justify-content: space-between; // 両端を埋めつつ均等に配置*/}
      {/* mascot-container（親）をrelative、welcome-bubbleとnever-giveup（子）をabsolute */}
      <style jsx>{`
        .icon-container {
          width: 900px;
          display: flex;
          justify-content: space-between;
          margin: 0 auto 0 auto;
          padding-top: 30px;
        }
        .icon-inner-container {
          border-radius: 12px;
          width: 260px;
          height: 307px;
        }
        .mascot-container {
          display: flex;
          justify-content: center;
          padding: 0;
          position: relative;
        }
        .mascot-container:hover {
          cursor: pointer;
        }
        .hover-image {
          position: absolute;
          top: 70px;
          right: 370px;
          opacity: 0;
          transform: translate(0, 0) scale(1);
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .mascot-container:hover .hover-image {
          transform: translate(30px, -30px) scale(1.5);
          opacity: 1;
        }
        .never-giveup {
          position: absolute;
          bottom: 150px;
          left: 380px;
        }
      `}</style>
    </div>
  );
};
export default IndexMain;

IndexMain.displayName = "../components/index/IndexMain";
