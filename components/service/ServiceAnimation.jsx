const ServiceContent = [
  {
    icon: "icon-search",
    title: "Machine Learning",
    descriptions: `Need to make predictions based on historical data? Or want to explore your data for certain patterns?
    I am passionate about learning the theory that is pushing the cutting edge of ML, 
    both supervised and unsupervised algorithms.`,
    delayAnimation: "",
  },
  {
    icon: "icon-linegraph",
    title: "Data Science and analysis",
    descriptions: `A picture says more than a thousand words..but what exactly do you want to visualize?
    I have seen a lot of examples of very good bus also very bad visualizations.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-genius",
    title: "Full-stack web developer",
    descriptions: `As a web developer, I help to design and create the fast and responsive website for starters and freelancers. 
    I made this website with React and hosted it through heroku.`,
    delayAnimation: "400",
  },
  {
    icon: "icon-cloud",
    title: "Cloud and Parallel Computing",
    descriptions: `I utilize AWS and Azure to develop and productionize machine learning systems. And to parallelize
    I used HIVE, Hadoop and Spark.`,
    delayAnimation: "600",
  },
  {
    icon: "icon-gears",
    title: "Devops",
    descriptions: `I am always looking for challenges in setting up automated architectures and solving complex problems such as realtime data processing, continuous integration, centralized logging, cloud monitoring, and Big Data processing.`,
    delayAnimation: "800",
  },
  {
    icon: "icon-presentation",
    title: "Agile coach",
    descriptions: `An agile mindset helps me to execute tasks efficiently and on time and even more important: With enthusiasm, passion and personal heartiness.`,
    delayAnimation: "1000",
  },
];

export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}