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

/**
 * @description Generates high-quality documentation for code given, by creating a
 * responsive and visually appealing resume section with job experience and education
 * details using Map() method.
 * 
 * @returns {HTML fragment that contains the structured resume content and skills} a
 * React component that generates high-quality documentation for code provided.
 * 
 * 	1/ `<section id="resume" className="section scrollSpysection">`: This is the
 * outermost element in the resume output, which contains all the other elements
 * related to the candidate's experience, education, and skills.
 * 	2/ `<div className="container">`: This element wraps the entire resume content
 * within a container element with a fixed height, ensuring that the layout remains
 * consistent regardless of the size of the screen or window.
 * 	3/ `<div className="title">`: This element contains the candidate's job title and
 * company name, which are displayed in two separate headings.
 * 	4/ `<h3>Experience.</h3>`: This is a header that displays the candidate's experience
 * details in a series of rows.
 * 	5/ `<div className="resume-box">`: This element contains a grid of resume rows,
 * each representing a single job experience.
 * 	6/ `{resumeContent.map((val, i) => (`,`: This is an array function that maps over
 * the `resumeContent` array and generates a new array containing the job experience
 * details for each position.
 * 	7/ `<div className="row">`: This element wraps each resume row, which contains
 * information about a single job experience.
 * 	8/ `<div className="col-md-4 col-xl-3">`: This is an inner grid container that
 * spans four columns on medium-sized screens and three columns on large-sized screens.
 * 	9/ `<div className="rb-left">`: This element contains the job position details.
 * 	10/ `<h6>{val.jobPosition}</h6>`: This displays the job position title in a larger
 * font size.
 * 	11/ `<label>{val.jobType}</label>`: This displays the job type or category.
 * 	12/ `<p>{val.jobDuration}</p>`: This displays the duration of the job in paragraph
 * form.
 * 	13/ `<div className="rb-time">{val.timeDuraton}</div>`: This displays the time
 * duration in a small text element with a right arrow icon.
 * 	14/ `<div className="col-md-8 col-xl-9">`: This is an inner grid container that
 * spans eight columns on medium-sized screens and nine columns on large-sized screens.
 * 	15/ `<div className="rb-right">`: This element contains the company name and job
 * description details.
 * 	16/ `<h6>{val.compnayName}</h6>`: This displays the company name in a larger font
 * size.
 * 	17/ `<p>{val.jobDescription}</p>`: This displays the job description in paragraph
 * form.
 * 	18/ `</div>`: Closes the resume row element.
 * 	19/ `{educatonContent.map((val, i) => (`,`: This is an array function that maps
 * over the `educationContent` array and generates a new array containing the candidate's
 * education details for each degree level.
 * 	20/ `<ul className="aducation-box">`: This element contains an unordered list of
 * education details.
 * 	21/ `{val.passingYear && val.courseLink}`: This conditional statement creates a
 * list item for each passing year, which links to the course website.
 * 	22/ `<h6>`<a href={val.courseLink}>{val.degreeTitle}</a>`: This displays the
 * degree title in a larger font size and creates a clickable link to the course website.
 * 	23/ `</h6>`: Closes the header element.
 * 	24/ `{val.instituteName}`: This displays the name of the institute where the
 * candidate studied.
 * 	25/ `</ul>`: Closes the unordered list element.
 * 	26/ `{skillsContent.map((val, i) => (`,}: This is an array function that maps
 * over the `skillsContent` array and generates a new array containing the candidate's
 * skills details for each skill level.
 * 	27/ `<Skills />`: This element displays the candidate's skills in a grid layout.
 * 	28/ `</div>`: Closes the skills grid container element.
 */
const Resume = () => {
  return (
    <>
      <section id="resume" className="section scrollSpysection">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/**
           * @description Generates high-quality documentation for given code, using a predefined
           * format and without repeating the question or making any personal statements.
           * 
           * @param {string} className - class name for each element created in the template
           * literals, allowing you to assign specific classes for each row in the responsive
           * layout.
           */}
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
              {/**
               * @description Maps through a list of objects representing education details and
               * generates an unordered list of list items containing information such as passing
               * year, degree title, and institute name, using the provided links for each item.
               * 
               * @param {string} className - CSS class to apply to the containing element when the
               * list of education information is rendered.
               */}
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