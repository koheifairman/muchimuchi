import Image from "next/image";

import AdministratorIcon from "../../../public/About/about-administrator-icon.webp";

const PodcastMain = () => {
  // データ
  const labelParts = ["むちむち無知の知くんの", "Podcast"];
  return (
    <div className="container">
      <a
        className="image-container"
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={AdministratorIcon}
          alt="Podcastアイコン"
          width={150}
          height={150}
        />
      </a>
      {labelParts.map((labelArg, index) => {
        return (
          <div key={index} className="label">
            {labelArg}
          </div>
        );
      })}

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 50px auto 0 auto;
          width: 900px;
        }
        .label {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: "Robot";
          font-style: normal;
          font-size: 40px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default PodcastMain;

PodcastMain.displayName = "../components/podcast/PodcastMain";
