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
  title: "Tuhin Mallick",
};

/**
 * @description Renders a home page with various sections, including a header, slider,
 * about section, resume section, portfolio section, blog section, contact section,
 * and footer. It also integrates analytics and speed insights into the page.
 * 
 * @returns {Component} a well-structured HTML file containing various sections and
 * elements, including a header, slider, about section, resume section, portfolio
 * section, blog section, contact section, and footer.
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