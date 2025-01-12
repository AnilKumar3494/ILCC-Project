import HistoryTimeLine from "@/components/HistoryTimeLine";
import React from "react";

const History = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        gap: "var(--section-gaps)",
        paddingInline: "8rem",
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

          filter: "blur(2px)",
          zIndex: -1 /* Places the background behind the content */,
        }}
      ></div>

      <h1>History</h1>
      <HistoryTimeLine />
    </main>
  );
};

export default History;
