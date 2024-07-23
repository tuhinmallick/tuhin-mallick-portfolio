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
 * @description Returns an array of links to social media platforms based on a mapping
 * function, each link is labeled with the respective social network icon.
 * 
 * @returns {HTML element, specifically an anchor element with a custom classname
 * defined in the function's syntax} a list of social sharing icons linked to their
 * respective platforms.
 * 
 * 	* `className`: The class name for the social icons div element, which is set to
 * "nav social-icons justify-content-center".
 * 	* `map`: A method that maps over the `SocialShare` array and creates a list of
 * social icons links. Each icon link is created by taking the `val.link` property
 * and setting it as the href attribute, with the `rel` attribute set to "noreferrer"
 * to prevent noreferrer behavior and the `target` attribute set to "_blank" to open
 * the linked URL in a new tab.
 * 	* `<a>`: An HTML anchor tag used to create each social icon link. The `key`
 * property is set to the index of the current iteration in the `map` method, which
 * is used to assign a unique identifier to each link for correct linking later on.
 * The `href` property sets the URL of the linked page, and the `rel` and `target`
 * properties are set as mentioned above.
 * 	* `<div>`: An HTML div tag used to wrap the social icon links in a container
 * element. The class name set is "social-icons" which sets the CSS style for the
 * social icons. The `justify-content-center` property sets the vertical alignment
 * of the social icons within the container.
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
