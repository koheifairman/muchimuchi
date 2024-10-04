import Image from "next/image";

const ContactMain = () => {
  const xImageSrc =
    "https://storage.googleapis.com/muchimuchi_bucket/contact/contact-x-icon.webp";
  return (
    <div className="container">
      <div className="rectangle">
        <div className="x-image">
          <Image
            src={xImageSrc}
            alt="Xアイコン"
            width={50}
            height={50}
            layout="intrinsic"
          />
        </div>
        <div className="text">
          Mail：osigoto0817@gmail.com
          <br />　 ：
          <a
            href="https://x.com/waraigero"
            target="_blank"
            rel="noopener noreferrer"
          >
            @waraigero
          </a>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 50px auto 0 auto;
          width: 500px;
        }
        .rectangle {
          position: relative;
          width: 500px;
          border: 3px solid #a9a9a9;
          z-index: 1;
        }
        .x-image {
          position: absolute;
          top: 70px;
          left: 20px;
          z-index: 1;
        }
        .text {
          padding: 20px;
          font-family: "Abel";
          font-style: normal;
          font-size: 36px;
          font-weight: 100;
          z-index: 2;
        }
        a {
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default ContactMain;

ContactMain.displayName = "../components/contact/ContactMain";
