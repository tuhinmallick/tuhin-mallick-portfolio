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
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Tuhin Mallick || Data Science Generalist",
  description: "Explore cutting-edge technology solutions with Tuhin Mallick. Discover services tailored for your business needs.", // Add a meta description
};

/**
 * @description Generates a homepage layout with various sections, including a header,
 * slider, about section, resume section, portfolio section, blog section, contact
 * section, and footer. It also includes Google Analytics and Speed Insights integration.
 * 
 * @returns {HTML element containing all the sections of a website's homepage, including
 * the header, slider, about, resume, portfolio, blog, contact, and footer sections}
 * a React component representing a homepage with a navigation menu, a header section,
 * and various sections containing portfolio items, blog posts, contact information,
 * and analytics integration.
 * 
 * 	* `<div className="main-left theme-dark">`: This is a container div with a class
 * name "main-left" and a theme of "dark".
 * 	* `<head>`: This is a header section that contains metadata such as title and description.
 * 	* `<Header />`: This is a component that renders a header section.
 * 	* `<Slider />`: This is a component that renders a slider section.
 * 	* `<About />`: This is a component that renders an about section.
 * 	* `<Resume />`: This is a component that renders a resume section.
 * 	* `<section>`: This is a container div with a class name "section" and a id of
 * "work". It contains a container div with a class name "container" and a title.
 * 	* `<Portfolio />`: This is a component that renders a portfolio section.
 * 	* `<Blog />`: This is a component that renders a blog section.
 * 	* `<section>`: This is a container div with a class name "section" and an id of
 * "contactus". It contains a container div with a class name "container" and a title.
 * 	* `<ContactInfo />`: This is a component that renders contact information.
 * 	* `<div className="row">`: This is a container div with a class name "row".
 * 	* `<ContactForm>`: This is a component that renders a contact form.
 * 	* `<h4>` : This is an h4 tag with content "Say Something".
 * 	* `<Map>`: This is a component that renders a map.
 * 	* `<footer className="footer white">`: This is a footer container div with a class
 * name "footer" and a theme of "white".
 * 	* `<div className="container">`: This is a container div with a class name "container".
 * 	* `<Footer />`: This is a component that renders a footer section.
 * 	* `<Analytics>`: This is a component that renders analytics data.
 * 	* `<SpeedInsights>`: This is a component that renders speed insights data.
 * 
 * 	In summary, the `HomeOne` function returns a JSX object with various components
 * and sections that make up a website's homepage.
 */
const HomeOne = () => {
  return (
    <div className="main-left theme-dark">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other necessary meta tags */}
      </head>
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
      {/* End Blog Section */}

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
      {/* End Footer Section */}

      {/* Integrate Analytics and Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default HomeOne;
