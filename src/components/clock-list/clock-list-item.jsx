
import {formatDistance, addSeconds} from 'date-fns'
import ClockDisplay from "../shared/clock-display/index";
import useClock from "../../hooks/useClock";
import ClockAction from "../shared/clock-action/index";
import { useEffect } from 'react';
import { useState } from 'react';

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);
  const [ timer, setTimer] = useState(null)

  // check is there is any data
  
  useEffect(() => {
    setTimer(date)
  },[date])

  let timerId = null;
  
  useEffect(() => {
    if(timer || timerId !== null) return 
    timerId = setInterval(() => {
      setTimer(addSeconds(timer, 1))
    }, 1000)
    
    
    return clearInterval(timerId)
  },[timer])
  
  if (!date || !timer) return null;

  return (
    <div>
      <ClockDisplay
        date={timer}
        title={clock.title}
        timezone={clock.timezone}
        offset={clock.offset}
      />

      <ClockAction
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default ClockListItem;
