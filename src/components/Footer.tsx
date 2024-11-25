import React from "react";
import { useGoToTop } from "../hooks/useGoToTop";
import Style from "./Footer.module.css";

export default function Footer() {
  const { showGoTop, scrollToTop } = useGoToTop();
  return (
    <footer className={Style.footer}>
      <div className={Style.row}>
        <div className={Style.contactinfo}>
          <div className={`${Style.colfour} ${Style.tabfull}`}>
            <div className={Style.icon}>
              <i className={Style.iconpin}></i>
            </div>

            <h5>Where to find me</h5>

            <p>
              Shahrah-e-Faisal, karachi
              <br />
              75050 Pakistan
            </p>
          </div>

          <div
            className={`${Style.colfour} ${Style.tabfull} ${Style.collapse}`}
          >
            <div className={Style.icon}>
              <i className={Style.iconmail}></i>
            </div>

            <h5>Email Me At</h5>

            <a
              href="mailto:malikabdullahq976@gmail.com"
              className={Style.email}
            >
              malikabdullahq976@gmail.com
            </a>
          </div>

          <div className={`${Style.colfour} ${Style.tabfull}`}>
            <div className={Style.icon}>
              <i className={Style.iconphone}></i>
            </div>

            <h5>Call Me At</h5>

            <p>Phone: +92 348 3937959</p>
          </div>
        </div>

        <div
          className={`${Style.colsix} ${Style.tabfull} ${Style.pullright} ${Style.social}`}
        >
          <ul className={Style.footersocial}>
            <li>
              <a href="https://github.com/AbdullahNisar123" target="_blank">
                <i className={`fab fa-linkedin ${Style.socialicon}`}></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/its_me_abdullah976/"
                target="_blank"
              >
                <i className={`fab fa-instagram ${Style.socialicon}`}></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/AbdullahNisar123" target="_blank">
                <i className={`fab fa-github ${Style.socialicon}`}></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/AbdullahNisar123" target="_blank">
                <i className={`fab fa-youtube ${Style.socialicon}`}></i>
              </a>
            </li>
          </ul>
        </div>

        <div className={`${Style.colsix} ${Style.tabfull} `}>
          <div className={Style.copyright}>
            <span>© Copyright 2021 </span>
            <span>
              Design by &nbsp;
              <a href="https://github.com/AbdullahNisar123">
                Abdullah
              </a>
            </span>
          </div>
        </div>
        {/* Go to Top Button */}
        {showGoTop && (
          <div
            id="go-top"
            className={`${Style.gotop} ${Style.show}`}
            onClick={scrollToTop}
          >
            <a className={Style.smoothscroll} title="Back to Top" href="#top">
              <i className="fa fa-long-arrow-up"></i>
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
