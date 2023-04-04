import React from "react";
import { competencesListing } from "../data/data";

const Competences = () => {
  return (
    <div className="competences">
      <h2>Mes Compétences</h2>
      <ul>
        {competencesListing.map((competence) => {
          return <li key={competence.name}>{competence.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Competences;
