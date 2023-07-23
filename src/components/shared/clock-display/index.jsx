import React from "react";

const ClockDisplay = ({ date, title, timezone, offset }) => {
    let localOffsetHr = (offet / 60);
  return (
    <>
      <h1>Title: {title}</h1>
      <h3>{date.toString()}</h3>
      <p>
        {timezone}{localOffsetHr < 0 ? `+${Math.abs(localOffsetHr)}` : `-${Math.abs(localOffsetHr)}`}
      </p>
    </>
  );
};

export default ClockDisplay;
