"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { useEffect, useState } from "react";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];
const tabListContent = [
  {
    categories: ["Branding", "Fashion"],
    img: "/img/portfolio/qr-gpt.png",
    width: 400,
    height: 550,
    title: "QrGPT",
    subTitle: "Generate your next AI QR Code in seconds",
    alterText: "Qr-GPT",
    portfolioLink:
      "https://qr-gpt.tuhinmallick.com/",
  },
  {
    categories: ["Branding", "Photography"],
    img: "/img/portfolio/m-portfolio-2.jpg",
    width: 400,
    height: 400,
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    categories: ["Photography", "Product"],
    img: "/img/portfolio/m-portfolio-3.jpg",
    width: 400,
    height: 700,
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },
  {
    categories: ["Branding", "Fashion"],
    img: "/img/portfolio/m-portfolio-4.jpg",
    width: 400,
    height: 400,
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "E-Cosmetics",
    portfolioLink:
      "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
  },
  {
    categories: ["Branding", "Product"],
    img: "/img/portfolio/m-portfolio-5.jpg",
    width: 400,
    height: 700,
    title: "Chatting Application",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    categories: ["Branding", "Fashion"],
    img: "/img/portfolio/m-portfolio-6.jpg",
    width: 400,
    height: 500,
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
  {
    categories: ["Branding", "Product"],
    img: "/img/portfolio/m-portfolio-7.jpg",
    width: 400,
    height: 700,
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "Business Card",
    portfolioLink:
      "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
  },
  {
    categories: ["Branding", "Fashion"],
    img: "/img/portfolio/m-portfolio-8.jpg",
    width: 400,
    height: 550,
    title: "Chatting App Design",
    subTitle: "Codecanyon Market",
    alterText: "Chatting App Design",
    portfolioLink:
      "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
  },
  {
    categories: ["Branding", "Product"],
    img: "/img/portfolio/m-portfolio-9.jpg",
    width: 400,
    height: 400,
    title: "Web Motion",
    subTitle: "Behance Shot",
    alterText: "Web Motion",
    portfolioLink: "https://www.facebook.com/ibthemes",
  },
];

const PortfolioAnimation = () => {
  const [currentTab, setCurrentTab] = useState(tabList[0]);
  const [filteredItems, setFilteredItems] = useState(tabListContent);
  useEffect(() => {
    if (currentTab == "All") {
      setFilteredItems(tabListContent);
    } else {
      const filtered = [
        ...tabListContent.filter((elm) => elm.categories.includes(currentTab)),
      ];
      setFilteredItems(filtered);
    }
  }, [currentTab]);
  return (
    <div className="portfolio-filter-01">
      <div className="filter d-flex flex-wrap justify-content-start gap-3">
        {tabList.map((val, i) => (
          <div
            key={i}
            onClick={() => setCurrentTab(val)}
            className={` portfolio-tab ${
              currentTab == val ? "active" : ""
            } fs-6" key={i}`}
          >
            {val}
          </div>
        ))}
      </div>
      {/* End tablist */}
      <Gallery>
        <div className="portfolio-content ">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredItems.map((val, i) => (
              <div
                className="portfolio-box-01"
                key={i}
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="portfolio-img">
                  <div className="portfolio-info">
                    <h5>
                      <a
                        href={val.portfolioLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {val.title}
                      </a>
                    </h5>
                    <span>{val.subTitle}</span>
                  </div>
                  {/* End .portfolio-info */}
                  <Item
                    original={val.img}
                    thumbnail={val.img}
                    width={val.width}
                    height={val.height}
                  >
                    {({ ref, open }) => (
                      <div className="gallery-link">
                        <Image
                          width={400}
                          height={700}
                          style={{ height: "fit-content" }}
                          src={val.img}
                          alt="Childhood"
                          role="button"
                          ref={ref}
                          onClick={open}
                        />
                      </div>
                    )}
                  </Item>

                  <a
                    className="portfolio-icon"
                    href={val.portfolioLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLink />
                  </a>
                  {/* End .portfolio-icon */}
                </div>
              </div>
            ))}
          </Masonry>
        </div>
        {/* End list wrapper */}
      </Gallery>
      {/* End tabpanel */}
    </div>
  );
};

export default PortfolioAnimation;
