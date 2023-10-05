import React from "react";
import { format } from "date-fns";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  let localOffsetHr = offset / 60;
  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>{date.toLocalTimeString()}</h1>
      <p>
        {timezone}{" "}
        {localOffsetHr < 0
          ? `+${Math.abs(localOffsetHr)}`
          : `-${Math.abs(localOffsetHr)}`}
      </p>
    </div>
  );
};

export default ClockDisplay;
