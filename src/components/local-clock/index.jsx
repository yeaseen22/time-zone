import React, { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-action";
import ClockDisplay from "../shared/clock-display";
import userTimer from "../../hooks/useTimer";

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, offset, timezone } = useClock(clock.timezone, clock.offset);
  const timer = userTimer(date);

  // handling update clock useEffect
  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date]);

  return (
    <div>
      {timer && (
        <ClockDisplay
          date={timer}
          offset={offset}
          timezone={timezone}
          title={clock.title}
        />
      )}
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        local={true}
        createClock={createClock}
      />
    </div>
  );
};

export default LocalClock;
