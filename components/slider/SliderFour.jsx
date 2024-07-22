"use client";

const sliderContent = {
  name: "John Smith",
  description: `I design and develop services for customers of all sizes,
  specializing in creating stylish, modern websites, web
  services and online stores.`,
  btnText: " Donwload CV",
  btnText2: "My Work",
};
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Content Writter", "Businessman", "Photographer"];
const SliderFour = () => {
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
        className="home-banner home-banner-two slider-four scrollSpysection"
        style={{
          backgroundImage: `url(${"/img/slider/home-professional.jpg"})`,
        }}
      >
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-12">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello there...
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
                <div className="d-flex btn-wrapper">
                  <a
                    className="px-btn px-btn-theme mr-4"
                    href="/img/resume.png"
                    download
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    {sliderContent.btnText}
                  </a>
                  <a
                    className="px-btn btn-outline"
                    href="#work"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="500"
                  >
                    {sliderContent.btnText2}
                  </a>
                </div>
              </div>
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

export default SliderFour;
