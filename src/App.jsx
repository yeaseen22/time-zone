import React, { useState } from "react";
import LocalClock from "./components/local-clock";
import ClockList from "./components/clock-list";
import useClock from "./hooks/useClock";

function App() {
  const { date: localDate, localTimezone, localoffset } = useClock();
  return (
    <div>
      {localDate !== null && (
        <LocalClock
          date={localDate}
          timezone={localTimezone}
          offset={localoffset}
        />
      )}
      <ClockList />
    </div>
  );
}

export default App;
