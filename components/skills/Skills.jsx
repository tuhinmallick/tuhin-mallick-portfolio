"use client";

import { useState } from "react";
import CountUp from "react-countup";

import { InView } from "react-intersection-observer";
const skillContent = [
  {
    name: "HTML5",
    numberPercent: "92",
    startCount: "0",
    endCount: "92",
  },
  {
    name: "React JS",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
  {
    name: "Vue Js",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "Ui/Ux",
    numberPercent: "88",
    startCount: "0",
    endCount: "88",
  },
];

const Skills = () => {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <InView
        as="div"
        onChange={(inView, entry) => {
          if (inView) {
            setFocus(true);
          }
        }}
      >
        <div className="skill-wrapper">
          {skillContent.map((skill, i) => (
            <div className="skill-lt" key={i}>
              <h6>{skill.name}</h6>
              <span className="count-inner">
                <CountUp
                  start={focus ? skill.startCount : null}
                  end={skill.endCount}
                  duration={1}
                  redraw={true}
                ></CountUp>
                %
              </span>
              <div className="skill-bar">
                <div
                  className="skill-bar-in"
                  style={{ width: skill.numberPercent + "%" }}
                ></div>
              </div>
            </div>
            // End skill-lt
          ))}
        </div>{" "}
      </InView>
    </>
  );
};

export default Skills;
