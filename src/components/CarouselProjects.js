import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { projects } from "../data/data";

const CarouselProject = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="projects_container" id="projects">
      <h2>Mes Projets</h2>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
      >
        {projects.map((slide) => {
          return (
            <Carousel.Item className="carousel_content" key={slide.img}>
              <div className="img_container">
                <img
                  className="d-block w-100 carousel_img"
                  src={slide.img}
                  alt={slide.description}
                />
              </div>
              <Carousel.Caption className="carousel_caption">
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default CarouselProject;
