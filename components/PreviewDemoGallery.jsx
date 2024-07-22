"use client";

import Slider from "react-slick";

import Link from "next/link";
import Image from "next/image";

export default function SimpleSlider() {
  const PreviewGallery = [
    {
      imageName: "dark-theme",
      title: "Dark Theme Animation",
      routePath: "home-dark-animation",
    },
    {
      imageName: "light-theme",
      title: "Light Theme Animation",
      routePath: "home-light-animation",
    },
    {
      imageName: "light-professional",
      title: "Light Professional",
      routePath: "home-light-professional",
    },
    {
      imageName: "light-creative",
      title: "Light Creative",
      routePath: "home-light-professional-2",
    },
    {
      imageName: "sidebar-dark",
      title: "Dark Particles Effect",
      routePath: "dark-particle-effect",
    },
    {
      imageName: "rtl",
      title: "RTL Version",
      routePath: "home-light-rtl-animation",
    },
  ];

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {PreviewGallery.map((val, i) => (
          <div className="portfolio-filter-01 m-15px-tb" key={i}>
            <div>
              <div className="single-demo">
                <div className="title text-center">
                  <h3 className="dark-color">{val.title}</h3>
                </div>
                {/* End .title */}
                <div data-aos="fade-up" data-aos-duration="1200">
                  <Link href={val.routePath} target="_blank">
                    <div className="product-img">
                      <Image
                        width={650}
                        height={375}
                        style={{ height: "fit-content" }}
                        src={`/img/preview/${val.imageName}.png`}
                        alt="intro page"
                      />
                    </div>
                  </Link>
                </div>
                {/* End produt-img */}
              </div>
            </div>

            {/* End .single-demo */}
          </div>
        ))}
      </Slider>
    </>
  );
}
