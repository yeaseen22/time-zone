import React, { useState } from "react";
import LocalClock from "./components/local-clock";
import ClockDisplay from "./components/shared/clock-display";
import ClockList from './components/clock-list/index'
import useClock from "./hooks/useClock";

function App() {
  const { date: localDate, localTimezone, localoffset } = useClock();
  const {date: india, offset, timezone} = useClock('GMT', 5*60);
  return (
    <div>
      {localDate !== null && (
        <LocalClock
        
          date={localDate}
          timezone={localTimezone}
          offset={localoffset}
        />
      )}
      {localDate !== null && (
        <LocalClock
          title={'india'}
          date={india}
          timezone={timezone}
          offset={offset}
        />
      )}
      <ClockList />
    </div>
  );
}

export default App;
