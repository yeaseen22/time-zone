
import {formatDistance} from 'date-fns'
import ClockDisplay from "../shared/clock-display/index";
import useClock from "../../hooks/useClock";
import ClockAction from "../shared/clock-action/index";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);

  // check is there is any data
  if (!date) return null;

  return (
    <div>
      <ClockDisplay
        date={date}
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
