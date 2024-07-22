'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "Dr. Ralph Debusmann",
      desc: `Tuhin is a standout data scientist and coder - he gets things done.

I had the pleasure of working with him for seven months at Forecasty.AI - where he served as a data scientist and I as the CTO.

Tuhin's ability to build not only AI models but also entire UIs around them, and to blend in the latest developments e.g. around online ML, event streaming, cloud deployment and NLP, was fascinating.

He was a fountain of ideas.

Tuhin would be an asset to any team remotely having to deal with AI.`,
      reviewerName: "Dr. Ralph Debusmann",
      reviewerLink: "https://www.linkedin.com/in/ralph-debusmann-63204675/",
      designation: "Co-Founder and Chief Technical Officer at Forecasty.AI",
      designationLink: "https://forecasty.ai/teams/",
    },
    {
      imageName: "Dr. Pascal Ochs",
      desc: ` Tuhin has demonstrated to be a valuable team player and displayed great dedication delivering innovative solutions to our customers. He often went above and beyond, going out of his way to deliver forecasting solutions to our customers.

He always provided a fresh take on data science having a wealth of knowledge of different tools that go beyond the typical data scientist. He has a keen eye for automation making the live easier for the team and the customer while still enabling consistent service operation.

Overall, Tuhin was a great asset in our data science team.`,
      reviewerName: "Dr. Pascal Ochs",
      reviewerLink: "https://www.linkedin.com/in/pascalochs/",
      designation: "Senior consultant at Grant Thornton AG",
      designationLink: "https://www.grantthornton.de/en/",
    },
    {
      imageName: "Sumanto dutta chowdhury",
      desc: ` From the moment you meet Tuhin, you know he is there to do a great job. He has had to deal with an enormous amount of stressful situations while juggling so many responsibilities that were thrown at him as he was growing within Tata Consultancy Services and yet, he was still there helping us whenever we were in tight spots with our deadlines. Tuhin exudes confidence because he gives a 110% of himself to achieve his goals, no matter how far out of reach they may seem. Team player, go-getter, not to forget his strong Java web development abilities, that's Tuhin in a nutshell.`,
      reviewerName: "Sumanto Dutta Chowdhury",
      reviewerLink: "https://www.linkedin.com/in/sumanto-dutta-chowdhury-7270b837/",
      designation: "Solution Engineer at LabVantage Solutions, Inc",
      designationLink: "https://www.labvantage.com/",
    },
//     {
//       imageName: "team-2",
//       desc: ` Lorem Ipsum is simply dummy text of the printing and
//       typesetting industry. Lorem Ipsum has been the industry's
//       standard dummy text ever since the 1500s.`,
//       reviewerName: "Jara Afsari",
//       designation: "CEO at ib-themes",
//     },
//     {
//       imageName: "team-4",
//       desc: ` Lorem Ipsum is simply dummy text of the printing and
//       typesetting industry. Lorem Ipsum has been the industry's
//       standard dummy text ever since the 1500s.`,
//       reviewerName: "Janiaya kiaram",
//       designation: "Visual Designer",
//     },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div key={i}>
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>
                  <a
                                href={val.reviewerLink}
                                target="_blank"
                                rel="noreferrer"
                              >{val.reviewerName}
                              </a>
                 </h6>
                <span><a
                                href={val.designationLink}
                                target="_blank"
                                rel="noreferrer"
                              >{val.designation}
                              </a></span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}