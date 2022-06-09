import React from "react";
import star from "../assets/icon-star.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="container__img">
        <img src={star} className="star" />
      </div>
      <h2 className="container__title">How did we do?</h2>
      <p className="container__paragraph">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </>
  );
};

export default Header;
