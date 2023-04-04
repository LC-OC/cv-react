import React from "react";
import Formation from "./Formation";
import ExpPro from "./ExpPro";

const FormationAndExpPro = () => {
  return (
    <section className="formation_exppro_container" id="experiences">
      <h2 className="title">Formations et Expériences Professionnelles</h2>
      <div className="accordion" id="accordionExample">
        <Formation />
        <ExpPro />
      </div>
    </section>
  );
};

export default FormationAndExpPro;
