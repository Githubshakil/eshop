import React from "react";
import Container from "../commonlayout/Container";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Container>
        <div className="mt-8 mb-20">
          <Link to="/">
            <img src="images/banner.png" alt="banner" />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Banner;
