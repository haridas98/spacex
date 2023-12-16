import React from "react";
import "./home.scss";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <section className="main ">
      <img
        className="back position-absolute vw-100"
        style={{ zIndex: "-2", left: "0", top: "0" }}
        src="./img/фон.png"
        alt=""
      />
      <div className="container">
        <div className="start-content">
          <div className="start-title">
            <h1>Путешествие</h1>
            <p>на красную планету</p>
          </div>
          <div className="start-button">
            <div className="container-button">
              <Button>Начать путешествие</Button>
            </div>
          </div>
        </div>
        <div className="adv-content">
          <div className="adv">
            <div className="adv-item item-1">
              <p>мы</p>
              <h1>1</h1>
              <p>на рынке</p>
            </div>
            <div className="adv-item item-2">
              <p>гарантируем</p>
              <h1>50%</h1>
              <p>безопасность</p>
            </div>
            <div className="adv-item item-3">
              <p>календарик за</p>
              <h1>
                2001<span style={{ fontSize: "20px" }}>г.</span>
              </h1>
              <p>в подарок</p>
            </div>
            <div className="adv-item item-4">
              <p>путешествие</p>
              <h1>597</h1>
              <p>дней</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
