import React from "react";
import Style from "./Resume.module.css";
const Resume = () => {
  return (
    <section id="resume" className={`${Style.greysection} ${Style.resume}`}>
    <div className={`${Style.row} ${Style.sectionintro}`}>
      <div className={Style.coltwelve}>
        <h5>Resume</h5>
        <h2>More of my Credentials</h2>
      </div>
    </div>

    <div className={`${Style.row} ${Style.resumetimeline}`}>
      <div className={`${Style.coltwelve} ${Style.resumeheader}`}>
        <h2>Education</h2>
      </div>

      <div className={Style.coltwelve}>
        <div className={Style.timelinewrap}>
          <div className={Style.timelineblock}>
            <div className={Style.timelineico}>
              <i className="fa fa-briefcase"></i>
            </div>

            <div className={Style.timelineheader}>
              <h3>Secondary Schooling</h3>
              <p>2023 - Present(2024)</p>
            </div>

            <div className={Style.timelinecontent}>
              <h4>
                <a>Govt degree college surjani town</a>
              </h4>
              <p>
                Completed My Secondary Schooling At Govt degree college
                surjani town through karachi Board - karachi.
              </p>
            </div>
          </div>
          <div className={Style.timelineblock}>
            <div className={Style.timelineico}>
              <i className="fa fa-briefcase"></i>
            </div>

            <div className={Style.timelineheader}>
              <h3>Primary Schooling</h3>
              <p>July 2018 - 2022</p>
            </div>

            <div className={Style.timelinecontent}>
              <h4>
                <a>Gulistan Shah Abdul Latif School</a>
              </h4>
              <p>
                Completed My Primary Schooling At Gulistan Shah Abdul Latif
                School through karachi Board - karachi.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  );
};
export default Resume;
