"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiPhoneOutgoing,
} from "react-icons/fi";
import { FaHome, FaBlog } from "react-icons/fa";
import addScrollspy from "@/utlis/addScrollSpy";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  function ititScrollspy() {
    addScrollspy("nav-link scroll");
  }

  useEffect(() => {
    window.addEventListener("scroll", ititScrollspy);

    return () => {
      window.removeEventListener("scroll", ititScrollspy);
    };
  }, []);

  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? "header-left menu-open" : "header-left "}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link href="/">N</Link>
            </div>
          </div>
          {/* End htl-top */}

          <ul className="nav nav-menu scrollspyLinks">
            <li className="">
              <a
                className="nav-link active"
                href="#home"
                data-tip
                data-tooltip-id="HOME"
                onClick={handleClick}
              >
                <FaHome />
                <ReactTooltip
                  content="Home"
                  style={{ padding: "2px 4px", fontSize: "15px" }}
                  id="HOME"
                  place="right"
                  type="dark"
                  float
                ></ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#about"
                data-tip
                data-tooltip-id="ABOUT"
                onClick={handleClick}
              >
                <FiUser />
                <ReactTooltip
                  id="ABOUT"
                  place="right"
                  type="dark"
                  float
                  content="About"
                  style={{ padding: "2px 4px", fontSize: "15px" }}
                >
                  <span>About</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#resume"
                data-tip
                data-tooltip-id="RESUME"
                onClick={handleClick}
              >
                <FiFileText />
                <ReactTooltip
                  id="RESUME"
                  place="right"
                  type="dark"
                  float
                  content="Resume"
                  style={{ padding: "2px 4px", fontSize: "15px" }}
                >
                  <span>Resume</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#work"
                data-tip
                data-tooltip-id="WORK"
                onClick={handleClick}
              >
                <FiBriefcase />
                <ReactTooltip
                  id="WORK"
                  place="right"
                  type="dark"
                  float
                  content="Work"
                  style={{ padding: "2px 4px", fontSize: "15px" }}
                >
                  <span>Work</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#blog"
                data-tip
                data-tooltip-id="BLOG"
                onClick={handleClick}
              >
                <FaBlog />
                <ReactTooltip
                  id="BLOG"
                  place="right"
                  type="dark"
                  float
                  content="Blog"
                  style={{ padding: "2px 4px", fontSize: "15px" }}
                >
                  <span>Blog</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#contactus"
                data-tip
                data-tooltip-id="CONTACT"
                onClick={handleClick}
              >
                <FiPhoneOutgoing />
                <ReactTooltip
                  id="CONTACT"
                  place="right"
                  type="dark"
                  float
                  content="Contact"
                  style={{ padding: "2px 4px", fontSize: "15px" }}
                >
                  <span>Contact</span>
                </ReactTooltip>
              </a>
            </li>
          </ul>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
