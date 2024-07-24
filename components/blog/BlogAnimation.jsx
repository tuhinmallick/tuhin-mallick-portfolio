"use client";
import { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/Contact";
import Image from "next/image";
import { blogPosts } from "@/data/blogs";

/**
 * @description Renders a list of blog posts with images and details, and provides
 * an option to open a modal window displaying a selected post's content when its
 * corresponding image is clicked.
 * 
 * @returns {JSX.Element} A React component that represents a news page containing a
 * grid of blog posts with modal details for each post.
 */
const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModalItem, setCurrentModalItem] = useState(blogPosts[0]);

  /**
   * @description Toggles the value of the `isOpen` variable between true and false,
   * effectively opening or closing a modal window depending on its current state.
   */
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row" data-aos="fade-right" data-aos-duration="1200">
        {blogPosts.map((elm, i) => (
          <div key={i} className="col-md-6 m-15px-tb">
            <div
              className="blog-grid"
              onClick={() => {
                setCurrentModalItem(elm);
                toggleModalOne();
              }}
            >
              <div className="blog-img">
                <Image
                  width={992}
                  height={661}
                  style={{ height: "fit-content" }}
                  src={elm.imageSrc}
                  alt="blog post"
                />
              </div>
              <div className="blog-info">
                <div className="meta">
                  {elm.date} - BY {elm.author}
                </div>
                <h6>
                  <a>{elm.title}</a>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="Blog Details"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image
              width={512}
              height={512}
              src="/img/cancel.svg"
              alt="close icon"
            />
          </button>
          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <Image
                    width={992}
                    height={661}
                    style={{ height: "fit-content" }}
                    src={currentModalItem.imageSrc}
                    alt="blog post"
                  />
                </div>
                <article className="article">
                  <div className="article-title">
                    <h2>{currentModalItem.title}</h2>
                    <div className="media">
                      <div className="avatar">
                        <Image
                          width={638}
                          height={690}
                          style={{ height: "fit-content" }}
                          src="/img/testimonial/team-1.jpg"
                          alt="thumbnail"
                        />
                      </div>
                      <div className="media-body">
                        <label>BY {currentModalItem.author}</label>
                        <span>{currentModalItem.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="article-content">
                    {currentModalItem.content} {/* Dynamically insert the content here */}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default News;
