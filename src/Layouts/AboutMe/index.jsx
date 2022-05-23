import React from "react";
import "./styles.css";
import me from "../../assets/me.svg";
import Footer from "../Footer";

function AboutMe() {
  return (
    <div className="bg-primary about-container">
      <div className="about-wrapper">
        <div className="headding">
          <h3 className="text-light">About Me</h3>
        </div>
        <div className="me-icon">
          <img className="me" src={me} alt="me" />
        </div>
        <div className="about-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ut
            aut in amet distinctio cumque incidunt voluptatibus voluptates,
            numquam repellat accusantium, fugit obcaecati natus libero enim
            dolorum eum provident culpa? Odit nulla veniam quod quas iste
            ducimus commodi.architecto, quam blanditiis quaerat rem quia facilis
            aperiam corrupti et earum consequatur soluta accusamus!.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quam
            unde sed, ea nobis optio dignissimos omnis quaerat nostrum ratione
            eos voluptatem? Consequuntur, harum. Totam eius sapiente magni ipsum
            numquam? Deserunt ratione culpa eligendi, impedit quo laudantium
            debitis quasi, ducimus in rerum quia magnam! Cumque dolorum,
            architecto, quam blanditiis quaerat rem quia facilis aperiam
            corrupti et earum consequatur soluta accusamus! adipisicing elit.
            Beatae ut aut in amet distinctio cumque incidunt voluptatibus
            voluptates, numquam repellat accusantium, fugit obcaecati natus
            libero enim
          </p>
        </div>
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
