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
 * @description Maps over an array of objects (`SocialShare`) and generates a markup
 * for a social media icons bar, each icon having a specific `link` property and
 * `Social` string value.
 * 
 * @returns {HTML element (a `<div} a div element containing a map of social sharing
 * icons.
 * 
 * 	* `className`: A string representing the CSS class to apply to the anchor element.
 * 	* `key`: An integer value unique to each element in the `SocialShare` array, used
 * for rendering and optimization purposes.
 * 	* `href`: A URL object representing the link associated with the social media icon.
 * 	* `rel`: An optional string value indicating whether the linked page should be
 * opened in a new tab or not.
 * 	* `target`: An optional string value indicating where the linked page should be
 * opened.
 * 	* `Social`: The key that identifies the social media platform, which determines
 * the SVG icon used for rendering.
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
