import HistoryTimeLine from "@/components/HistoryTimeLine";
import React from "react";

const imgURL =
  "https://as2.ftcdn.net/v2/jpg/08/73/67/67/1000_F_873676710_1dcMwLy3JExBdHCd7MXQP4ccOZkJF1or.jpg";
const History = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        gap: "var(--section-gaps)",
      }}
    >
      {/* Backdrop element */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imgURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px)",
          zIndex: -1 /* Places the background behind the content */,
        }}
      ></div>

      <h3>History</h3>
      <HistoryTimeLine />
    </section>
  );
};

export default History;
