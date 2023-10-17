import React from "react";
import "./skills.css";
import UIdesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi voluptas
        inventore similique odio molestias doloremque aut culpa consequuntur rem
        nesciunt error iste maxime id voluptatem, rerum dolorum consequatur
        fugiat ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis, quisquam repudiandae eius temporibus iure laborum quam
        numquam obcaecati nobis expedita aliquam perferendis dignissimos
        reprehenderit! Quasi consequuntur culpa incidunt. Vel, neque?
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIdesign} alt="UIdesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>This is a demo text , you can write</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website design</h2>
            <p>This is a demo text ,making your is you can write</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App design</h2>
            <p>This is a demo text , you can write</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
