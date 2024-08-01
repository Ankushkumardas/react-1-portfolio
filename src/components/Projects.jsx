import React from "react";
import Projectcard from "./Projectcard";
const projects = [
  {
    name: "Quiz AI Generator",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis ad illum dicta rem ?",
    url: "https://opexams.com/free-questions-generator/",
    imgurl:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a3/6b/90/a36b904e-6209-d99d-b74b-e67dc60f298b/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/512x512bb.jpg",
  },
  {
    name: "Tech Blog",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis ad illum dicta rem sakcj sacn scha9shh acaca a9ca ca?",
    url: "https://www.royalcyber.com/wp-content/uploads/2022/12/questgen.png",
    imgurl:
      "https://getdrawings.com/free-icon/icon-artificial-intelligence-69.png",
  },
  {
    name: "AI form Generator",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis ad illum dicta rem sdvh 8ye sadiha  iuhsfh siisajio  asd y so sdua  paousj ufef jsc spkcs?",
    url: "https://opexams.com/free-questions-generator/",
    imgurl:
      "https://cdn.icon-icons.com/icons2/1479/PNG/512/2890569-artificialintelligence17_101964.png",
  },
  {
    name: "Dev-From",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus nobis ad illum dicta rem scsh sc9u9u9u acauyw  c9uasc  sc8uaj ca?",
    url: "https://opexams.com/free-questions-generator/",
    imgurl:
      "https://cdn-icons-png.flaticon.com/512/1836/1836034.png",
  },
];

function Projects() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-left text-gray-800">
        Recent Projects
      </h1>
      <ul className="p-4 text-left bg-white shadow-md sha rounded-2xl">
        {projects.map((project, i) => (
          <li>
            <Projectcard
              name={project.name}
              desc={project.desc}
              url={project.url}
              imgurl={project.imgurl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
