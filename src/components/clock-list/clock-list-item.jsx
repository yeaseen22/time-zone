import ClockDisplay from "../shared/clock-display/index";
import useClock from "../../hooks/useClock";
import ClockAction from "../shared/clock-action/index";
import userTimer from "../../hooks/useTimer";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);
  const timer = userTimer();

  if (!date || !timer) return null;

  return (
    <div>
      <ClockDisplay
        date={timer}
        offset={clock.offset}
        timezone={clock.timezone}
        title={clock.title}
      />

      <h3>Time difference: {formatDistance(localClock, timer)}</h3>
      <ClockAction
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default ClockListItem;
