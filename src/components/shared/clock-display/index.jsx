import React from "react";
import {format} from 'date-fns'

const ClockDisplay = ({ date, title, timezone, offset }) => {
    let localOffsetHr = (offet / 60);
  return (
    <>
      <h1>Title: {title}</h1>
      <h3>{format(date, "yyy-MM-dd hh:mm:ss aaaaa'm'")}</h3>
      <p>
        {timezone}{localOffsetHr < 0 ? `+${Math.abs(localOffsetHr)}` : `-${Math.abs(localOffsetHr)}`}
      </p>
    </>
  );
};

export default ClockDisplay;
