"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// import TextLoop from "react-text-loop";

const sliderContent = {
  name: "Mark Saverin",
  description: `I design and develop services for customers of all sizes,
  specializing in creating stylish, modern websites, web
  services and online stores.`,
  btnText: "HIRE ME",
  btnText2: "My Work",
};
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Content Writter", "Businessman", "Photographer"];
const SliderFive = () => {
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
      <section
        id="home"
        className="home-banner home-banner-two slider-four bg-normal scrollSpysection"
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="type-box">
                <h6>Hello there...</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <div className="loop-text lead">
                  <TextTransition springConfig={presets.wobbly}>
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>
                </div>
                <p className="desc">{sliderContent.description}</p>
                <div className="d-flex btn-wrapper">
                  <a className="px-btn px-btn-theme mr-4" href="#work">
                    {sliderContent.btnText2}
                  </a>
                  <a className="px-btn btn-outline " href="#contactus">
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
            {/* End .col */}
            <div className="col-md-6 order-1 order-md-2">
              <Image
                width={540}
                height={560}
                style={{ height: "fit-content" }}
                src="/img/slider/home-professional-2.png"
                alt="about image"
              />
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderFive;
