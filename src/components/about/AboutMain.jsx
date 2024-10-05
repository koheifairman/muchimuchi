import Image from "next/image";
import { useState } from "react";
import borderStyles from "@/styles/illustBorder.module.css";

const AboutMain = () => {
  // ステート
  const [mascotIsClicked, setMascotIsClicked] = useState(false);
  // 関数
  const mascotClick = () => {
    setMascotIsClicked(true);
    setTimeout(() => setMascotIsClicked(false), 1000);
  };
  // データ
  const administratorTexts = [
    "読書、音楽、お絵描きが好き。",
    "リベラル・アーツを通じて、世界観は変幻自在だと目覚める。",
    "目覚めてしまったので、YouTube、Podcast、ブログ、イラストと、やってみたいことがたくさん。",
    "これら趣味活動のアウトプット置き場が欲しくて、このサイトを作ってみました！",
  ];
  const administratorImageSrc =
    "https://storage.googleapis.com/muchimuchi_bucket/about/about-administrator-icon.webp";
  const mascotImageSrc =
    "https://storage.googleapis.com/muchimuchi_bucket/about/about-mascot-icon.webp";
  const mascotTexts = [
    "現代に甦りしソクラテスの化身。飽食時代の恩恵に与り、むちむちに太った。",
    "本サイトのかわいいマスコット。",
    "口ぐせは「　　　　　」。",
  ];
  const nevergiveupImageSrc =
    "https://storage.googleapis.com/muchimuchi_bucket/global/never-giveup.webp";

  return (
    <div className="container">
      {/* 管理人 */}
      <div className="administrator-container">
        <Image
          src={administratorImageSrc}
          alt="管理人のアイコン"
          width={350}
          height={298}
          className={borderStyles.image}
        />
        <div className="administrator-title">管理人</div>
        <div className="administrator-text">
          {administratorTexts.map((textArg, index) => {
            return <p key={index}>{textArg}</p>;
          })}
        </div>
      </div>

      {/* マスコット */}
      <div className="mascot-container">
        <div className="mascot-image" onClick={() => mascotClick()}>
          <Image
            src={mascotImageSrc}
            alt="マスコットのアイコン"
            width={202}
            height={350}
            onClick={() => mascotClick()}
          />
        </div>
        {mascotIsClicked && (
          <div className="nevergiveup-image">
            <Image
              src={nevergiveupImageSrc}
              alt="負けない..."
              width={50}
              height={20}
            />
          </div>
        )}
        <div className="mascot-title">むちむち無知の知くん</div>
        <div className="mascot-text">
          {mascotTexts.map((textArg, index) => {
            return <p key={index}>{textArg}</p>;
          })}
        </div>
        <div className="nevergiveup-text ">
          <Image
            src={nevergiveupImageSrc}
            alt="負けない..."
            width={100}
            height={26}
          />
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 900px
          margin: 0 auto;
         }
        // ---管理人---
        .administrator-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 50px auto 0 auto;
          width: 900px;
        }
        .administrator-title {
          font-family: "Zen Maru Gothic";
          font-size: 25px;
          font-weight: 400;
          margin: 20px auto;
        }
        .administrator-text {
          width: 800px;
          border: 3px solid #a9a9a9;
          border-radius: 12px;
          padding: 20px;
          font-family: "Zen Maru Gothic";
          font-size: 20px;
          font-weight: 400;
        }

        // ---マスコット---
        .mascot-container {
          width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 50px auto 100px auto;
          position: relative;
        }
        .mascot-image:hover {
        cursor: pointer;
        }
        .nevergiveup-image {
          position: absolute;
          top: 100px;
          left: 230px;
        }
        .mascot-title {
          font-family: "Zen Maru Gothic";
          font-size: 25px;
          font-weight: 400;
          margin: 20px auto;
        }
        .mascot-text {
          width: 800px;
          border: 3px solid #a9a9a9;
          border-radius: 12px;
          padding: 20px;
          font-family: "Zen Maru Gothic";
          font-size: 20px;
          font-weight: 400;
          z-index: 1;
        }
        .nevergiveup-text {
          position: absolute;
          bottom: 38px;
          left: 100px;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default AboutMain;

AboutMain.displayName = "../components/about/AboutMain";
