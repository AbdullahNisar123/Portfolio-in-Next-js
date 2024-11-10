"use client"
import React from "react";
import Resume from "@/components/Resume";
import Style from "@/Style/page.module.css";
import Portfolio from "@/components/Portfolio";
import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <IntroSection />
        {/* <div id="qualification" className={Style.container}>
          <h2>Qualification</h2>
          <table className={Style.table}>
            <tr>
              <th>Degree</th>
              <th>Institute</th>
              <th>Year</th>
            </tr>
            <tr>
              <td>Bachelor of Science in Computer Science</td>
              <td>XYZ University</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>High School Diploma</td>
              <td>ABC College</td>
              <td>2016</td>
            </tr>
          </table>
        </div>

        <div id="skills" className={Style.container}>
          <h2>Skills</h2>
          <ul className={Style.skillcontainer}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Graphic Design</li>
          </ul>
        </div> */}
          <Resume />
          <Portfolio />
        <Footer/>
    </>
  );
}
