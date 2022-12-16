import "../style/Compliant.scss";

const CompliantCard = () => {
  const status = [
    {
      label: "Compliant",
      value: 80,
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
      <div className="compliant-card">
        <div className="compliant-card__header">
          <h2 className="title">SHARIAH COMPLIANCE STATUS: Compliant</h2>
        </div>
        <div className="compliant-card__main">
          <h3 className="heading">Business screening</h3>
          <p className="subtitle">Revenue ratio</p>
          <div className="progress-bar">
            <div className="progress-bar__status">
              <div
                className="progress-bar__status--compliant"
                style={{ width: `${status[0].value}%` }}></div>
              <div
                className="progress-bar__status--doubtful"
                style={{ width: `${status[1].value}%` }}></div>
              <div
                className="progress-bar__status--non-compliant"
                style={{ width: `${status[2].value}%` }}></div>
            </div>
            <div className="progress-bar__info">
              <div className="progress-bar__info--compliant">
                <div className="border"></div>
                <div>
                  <p>Compliant</p>
                  <span>{`${status[0].value}%`}</span>
                </div>
              </div>
              <div className="progress-bar__info--doubtful">
                <div className="border"></div>
                <div>
                  <p>Doubtful</p>
                  <span>{`${status[1].value}%`}</span>
                </div>
              </div>
              <div className="progress-bar__info--non-compliant">
                <div className="border"></div>
                <div>
                  <p>Non-compliant</p>
                  <span>{`${status[2].value}%`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="business-screening">
            <h3>Business screening</h3>
            <hr />
            <div className="business-screening__item">
              <p>Prohibited funding ratio </p>
              <div className="wrapper">
                <span>11.2%</span>
                <div className="bar">
                  <div></div>
                </div>
              </div>
            </div>
            <div className="business-screening__item">
              <p>Prohibited assets ratio</p>
              <div className="wrapper">
                <span>5.0%</span>
                <div className="bar">
                  <div style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="compliant-card__footer">
          <div className="additional-screening">
            <h3>Additional screening</h3>
            <ul className="additional-screening__list">
              <li className="additional-screening__list__item high">
                <p className="text">Interest expense / Total income</p>
                <span className="persent">64.0%</span>
              </li>
              <li className="additional-screening__list__item low">
                <p className="text">Prohibited funding / Total assets</p>
                <span className="persent">33.43%</span>
              </li>
              <li className="additional-screening__list__item low">
                <p className="text">Prohibited assets / Total assets</p>
                <span className="persent">13.06%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompliantCard;
