import Link from "next/link";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Page Not Found || Tuhin Mallick || Data Science Generalist",
};
/**
 * @description Renders an error page with a heading, a message, and a button to
 * navigate back to the homepage.
 * 
 * @returns {HTML fragment} a React component that renders an error page with a title,
 * message, and a back button.
 * 
 * 	* `section`: A React element that renders an error page wrapper with a container,
 * row, and col-lg-8 elements.
 * 	* `container`: A React element that holds the error page wrapper.
 * 	* `row`: A React element that aligns the error page wrapper contents in the center
 * of the page.
 * 	* `col-lg-8`: A React class that centers the error message contents inside a
 * collapsing grid container.
 * 	* `inner`: A React element that contains the error message text and button.
 * 	* `h1`: A React element that displays the error message title in bold white text
 * with a margin of 15 pixels.
 * 	* `p`: A React element that displays the error message text in h4 font size.
 * 	* `btn-bar`: A React element that holds the "Back to Home" button.
 * 	* `px-btn`: A React class that styles the "Back to Home" button as a small, white
 * button with a margin of 5 pixels from the top and bottom edges of its parent element.
 * 	* `/`: A React link component that displays the text "BACK TO HOME".
 */
const NotFound = () => {
  return (
    <>
      <section className="error-page-wrapper">
        <div className="container">
          <div className="row justify-content-center full-screen align-items-center">
            <div className="col-lg-8 text-center">
              <div className="inner">
                <h1 className="display-3 white-color m-15px-b">
                  404 - Page Not Found..
                </h1>
                <p className="h4">
                  Whoops, it looks like the page you request wasn't found.
                </p>
                <div className="btn-bar mt-4">
                  <Link className="px-btn px-btn-white" href="/">
                    BACK TO HOME
                  </Link>
                  {/* End purchase_button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Error Page Wrapper */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End footer */}
    </>
  );
};

export default NotFound;
