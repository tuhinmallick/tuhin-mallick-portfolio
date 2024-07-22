import Header from "@/components/header/Header";
import Slider from "@/components/slider/SliderRtlAnimation";
import About from "@/components/about/AboutAnimation";
import Resume from "@/components/resume/ResumeAnimation";
import Portfolio from "@/components/portfolio/PortfolioAnimation";
import Blog from "@/components/blog/BlogRtlAnimation";
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import Footer from "@/components/footer/FooterAnimation";
import ModeChanger from "@/components/ModeChanger";

export const metadata = {
  title:
    "RTL Theme Light Animation || Nairo React Nextjs Personal Portfolio Template",
};
const HomeLightRtlAnimation = () => {
  return (
    <>
      <ModeChanger mode={"theme-light"} />
      <div className="main-left rtl-theme">
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
          <div className="container">
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
      </div>{" "}
    </>
  );
};

export default HomeLightRtlAnimation;
