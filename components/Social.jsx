import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaMedium
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/tuhin96" },
  { Social: <FaTwitter />, link: "https://x.com/Its_Me_Ronnie_" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/__horcrux._/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/tuhinmallick/" },
  { Social: <FaMedium />, link: "https://medium.com/@tuhin.mallick" },
];

/**
 * @description Returns an array of social media links. Each element in the array is
 * represented by a `<a>` tag with a unique `key`.
 * 
 * @returns {array} a collection of social media icons displayed centered within a
 * div container.
 */
const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
