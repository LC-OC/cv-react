import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import blue_404_illu from "../assets/blue_404_illu.png";

const Error404 = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="background-error-page">
      <section className="error_message">
        <img src={blue_404_illu} alt="Illustration Lost in Wonderland" />
        <h1>Oh non... Il n'y a rien ici !</h1>
        <p>
          Peut-être que vous êtes perdus. Ou peut-être que quelque chose a mangé
          la page. Mieux vaut aller voir ailleurs si ça marche !
        </p>
        <Link
          to={{
            pathname: `/lc-cv`,
          }}
        >
          <button className="button-30">Ramenez moi au CV</button>
        </Link>
      </section>
    </div>
  );
};

export default Error404;
