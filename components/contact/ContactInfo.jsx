/**
 * @description Generates a HTML block with contact information, including a street
 * address, email address, and phone number.
 * 
 * @returns {HTML fragment containing contact information for Tuhin Mukherjee} a HTML
 * fragment containing contact information in a clean and professional format.
 * 
 * 	* `className`: The class name of the container div element is "contact-info".
 * 	* `h4`: An h4 heading element with the text "What’s your story? Get in touch".
 * 	* `p`: A paragraph element with the text "Always available for freelancing if the
 * right project comes along, Feel free to contact me.".
 * 	* `ul`: A list element with three list items. Each list item has a class of either
 * "media" or "li", indicating the type of element it is.
 * 	* `i`: An icon element of class "icon" with the text "map".
 * 	* `span`: A span element with the class "media-body" that contains the contact information.
 * 	* ` className="media"`: An li element with a class of "media".
 * 	* ` i className="icon icon-envelope" `: Anli element with an icon element of class
 * "icon" with the text "envelope".
 * 	* `span`: A span element with the class "media-body" that contains the email address.
 * 	* ` className="media"`: Another li element with a class of "media".
 * 	* ` i className="icon icon-phone"`: Another li element with an icon element of
 * class "icon" with the text "phone".
 * 	* `span`: A span element with the class "media-body" that contains the phone number.
 * 
 * 	These elements are wrapped in a `div` element with the class "contact-info", which
 * contains all the contact information for the freelancer.
 */
const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>What’s your story? Get in touch</h4>
        <p>
          Always available for freelancing if the right project comes along,
          Feel free to contact me.
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
             Geschwister-Scholl-Straße 154, 20252 Hamburg, Germany.
            </span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">tuhin.mllk@gmail.com</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+49 157 3552 3845</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
