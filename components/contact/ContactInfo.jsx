/**
 * @description Creates an HTML container with contact information, including a header
 * with a h4 title, a paragraph describing availability for freelancing, and three
 * list items with contact details (email, phone number, and physical address).
 * 
 * @returns {HTML fragment consisting of a div element with class "contact-info} a
 * HTML element containing contact information for tuhinmallick.
 * 
 * 	* `div`: A container div element with class `contact-info`.
 * 	* `h4`: A headings element with text "What’s your story? Get in touch".
 * 	* `p`: A paragraph element with text "Always available for freelancing if the
 * right project comes along, feel free to contact me.".
 * 	* `ul`: An unordered list element with two list items.
 * 	* `.media`: A class applied to both list items.
 * 	* `<i>`: An icon element with class "icon".
 * 	* `<span>`: A span element with the text content of the media-body attribute.
 * 	* ` className="map"`: The map icon is used as the media icon.
 * 	* `<li>`: A list item element with the `className` attribute set to "media".
 * 	* `<i>`: Another icon element with class "icon".
 * 	* `<span>`: Again, a span element with the text content of the media-body attribute.
 * 	* ` className="envelope"`: The envelope icon is used as the media icon.
 * 	* `<li>`: Another list item element with the `className` attribute set to "media".
 * 	* `<i>`: Yet another icon element with class "icon".
 * 	* `<span>`: Once more, a span element with the text content of the media-body attribute.
 * 	* `<li>`: The third and final list item element with the `className` attribute
 * set to "media".
 * 	* `<i>`: A phone icon is used as the media icon.
 * 	* `<span>`: The text content of the media-body attribute is displayed within the
 * span element.
 * 	* `+49 157 3552 3845`: The phone number is displayed within the span element.
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
            <span className="media-body">contact@tuhinmallick.com</span>
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
