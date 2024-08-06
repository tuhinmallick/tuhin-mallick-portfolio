import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Head of Artificial Intelligence and Data`,
    jobType: `Hamburg, Germany | Onsite`,
    jobDuration: `November 2023 - Present`,
    timeDuraton: `Fulltime`,
    compnayName: "JULIE & GRACE GmbH",
    jobDescription: `• Leading AI initiatives to drive innovation in the fine jewelry e-commerce sector.
    • Implementing AI solutions to augment lean management processes, aiming to achieve 100% AI integration from a 100% vertically integrated model.
    • Demonstrating how AI is disrupting industries faster than fast fashion, enhancing operational efficiency, and improving customer experiences.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Applied Data Scientist and Engineer`,
    jobType: `Hamburg, Germany | Onsite`,
    jobDuration: `April 2023 - October 2023`,
    timeDuraton: `Fulltime`,
    compnayName: "VOIDS Technology GmbH",
    jobDescription: `• Developed advanced demand forecasting models to balance supply and demand for e-commerce brands.
    • Automated multi-channel demand forecasting, improving accuracy and boosting profitability.
    • Integrated marketing and supply chain data to provide actionable insights and streamline operations.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Data Scientist`,
    jobType: `Mannheim, Germany | Onsite`,
    jobDuration: `Nov 2021 - August 2022`,
    timeDuraton: `Intern`,
    compnayName: "BASF SE",
    jobDescription: `• Implemented MlOps through MlFlow, reducing model reproduction time by 25%.
    • Enhanced AI model transparency using explainable AI techniques such as feature importance and SHAP.
    • Improved model accuracy by 17% using stacked ensemble and Meta-Learning.
    • Developed a back-testing algorithm with walk-forward validation, boosting client confidence in model stability and accuracy.
    • Increased model accuracy by 31% through bootstrapping confidence intervals and automated hyperparameter optimization with HyperOpt.`,
    delayAnimation: "200",
  },
  // {
  //   jobPosition: `Computer Vision Research Assistant`,
  //   jobType: `Erlangen, Germany | Onsite`,
  //   jobDuration: `February 2021 – November 2021`,
  //   timeDuraton: `Part Time`,
  //   compnayName: "Institute of Factory Automation and Production Systems",
  //   jobDescription: `• Automated screw separation using PyTorch and Deep Object Pose Estimation (DOPE) with YOLO to determine 6-DoF screw positions in load carriers.
  //   • Generated synthetic training datasets using Unreal Engine (UE4) and NVidia Deep Learning Data Synthesizer (NDDS).`,
  //   delayAnimation: "300",
  // },
  // {
  //   jobPosition: `Machine Learning Research Assistant`,
  //   jobType: `Erlangen, Germany | Onsite`,
  //   jobDuration: `Mar 2020 - Present`,
  //   timeDuraton: `Part Time`,
  //   compnayName: "Machine Learning and Data Analytics (MaD) Lab",
  //   jobDescription: `• Developed online handwriting recognition systems for IMU-enhanced ballpoint pens using machine learning.
  //   • Achieved up to 90% accuracy for writer-dependent tasks and 83% for writer-independent tasks for uppercase letters.`,
  //   delayAnimation: "400",
  // },
  {
    jobPosition: `Java Web Developer`,
    jobType: `Kolkata, India | Onsite`,
    jobDuration: `November 2018 – September 2020`,
    timeDuraton: `Full Time`,
    compnayName: "Tata Consultancy Services Limited",
    jobDescription: `• Developed and implemented logic in Java using frameworks like Struts2 and Spring.
    • Created web pages with UI layout and front-end programming, including validations using jQuery.`,
    delayAnimation: "300",
  },
];

const educatonContent = [
  {
    passingYear: "October 2020 - 2023",
    degreeTitle: "Master degree in Computational Engineering",
    instituteName: "Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany",
    courseLink: "https://www.ce.studium.fau.eu/",
    instituteLink: "https://www.fau.eu/",
  },
  {
    passingYear: "Februrary 2022 - 2023",
    degreeTitle: "Double Master degree in Computational Sciences",
    instituteName: "Università della Svizzera italiana USI, Lugano, Switzerland",
    courseLink: "https://www.inf.usi.ch/en/practical-information/courses-and-study-plans/double-degree/friedrich-alexander-universitat",
    instituteLink: "https://www.usi.ch/en",
  },
  {
    passingYear: "August 2014 - July 2018",
    degreeTitle: "Bachelor's degree in Mechanical Engineering",
    instituteName: "Heritage Institute of Technology, Kolkata, India",
    courseLink: "https://heritageit.edu/ME.aspx",
    instituteLink: "https://heritageit.edu/index.aspx",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section scrollSpysection">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="separated"
            style={{
              backgroundImage: `url(${"/img/border-dark.png"})`,
            }}
          ></div>

          <div className="title">
            <h3>Education & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>
                      <a
                        href={val.courseLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {val.degreeTitle}
                      </a>
                    </h6>
                    <p>
                      <a
                        href={val.instituteLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {val.instituteName}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
