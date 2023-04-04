import React from "react";

const Formation = () => {
  return (
    <div className="accordion-item">
      <h3 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed  shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Formations
        </button>
      </h3>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="first-formation">
            <h4>2021-2023 OpenClassrooms</h4>
            <div className="first-formation-content">
              <p>Développeur d'application - JavaScript React</p>
              <ul>
                <li>Réalisation de 14 projets</li>
                <li>Diplôme de niveau 6 (bac +3/4)</li>
              </ul>
            </div>
          </div>
          <div className="second-formation">
            <h4>2020-2021 O'clock</h4>
            <p>Formation Développeur Web</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formation;
