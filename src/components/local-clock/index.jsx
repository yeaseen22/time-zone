import ClockDisplay from "../shared/clock-display";

const LocalClock = ({ data, timezone, offset }) => {
  return (
    <div>
      <ClockDisplay
        date={date}
        title={"My Clock"}
        timezone={timezone}
        offset={offset}
      />
    </div>
  );
};
export default LocalClock;
