import {
  FaFacebookF,
  FaMedium,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/tuhin96/" },
  { Social: <FaMedium />, link: "https://medium.com/@tuhin.mallick" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/tuhinmallick/" },
  { Social: <FaGithub />, link: "https://github.com/tuhinmallick" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://www.linkedin.com/in/tuhinmallick/"
              target="_blank"
              rel="noreferrer"
            >
              Tuhin Mallick
            </a>{" "}
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
