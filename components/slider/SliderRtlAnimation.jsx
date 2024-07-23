"use client";

import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Full-stack Developer", "UI/UX Designer", "App Developer"];

const conctInfo = {
  phone: "+04 6545-9535-6515",
  email: " nairobi-designer@domain.com",
};

const sliderContent = {
  name: "Nairobi Gadot",
  designation: "Full-stack Developer",
  description: `I design and develop services for customers of all sizes,
  specializing in creating stylish, modern websites, web
  services and online stores.`,
  btnText: " Donwload CV",
};

/**
 * @description Uses the `useState`, `useEffect`, and `AOS` hooks to create a React
 * component that renders a slider with a name, description, and button to download
 * a resume. The component updates every 3 seconds and clears the interval on unmount.
 * 
 * @returns {string} a React component that renders a slider with an RTL layout.
 */
const SliderRtlAnimation = () => {
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
            <a href="mailto:mail%20to:contact@tuhinmallick.com">
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
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="loop-text lead">
                    <TextTransition springConfig={presets.wobbly}>
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  </div>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
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
            backgroundImage: `url(${"/img/slider/home-banner-rtl.png"})`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderRtlAnimation;
