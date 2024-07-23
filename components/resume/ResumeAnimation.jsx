import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Master Thesis student`,
    jobType: `Mannheim, Germany | Onsite`,
    jobDuration: `Sep 2022 - Present`,
    timeDuraton: `Fulltime`,
    compnayName: "Image Data Exploration and Analysis Lab",
    jobDescription: ``,
    delayAnimation: "",
  },
  {
    jobPosition: `Data Scientist`,
    jobType: `Mannheim, Germany | Onsite`,
    jobDuration: `Nov 2021 - August 2022`,
    timeDuraton: `Intern`,
    compnayName: "Chemovator GmbH",
    jobDescription: `• Implemented MlOps through MlFlow which allowed automated model development lifecycle and reduced time for model reproduction by 25%.
    • Demystified AI black box model by implementing explainable AI through feature importance and SHAP
• Implemented stacked ensemble and improved model accuracy by 17% by using Meta-Learning.
• Implemented back testing algorithm through walk-forward validation which helped client gained confidence of the model stability and accuracy
• Implemented bootstrapping confidence interval and automated hyperparameter optimization through HyperOpt which increased model accuracy by 31%`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Computer vision research assistant`,
    jobType: `Erlangen, Germany | Onsite`,
    jobDuration: `February 2021 – November 2021`,
    timeDuraton: `Part Time`,
    compnayName: "Institute of Factory Automation and Production Systems",
    jobDescription: `• Automated screw separation, using PyTorch and Deep Object Pose Estimation (DOPE) with YOLO to determine 6-DoF screw in the load carrier.
• Generate synthetic training data sets using the Unreal Engine (UE4) and NVidia Deep Learning Data Synthesizer (NDDS).`,
    delayAnimation: "200",
  },
  {
    jobPosition: `Machine learning research assistant`,
    jobType: ` Erlangen, Germany | Onsite`,
    jobDuration: `Mar 2020 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "Machine Learning and Data Analytics (MaD) Lab",
    jobDescription: `
    • Online handwriting recognition of IMU-enhanced ballpoint pens with machine learning
    • Deliver accuracies of up to 90% for the writer dependent task and 83% for the writer independent task for uppercase letters`,
    delayAnimation: "300",
  },
  {
    jobPosition: `Java web developer`,
    jobType: `Kolkata, India | Onsite`,
    jobDuration: `November 2018 – September 2020`,
    timeDuraton: `Full Time`,
    compnayName: "Tata Consultancy Services Limited",
    jobDescription: ` 
    • Development and logic building in java using frameworks like struts2 and spring and SQL query generation 
    • Developing web pages along the UI layout and front-end programming with validations using jQuery`,
    delayAnimation: "400",
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