import React from "react";
import "./projects.css";
import { VscLiveShare } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
import img1 from "../../Assets/Hotstar.png";
import img2 from "../../Assets/NaturesBasket.png";
import img3 from "../../Assets/Pharmeasy.png";
import img4 from "../../Assets/Youtube.png";
import img5 from "../../Assets/foodapp.png";
import img7 from "../../Assets/Todo.png";
import img8 from "../../Assets/aerofashion.png";
import img9 from "../../Assets/giphy.png";
import img10 from "../../Assets/Shop.com.png";

const data = [
  {
    id: 1,
    image: img8,
    demo: "https://63d7723d8213757904234c0e--visionary-churros-1d6bbc.netlify.app/",
    liveLink:"https://63d7723d8213757904234c0e--visionary-churros-1d6bbc.netlify.app/",
    github: "https://github.com/Tarun03022407/AeroFashion.com",
    title: "AeroFashion.com",
    desc: "AéroFashion, also called Aero, is an American shopping mall–based retailer of casual apparel and accessories, principally targeting young adults through its Aéropostale stores. ",
    tech1: "React-redux-thunk",
    tech2: "Mongoose",
    tech3: "Express",
  },
  {
    id: 2,
    image: img10,
    demo: "https://aqua-shop.netlify.app",
    liveLink: "https://aqua-shop.netlify.app",
    github: "https://github.com/Tarun03022407/Shop.com",
    title: "Aqua Shop",
    desc: "AQUASHOP.COM -Marketplace offers great deals on clothes, beauty, health and nutrition, shoes, electronics, and more from over 1500 stores with one easy checkout .",
    tech1: "React",
    tech2: "React-redux-thunk",
    tech3: "Chakra-Ui",
  },
  {
    id: 3,
    image: img3,
    demo: "https://63791b95bc18630f42f9eae8--luminous-gaufre-3cf77b.netlify.app/index.html",
    liveLink:"https://63791b95bc18630f42f9eae8--luminous-gaufre-3cf77b.netlify.app/index.html",
    github: "https://github.com/Tarun03022407/pharmeasy",
    title: "PharmEasy",
    desc: ' A clone website of PharmEasy is one of India"s most trusted online pharmacy & medical stores offering pharmaceutical and healthcare products at a FLAT 20% OFF.',
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 4,
    image: img4,
    demo: "https://639618ab1fbc8c4135d67581--heartfelt-jalebi-4a0cdd.netlify.app/",
    liveLink:"https://639618ab1fbc8c4135d67581--heartfelt-jalebi-4a0cdd.netlify.app/",
    github: "https://github.com/Tarun03022407/youtube",
    title: "YouTube",
    desc: "A clone web application like Youtube where user can search and play videos. ",
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 5,
    image: img5,
    demo: "https://632b336f07a632655cee108e--eloquent-biscotti-1bf391.netlify.app/",
    liveLink:"https://632b336f07a632655cee108e--eloquent-biscotti-1bf391.netlify.app/",
    github: "https://github.com/Tarun03022407/foodapp",
    title: "Food App",
    desc: "A Food App where user can search for recipes of desired food and can check the recipe of a day .",
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },

  {
    id: 6,
    image: img7,
    demo: "https://639611f7db86393a88898cea--cute-biscochitos-04ad11.netlify.app/",
    liveLink:"https://639611f7db86393a88898cea--cute-biscochitos-04ad11.netlify.app/",
    github: "https://github.com/Tarun03022407/todoapp",
    title: "Todo App",
    desc: "This App helps you to create your Todos and set the priority of todo task as high or low .",
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 7,
    image: img2,
    demo: "https://stellular-pixie-fa32d0.netlify.app/",
    liveLink: "https://stellular-pixie-fa32d0.netlify.app/",
    github: "https://github.com/Tarun03022407/thundering-self-8895",
    title: " Natures Basket  ",
    desc: 'A clone website of Nature"s Basket is a large online supermarket and grocery store for all your everyday food needs .',
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 8,
    image: img9,
    demo: "https://inspiring-stroopwafel-34f89a.netlify.app/",
    liveLink: "https://inspiring-stroopwafel-34f89a.netlify.app/",
    github: "https://github.com/Tarun03022407/giphyApp",
    title: "Giphy",
    desc: "This website help you to find the gifs and stickers you searched for and get the trending gifs as well.",
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },
  {
    id: 9,
    image: img1,
    demo: "https://frolicking-marshmallow-d7eb57.netlify.app/",
    liveLink: "https://frolicking-marshmallow-d7eb57.netlify.app/",
    github: "https://github.com/Tarun03022407/hotstar",
    title: "Disney Hotstar",
    desc: "This website is inspired by Disney+Hotstar App where user can search for the movies and check which movie is trending .",
    tech1: "Html",
    tech2: "CSS",
    tech3: "JavaScript",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="projects container section">
      <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({
            id,
            github,
            image,
            liveLink,
            desc,
            demo,
            title,
            tech1,
            tech2,
            tech3,
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="youtubeIcon">
                    <a href={demo} target="_blank">
                      <VscLiveShare className="icon" />
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank">
                      <FiGithub className="icon" />
                    </a>
                  </div>
                </div>
                <div className="imgDiv">
                  <a href={liveLink} target="_blank">
                    <img src={image} alt="title" />
                  </a>
                </div>
                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>
                <div className="desc">{desc}</div>
                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
