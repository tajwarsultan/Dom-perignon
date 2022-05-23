import React from "react";
import "./styles.css";
import Footer from "../Footer";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import github from "../../assets/github.svg";
const cards = [
  { src: card1, name: "Surf Report", meran: "MERAN Stack" },
  { src: card2, name: "Surf Report", meran: "MERAN Stack" },
  { src: card3, name: "Surf Report", meran: "MERAN Stack" },
  { src: card1, name: "Surf Report", meran: "MERAN Stack" },
  { src: card2, name: "Surf Report", meran: "MERAN Stack" },
  { src: card3, name: "Surf Report", meran: "MERAN Stack" },
];

function Portfolio() {
  return (
    <div className="bg-primary portfolio-container">
      <div className="portfolio-wrapper">
        <div className="headding">
          <h3 className="text-light">Portfolio</h3>
        </div>
        <div class="flex-cards">
          {cards.map((card, i) => (
            <div className="flex2">
              <a href="">
                <div className="img">
                  <img src={card.src} alt="" />
                  <div className="overlay">
                    <div className="name-overlay">
                      <p>{card.name}</p>
                      <img src={github} alt="" />
                    </div>
                    <div className="meran">
                      <p>{card.meran}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="portfolio-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;
