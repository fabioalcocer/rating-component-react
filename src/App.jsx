import "./App.css";
import { useRef, useState } from "react";
import ModalAOS from "./components/ModalAOS";
import Header from "./components/Header";

function App() {
  const [rating, setRating] = useState("");
  const modalRef = useRef(null);
  const ratingRef = useRef(null);

  const handleClick = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AOS.init();
    modalRef.current.style.border = "1px solid var(--primary-color)";
    ratingRef.current.style.display = "none"
  };

  return (
    <div className="App">
      <main className="container" ref={ratingRef}>
        <Header />
        <form onSubmit={handleSubmit} className="card__form">
          <div className="card__rating-container">
            <label htmlFor="rating-1">
              <input
                onClick={handleClick}
                className="card__rating"
                type="button"
                name="rating"
                value="1"
              />
            </label>
            <label htmlFor="rating-2">
              <input
                onClick={handleClick}
                className="card__rating"
                type="button"
                name="rating"
                value="2"
              />
            </label>
            <label htmlFor="rating-3">
              <input
                onClick={handleClick}
                className="card__rating"
                type="button"
                name="rating"
                value="3"
              />
            </label>
            <label htmlFor="rating-4">
              <input
                onClick={handleClick}
                className="card__rating"
                type="button"
                name="rating"
                value="4"
              />
            </label>
            <label htmlFor="rating-5">
              <input
                onClick={handleClick}
                className="card__rating"
                type="button"
                name="rating"
                value="5"
              />
            </label>
          </div>
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </form>
      </main>

      <ModalAOS rating={rating} modalRef={modalRef} />
    </div>
  );
}

export default App;
