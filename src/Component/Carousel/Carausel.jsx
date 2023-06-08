import React from "react";
import { Carousel } from "react-bootstrap";

const Carausel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://executive-education.id/wp-content/uploads/2022/01/biaya-les-privat-sd-smp-sma-2.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://executive-education.id/wp-content/uploads/2022/01/les-privat-sd-smp-sma-semua-mapel-2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://executive-education.id/wp-content/uploads/2022/01/les-privat-sd-smp-sma-4.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carausel;
