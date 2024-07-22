"use client";

import { useEffect, useState } from "react";
// import TextLoop from "react-text-loop";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Full-stack Developer", "UI/UX Designer", "App Developer"];
const conctInfo = {
  phone: "+04 6545-9535-6515",
  email: " nairobi-designer@domain.com",
};

const sliderContent = {
  name: "Nairobi Gadot",
  description: `I design and develop services for customers of all sizes,
  specializing in creating stylish, modern websites, web
  services and online stores.`,
  btnText: " Donwload CV",
};

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner scrollSpysection">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+04 6545-9535-6515">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:ibthemes21@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Hello, My name is</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <div className="loop-text lead">
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </div>
                z{/* </TextLoop>{" "} */}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="/img/resume.png"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${"/img/slider/home-banner.png"})`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
