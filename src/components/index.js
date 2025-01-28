import React from "react";
import Header from "./header";
import Footer from "./footer";
import Carousel from "./Carousel";
import "./index.css";
import StatsSection from './StatsSection';

const IndexPage = () => {
  const initiatives = [
    {
      title: "IGNITING CURIOSITY",
      description: "We provide science kits to underprivileged schools through crowdfunding, fostering hands-on learning experiences.",
      icon: "💡",
    },
    {
      title: "FOSTERING PASSION",
      description: "We aim to create an environment that fosters a sustained interest, encouraging students to explore and nurture their passion for STEM.",
      icon: "🧩",
    },
    {
      title: "FUELING WONDER",
      description: "Through this, we aim to bridge the gap between curiosity and opportunity for children between the grades of 1-4.",
      icon: "🧠",
    }
  ];

  return (
    <div>
      <Header />
      <Carousel />
      <div className="education-section">
        <div className="initiatives-grid">
          {initiatives.map((initiative, index) => (
            <div key={index} className="initiative-card">
              <div className="icon-container">
                <span className="initiative-icon">{initiative.icon}</span>
              </div>
              <h2 className="initiative-title">{initiative.title}</h2>
              <p className="initiative-description">{initiative.description}</p>
            </div>
          ))}
        </div>
        
      </div>
      <StatsSection />
      <main>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;