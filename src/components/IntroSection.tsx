import styles from "./IntroSection.module.css";

const IntroSection = () => {
  return (
    <section id="intro" className={styles.intro}>
      <div className={styles.introOverlay}></div>

      <div className={styles.introContent}>
        <div className={styles.row}>
          <div className={styles.colTwelve}>
            <h5>Hello{","} World{"."}</h5>
            <h1>
              I<span style={{ color: "#cc005f" }}>{"'"}</span>m Abdullah
              <span style={{ color: "#cc005f" }}>{"."}</span>
            </h1>

            <h1 className={styles.typingText}></h1>
            {/* <script src="./typing-text/dist/script.js"></script> */}

            <a
              className={`${styles.button} ${styles.smoothscroll} ${styles.stroke}`}
              href="#about"
              title=""
            >
              More About Me
            </a>
          </div>
        </div>
      </div>

      <ul className={styles.introSocial}>
        <li>
          <a
            href="./coming-soon/Iinkedin/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-linkedin ${styles.socialicon}`}></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/its_me_abdullah976/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-instagram ${styles.socialicon}`}></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AbdullahNisar123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-github ${styles.socialicon}`}></i>
          </a>
        </li>
        <li>
          <a
            href="./coming-soon/Youtube/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-youtube ${styles.socialicon}`}></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default IntroSection;
