import React from "react";
import "./historytimeline.css";
import historyJson from "../data/history.json";

/** @type {{ id: string, title: string, date: string, shortDesc: string }[]} */
const historyData = historyJson;

const HistoryTimeLine = () => {
  return (
    <div className="history-container">
      <div className="timeline-line"></div>
      <div className="timeline-line-2"></div>
      {historyData.map((historyInfo, index) => (
        <div
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          key={historyInfo.id}
        >
          <h3>{historyInfo.title}</h3>
          <p>{historyInfo.date}</p>
          <p>{historyInfo.shortDesc}</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryTimeLine;
