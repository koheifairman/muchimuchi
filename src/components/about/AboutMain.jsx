import Image from "next/image";
import { useState } from "react";
import borderStyles from "@/styles/illustBorder.module.css";

import administratorIcon from "../../../public/about/about-administrator-icon.webp";
import mascotIcon from "../../../public/about/about-mascot-icon.webp";
import neverGiveup from "../../../public/global/never-giveup.webp";

const AboutMain = () => {
  // STATE
  const [mascotIsClicked, setMascotIsClicked] = useState(false);

  // DATA
  const mascotClick = () => {
    setMascotIsClicked(true);
    setTimeout(() => setMascotIsClicked(false), 1000);
  };
  const administratorTexts = [
    "読書、音楽、お絵描きが好き。",
    "リベラル・アーツを通じて、世界観は変幻自在だと目覚める。",
    "目覚めてしまったので、YouTube、Podcast、ブログ、イラストと、やってみたいことがたくさん。",
    "これら趣味活動のアウトプット置き場が欲しくて、このサイトを作ってみました！",
  ];
  const mascotTexts = [
    {
      id: 1,
      text: "現代に甦りしソクラテスの化身。飽食時代の恩恵に与り、むちむちに太った。",
    },
    {
      id: 2,
      text: "本サイトのかわいいマスコット。",
    },
    {
      id: 3,
      text: "口ぐせは「",
    },
    {
      id: 4,
      text: "負けない…",
    },
    {
      id: 5,
      text: "」。",
    },
  ];

  return (
    <div className="container">
      {/* 管理人 */}
      <div className="administrator-container">
        <Image
          src={administratorIcon}
          alt="管理人のアイコン"
          width={350}
          height={350}
          layout="intrinsic"
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
            src={mascotIcon}
            alt="マスコットのアイコン"
            width={350}
            height={350}
            layout="intrinsic"
            onClick={() => mascotClick()}
          />
        </div>
        {mascotIsClicked && (
          <div className="nevergiveup-image">
            <Image
              src={neverGiveup}
              alt="負けない..."
              width={50}
              height={50}
              layout="intrinsic"
            />
          </div>
        )}

        <div className="mascot-title">むちむち無知の知くん</div>
        <div className="mascot-text">
          {mascotTexts.map((textArg) => {
            if (textArg.id === 1 || textArg.id === 2) {
              return <p key={textArg.id}>{textArg.text}</p>;
            }
            if (textArg.id === 4) {
              return (
                <span key={textArg.id} className="nevergiveup-text">
                  {textArg.text}
                </span>
              );
            }
            return <span key={textArg.id}>{textArg.text}</span>;
          })}
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
          padding: 20px;
        }
        .administrator-text p {
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
          padding: 20px;
          font-family: "Zen Maru Gothic";
          font-size: 20px;
          font-weight: 400;
        }
        .nevergiveup-text {
          font-family: "jtak00b";
          font-size: 20px;
          font-weight: 100;
        }
      `}</style>
    </div>
  );
};

export default AboutMain;

AboutMain.displayName = "../components/about/AboutMain";
