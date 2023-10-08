import {} from "../constants/timezone";

export const getOffset = (start = -11.5, ending = 12) => {
  const offset = [];
  for (let i = start; i <= ending; i += 0.5) {
    offset.push(i);
  }
  return offset;
};

export const getTimeZone = () => {
  return {
    GMT: 0,
    UTC: 0,
    ...TIMEZONE_OFFSET,
  };
};
