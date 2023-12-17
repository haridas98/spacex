import React from "react";
import "./home.scss";
import { Button } from "react-bootstrap";

const Home = ({ advList }) => {
  return (
    <div className="main ">
      <img
        className="back position-absolute vw-100"
        src="./img/фон.png"
        alt=""
      />
      <div className="container ">
        <div className="start-content">
          <div className="start-title">
            <h1>Путешествие</h1>
            <p>на красную планету</p>
          </div>
          <div className="start-button">
            <div className="container-button">
              <button type="button" data-bs-toggle="button">
                Начать путешествие
              </button>
            </div>
          </div>
        </div>
        <div className="adv-content">
          <div className="adv">
            {advList.map((adv, id) => (
              <div key={id} className={`adv-item item-${id + 1}`}>
                <p>{adv.text1}</p>
                <h1>{adv.number}</h1>
                <p>{adv.text2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
