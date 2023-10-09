import { useState } from "react";
import { generate } from "shortid";
import ClockList from "./components/clock-list";
import LocalClock from "./components/local-clock";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const App = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  // local clock function
  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  // updating clock function
  const updateClock = (updatedClock) => {
    const updatedClock = clocks.map((clock) => {
      if (clock.id === updatedClock.id) return updatedClock;
      return clock;
    });
    setClocks(updatedClock);
  };

  // function create new clock using object
  const createClock = (clock) => {
    clock.id = generate();
    setClocks([...clocks, clock]);
  };

  const deleteClock = (id) => {
    const updateClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updateClocks);
  };

  return (
    <div>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createClock}
      />
      <ClockList
        localClock={localClock.date}
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default App;
