import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="section theme-light dark-bg scrollSpysection"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <Image
                      width={626}
                      height={630}
                      style={{ height: "fit-content" }}
                      src="/img/about/about-me.jpg"
                      alt="about"
                    />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Data Science Generalist</p>
                  <h3>Tuhin Mallick</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                <p>
                  👋 Heya, Data Science Generalist here! Happy to connect!
                  </p>
                  <p>
                  [Ehm, that title doesn't tell me anything.]
                  </p>
                  <p>
                  💡 Well, it's more of a mindset really. I have 3(ish) years of experience working in different Java web developer, 
                  AI engineer and Data Scientist roles in IT, R&D and ML/AIOps. Being a generalist aka full stack data scientist 
                  if you’d like to call that - means that I'm equally comfortable tackling the definition of the problem statement to 
                  providing the customer with an usable product i.e all phases of data science project lifecycle. 
                  The ideal data scientist is a strong generalist who also brings unique specialties that complement the rest of the team. 
                  </p>
                  <p>
                  [Yeah, but what roles exactly?]
                  </p>
                  <p>
                  💼 Data engineer, Data analyst, Data scientist, Machine learning engineer, Robotics engineer, Product Owner. 
                  I've been recently digging into Agile and Scrum methodology and overall SaaS Growth topics.
                  </p>
                  <p>
                  [Sounds like a list of buzzwords.]
                  </p>
                  <p>
                  🤓 Yeah, haha, sorry about the Technical jargon. 
                  My job is to help others make the right decision - data driven decisions. Finding patterns nobody else sees is the challenge to me. 
                  Better?
                  </p>
                </div>
                {/* <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Nairobi Gadot</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>4th April 1994</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>26 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>San Francisco</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+38) 469 2344 2364</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>info@domainname.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>nairob.40</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${"/img/border-dark.png"})`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${"/img/border-dark.png"})`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Certifications.</h3>
          </div>

          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${"/img/border-dark.png"})`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
