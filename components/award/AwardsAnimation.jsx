import Image from "next/image";

const AwardContnet = [
  {
    img: "a1",
    awardName: "AWS Certified Solutions Architect – Associate",
    awardFor: "Amazon Web Services",
    awardLink: "https://www.credly.com/badges/85dc92e1-34a4-4ee6-90f7-f8c1ed84dd7d/public_url",
    delayAnimation: "0",
  },
  {
    img: "a2",
    awardName: "Professional Machine Learning Engineer",
    awardFor: "Google Cloud",
    awardLink: "https://google.accredible.com/c3f0cccc-a412-4f99-8faa-213b17c7bf74",
    delayAnimation: "200",
  },
  {
    img: "a3",
    awardName: "Azure Data Scientist Associate",
    awardFor: "Microsoft Certified",
    awardLink: "https://www.credly.com/badges/3db49c71-e161-4ea9-a15f-279d10594fc6/linked_in_profile",
    delayAnimation: "400",
  },
  {
    img: "a4",
    awardName: "Professional Scrum Master™ I (PSM I)",
    awardFor: "Scrum.org",
    awardLink: "https://www.credly.com/badges/ebe5e2b7-2562-4836-89d1-7a8a5658a47b/public_url",
    delayAnimation: "0",
  },
  {
    img: "a5",
    awardName: "Professional Data Engineer",
    awardFor: "Google Cloud",
    awardLink: "https://www.credential.net/7683c18d-e2bb-4989-8415-373d7c54d140",
    delayAnimation: "200",
  },
  {
    img: "a6",
    awardName: "Tableau Desktop Specialist",
    awardFor: "Tableau",
    awardLink: "https://www.credly.com/badges/03e135f3-f300-4842-a1e9-a16c3813723a/linked_in_profile",
    delayAnimation: "400",
  },
];

/**
 * @description Generates a grid of award boxes, each containing an image and information
 * about the award, using the `map` method to loop through an array of award objects.
 * 
 * @returns {HTML div element} a React component displaying multiple award images
 * with links to their respective pages.
 * 
 * 	* `return`: indicates the beginning of the expression being evaluated
 * 	* `(<> ...)`: defines a React component, which is a JSX fragment that returns a
 * JS object representing a React component
 * 	* `<div className="row">`: defines a row container with a fixed width
 * 	* `{AwardContent.map((val, i) => (...))}`: maps over an array of objects called
 * `AwardContent` and renders a div for each object in the array
 * 		+ `className": "col-lg-4 m-15px-tb"`: sets the CSS class of the rendered div to
 * "col-lg-4 m-15px-tb"
 * 		+ `key`: assigns a unique key to each rendered div
 * 		+ `data-aos`: sets an attribute called "aos" with the value "fade-right", which
 * triggers the animation of the div
 * 		+ `data-aos-duration`: sets the duration of the animation to 1200 milliseconds
 * 		+ `data-aos-delay`: assigns a delay time for each div based on the `val.delayAnimation`
 * property of the corresponding object in the `AwardContent` array
 * 	* `<div className="feature-box-02 d-flex align-items-center">`: defines a feature
 * box 02 container with the CSS class "d-flex align-items-center"
 * 		+ `<div className="icon">`: defines an icon container within the feature box
 * 		+ `<a>`: creates a link element with a target of "_blank" and rel="nofollow"
 * 			- `<Image>`: creates an image element with a width of 350 pixels and a height
 * of 350 pixels, scaling the image to fit its content
 * 			- `src`: sets the source of the image to a URL based on the `img` property of
 * the corresponding object in the `AwardContent` array
 * 			- `<alt>`: sets the alt text of the image to "award"
 * 		+ `<div className="media-body">`: defines a media body container within the icon
 * container
 * 			- `<h6>`: creates a heading element with a level 3 (h6) and a URL based on the
 * award link property of the corresponding object in the `AwardContent` array
 * 			- `<a>`: creates a link element with a target of "_blank" and rel="nofollow"
 * 				- `<text>`: sets the text content of the link to the name of the award
 * 
 * 	In summary, this function generates a grid of awards cards using React and the
 * CSS framework Bootstrap. Each card has an icon image, a heading and a link to the
 * award's details page. The function takes advantage of JSX syntax to simplify code
 * readability and maintainability.
 */
const Awards = () => {
  return (
    <>
      {/**
       * @description Maps over a `AwardContnet` array and generates a container element
       * for each item in the array. Each container element includes a button with an image
       * and a award name, as well as a brief description of the award.
       * 
       * @param {string} className - class name for the element, which is used to set the
       * styles of the feature box.
       */}
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <a
                  href={val.awardLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={350}
                    height={350}
                    style={{ height: "fit-content" }}
                    src={`/img/award/${val.img}.png`}
                    alt="award"
                  />
                </a>
              </div>
              <div className="media-body">
                <h6>
                  <a
                    href={val.awardLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {val.awardName}
                  </a>
                </h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;