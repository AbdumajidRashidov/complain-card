import "../style/Compliant.scss";
import downArrow from "../../../assets/icons/down-arrow.svg";

const OveralScore = () => {
  const status = [
    {
      label: "Compliant",
      value: 100,
    },
    {
      label: "Doubtful",
      value: 5,
    },
    {
      label: "Doubtful",
      value: 15,
    },
  ];
  return (
    <>
      <div className="compliant-card" style={{ paddingTop: "30px" }}>
        <div className="compliant-card__header">
          <h2 className="title" style={{ marginBottom: "45px" }}>
            OVERALL SCORE
          </h2>
        </div>
        <div className="compliant-card__main">
          <div className="score-top">
            <h3 className="score">7.7 / 10.0</h3>
            <span>
              <p>
                Reliable <span>94%</span>
                <img src={downArrow} alt="down arrow" />
              </p>
            </span>
          </div>

          <div className="progress-bar">
            <div className="progress-bar__status">
              <div
                className="progress-bar__status--compliant"
                style={{
                  width: `${status[0].value}%`,
                  borderRadius: "3.2px",
                }}></div>
            </div>
          </div>

          <div className="results">
            <ul className="results__list">
              <li className="results__list__item">
                <p>Financial strength</p>
                <div className="results__bar">
                  <span>9</span>
                  <div className="bar">
                    <div style={{ width: "90%", background: "#006B3D" }}></div>
                  </div>
                </div>
              </li>
              <li className="results__list__item">
                <p>Profitability</p>
                <div className="results__bar">
                  <span>10</span>
                  <div className="bar">
                    <div style={{ width: "100%", background: "#006B3D" }}></div>
                  </div>
                </div>
              </li>
              <li className="results__list__item">
                <p>Effectiveness</p>
                <div className="results__bar">
                  <span>10</span>
                  <div className="bar">
                    <div style={{ width: "100%", background: "#006B3D" }}></div>
                  </div>
                </div>
              </li>
              <li className="results__list__item">
                <p>Growth</p>
                <div className="results__bar">
                  <span style={{ color: "#3CDA73" }}>7</span>
                  <div className="bar">
                    <div style={{ width: "70%", background: "#3CDA73" }}></div>
                  </div>
                </div>
              </li>
              <li className="results__list__item">
                <p>Forecast</p>
                <div className="results__bar">
                  <span style={{ color: "#FFCA2D" }}>5</span>
                  <div className="bar">
                    <div style={{ width: "50%", background: "#FFCA2D" }}></div>
                  </div>
                </div>
              </li>
              <li className="results__list__item">
                <p>Valuation</p>
                <div className="results__bar">
                  <span style={{ color: "#3CDA73" }}>7</span>
                  <div className="bar">
                    <div style={{ width: "70%", background: "#3CDA73" }}></div>
                  </div>
                </div>
              </li>
              <li className="results__list__item">
                <p>Dividend</p>
                <div className="results__bar">
                  <span style={{ color: "#3CDA73" }}>8</span>
                  <div className="bar">
                    <div style={{ width: "80%", background: "#3CDA73" }}></div>
                  </div>
                </div>
              </li>
              <li className="results__list__item">
                <p>Economic moat</p>
                <div className="results__bar">
                  <span style={{ color: "#FFCA2D" }}>6</span>
                  <div className="bar">
                    <div style={{ width: "60%", background: "#FFCA2D" }}></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OveralScore;
