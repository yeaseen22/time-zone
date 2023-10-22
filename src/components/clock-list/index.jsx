import React from "react";
import ClockListItem from "./clock-list-item";

//showing clock in list
const ClockList = ({ clocks, updateClock, deleteClcok, localClock }) => {
  return (
    <div>
      <h3>Other Clock</h3>
      <hr />
      {clocks.length === 0 ? (
        <p>There is no clock</p>
      ) : (
        <div>
          {clocks.map((clock) => (
            <ClockListItem
              key={clock.id}
              clock={clock}
              updateClock={updateClock}
              deleteClcok={deleteClcok}
              localClock={localClock}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClockList;
