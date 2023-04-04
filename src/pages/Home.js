import React, { useState, useEffect } from "react";
import CarouselProject from "../components/CarouselProjects";
import Competences from "../components/Competences";
import FormationAndExpPro from "../components/FormationAndExpPro";
import Header from "../components/Header";
import InfosAndContact from "../components/InfosAndContact";
import Languages from "../components/Languages";
import Loisirs from "../components/Loisirs";
import NameTitle from "../components/NameTitle";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import computer_illustration from "../assets/computer_illustration.svg";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );
  return (
    <div>
      <Header />
      <section className="name-dev">
        <NameTitle />
      </section>
      <section className="container-infos-contact">
        <InfosAndContact />
        <a href="https://storyset.com/user">
          <img src={computer_illustration} alt="" />
        </a>
      </section>
      <section className="container-informatique" id="informatique">
        <Languages />
      </section>
      <section className="container-competences" id="competences">
        <Competences />
      </section>
      <CarouselProject />
      <FormationAndExpPro />
      <Loisirs />
      <Footer />
    </div>
  );
};

export default Home;
