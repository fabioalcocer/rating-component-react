import '../styles/ModalAOS.css'
import React from "react";
import thankImg from "../assets/illustration-thank-you.svg"

const ModalAOS = ({rating, modalRef}) => {
  return (
    <div className="animate-aos" data-aos="zoom-in-up">
      <div className="message-card" ref={modalRef}>
        <img src={thankImg} alt="" />
        <p className="message__rating">You selected {rating} of 5</p>
        <h2>Thank You!</h2>
        <p className="message__text">
          We appreaciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ModalAOS;
