import React from "react";
import "./works.css";
import portFolio1 from "../../assets/portfolio-1.png";
import portFolio2 from "../../assets/portfolio-2.png";
import portFolio3 from "../../assets/portfolio-3.png";
import portFolio4 from "../../assets/portfolio-4.png";
import portFolio5 from "../../assets/portfolio-5.png";
import portFolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        officiis a nam, sequi eos sunt in nostrum? Iste aliquam neque fugit
        cupiditate, dolorum repudiandae accusantium accusamus minus voluptatibus
        itaque temporibus!Lorem Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Velit, explicabo praesentium beatae facere similique
        illum possimus repellat recusandae dignissimos ducimus a soluta iure
        voluptates quidem, repellendus facilis eligendi earum nesciunt!
      </span>
      <div className="worksImgs">
        <img src={portFolio1} alt="" className="worksImg" />
        <img src={portFolio2} alt="" className="worksImg" />
        <img src={portFolio3} alt="" className="worksImg" />
        <img src={portFolio4} alt="" className="worksImg" />
        <img src={portFolio5} alt="" className="worksImg" />
        <img src={portFolio6} alt="" className="worksImg" />
      </div>
    </section>
  );
};

export default Works;
