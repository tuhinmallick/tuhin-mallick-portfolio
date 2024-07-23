import Header from "@/components/header/Header";
import Slider from "@/components/slider/SliderAnimation";
import About from "@/components/about/AboutAnimation";
import Resume from "@/components/resume/ResumeAnimation";
import Portfolio from "@/components/portfolio/PortfolioAnimation";
import Blog from "@/components/blog/BlogAnimation";
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import Footer from "@/components/footer/FooterAnimation";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title:
    "Tuhin Mallick",
};
/**
 * @description Generates high-quality documentation for a code component. It returns
 * a react functional component that includes several sections, such as Header, Slider,
 * About, Resume, Portfolio, Blog, Contact Us, and Footer. Each section contains
 * relevant components, including a contact form, map, and footer. The function creates
 * a responsive layout using CSS classes and AOS (Animate.css) animations.
 * 
 * @returns {HTML element} a responsive HTML structure with various sections for
 * portfolio, blog, contact information, and footer.
 * 
 * 	* `div`: This is the outermost div element that contains all the other elements.
 * It has a class of "main-left" and a theme of "dark".
 * 	* `Header`: This is an h1 heading element that contains the text "HomeOne". It
 * is nested inside the "div" element.
 * 	* `Slider`: This is a slider element that contains a series of images. It is also
 * nested inside the "div" element.
 * 	* `About`: This is an about section element that contains text and images. It is
 * also nested inside the "div" element.
 * 	* `Resume`: This is a resume section element that contains a resume PDF file. It
 * is also nested inside the "div" element.
 * 	* `Portfolio`: This is a portfolio section element that contains a series of
 * projects. It is also nested inside the "div" element.
 * 	* `Blog`: This is a blog section element that contains a list of recent blog
 * posts. It is also nested inside the "div" element.
 * 	* `Contactus`: This is a contact us section element that contains a contact form
 * and map. It is also nested inside the "div" element.
 * 	* `Footer`: This is a footer element that contains copyright information and links
 * to other pages. It is also nested inside the "div" element.
 */
const HomeOne = () => {
  return (
    <div className="main-left theme-dark">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Resume />
      {/* End Resume Section */}

      <section
        id="work"
        className="section theme-light dark-bg scrollSpysection"
      >
        <div className="container text-white">
          <div className="title">
            <h3>My Portfolio.</h3>
          </div>
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio Section */}

      <section id="blog" className="section scrollSpysection">
        <div className="container">
          <div className="title">
            <h3>Latest Blog.</h3>
          </div>
          <Blog />
        </div>
      </section>
      {/* End Portfolio Section */}

      <section
        id="contactus"
        className="section theme-light dark-bg scrollSpysection"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-xl-4 m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <ContactInfo />
            </div>
            {/* End Contact info */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="contact-form">
                <h4>Say Something</h4>
                <Contact />
              </div>
            </div>
            {/* End contact form */}

            <div
              className="col-12"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <Map />
              {/* End google-map */}
            </div>
            {/* End Col */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}

      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End Contact Section */}
    </div>
  );
};

export default HomeOne;
