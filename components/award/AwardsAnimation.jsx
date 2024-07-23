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
    awardName: "Professional Machine Learning Engineer",
    awardFor: "Google Cloud",
    awardLink: "https://google.accredible.com/c3f0cccc-a412-4f99-8faa-213b17c7bf74",
    delayAnimation: "200",
  },
  {
    img: "a3",
    awardName: "Azure Data Scientist Associate",
    awardFor: "Microsoft Certified",
    awardLink: "https://www.credly.com/badges/3db49c71-e161-4ea9-a15f-279d10594fc6/linked_in_profile",
    delayAnimation: "400",
  },
  {
    img: "a4",
    awardName: "Professional Scrum Master™ I (PSM I)",
    awardFor: "Scrum.org",
    awardLink: "https://www.credly.com/badges/ebe5e2b7-2562-4836-89d1-7a8a5658a47b/public_url",
    delayAnimation: "0",
  },
  {
    img: "a5",
    awardName: "Professional Data Engineer",
    awardFor: "Google Cloud",
    awardLink: "https://www.credential.net/7683c18d-e2bb-4989-8415-373d7c54d140",
    delayAnimation: "200",
  },
  {
    img: "a6",
    awardName: "Tableau Desktop Specialist",
    awardFor: "Tableau",
    awardLink: "https://www.credly.com/badges/03e135f3-f300-4842-a1e9-a16c3813723a/linked_in_profile",
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