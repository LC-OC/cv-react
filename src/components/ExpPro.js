import React from "react";

const ExpPro = () => {
  return (
    <div className="accordion-item ">
      <h3 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Expériences Professionnelles
        </button>
      </h3>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body exppro-body">
          <h4>2016-2019</h4>
          <ul>
            <li>Conseillère en insertion professionnelle - AFPA</li>
            <li>Service Civique - Pôle Emploi</li>
            <li>Hôtesse de caisse - Super U</li>
            <li>Vendeuse en boulangerie/pâtisserie/chocolaterie</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpPro;
