import Image from "next/image";

const AwardContnet = [
  {
    img: "a1",
    awardName: "AWS Certified Solutions Architect – Associate",
    awardFor: "Amazon Web Services",
    awardLink: "https://www.credly.com/badges/85dc92e1-34a4-4ee6-90f7-f8c1ed84dd7d/public_url",
    delayAnimation: "0",
  },
  {
    img: "a2",
    awardName: "Azure AI Fundamentals",
    awardFor: "Microsoft Certified",
    awardLink: "https://www.credly.com/badges/c1d45073-6f53-4346-8195-55abcd31550a/public_url",
    delayAnimation: "200",
  },
  {
    img: "a3",
    awardName: "Professional Scrum Master™ I (PSM I)",
    awardFor: "Scrum.org",
    awardLink: "https://www.credly.com/badges/ebe5e2b7-2562-4836-89d1-7a8a5658a47b/public_url",
    delayAnimation: "400",
  },
  {
    img: "a4",
    awardName: "Security, Compliance, and Identity Fundamentals",
    awardFor: "Microsoft Certified",
    awardLink: "https://www.credly.com/badges/6e9798c0-9d80-408d-96cc-862ce654209a/public_url",
    delayAnimation: "0",
  },
  {
    img: "a5",
    awardName: "Power Platform Fundamentals",
    awardFor: "Microsoft Certified",
    awardLink: "https://www.credly.com/badges/d56f774a-1f0b-4948-8dc4-a9457aa556a4/public_url",
    delayAnimation: "200",
  },
  {
    img: "a6",
    awardName: "Azure Data Fundamentals",
    awardFor: "Microsoft Certified",
    awardLink: "https://www.credly.com/badges/e4b4d9e1-f048-4945-b4e0-e0e2bc652002/public_url",
    delayAnimation: "400",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <a
                  href={val.awardLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={350}
                    height={350}
                    style={{ height: "fit-content" }}
                    src={`/img/award/${val.img}.png`}
                    alt="award"
                  />
                </a>
              </div>
              <div className="media-body">
                <h6>
                  <a
                    href={val.awardLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {val.awardName}
                  </a>
                </h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;