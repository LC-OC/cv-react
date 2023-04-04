import React from "react";
import { loisirs } from "../data/data";

const Loisirs = () => {
  return (
    <section className="loisirs_container">
      <h2 id="loisirs">Mes Loisirs</h2>
      <div className="loisirs">
        {loisirs.map((loisir) => {
          return (
            <div className="loisirs-card" key={loisir.name}>
              <div className="content">
                <p className="title">{loisir.name}</p>
                <p className="detail">{loisir.details}</p>
              </div>
              <img src={loisir.img} alt="loisirs-cover" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Loisirs;
