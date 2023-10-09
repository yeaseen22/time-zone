import { useState } from "react";
import ClockForm from "../clock-form";

const defaultOffsets = [
  -11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,
];

const ClockActions = ({ local = false, clock, updateClock, createClock, deleteClock }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  // manage when user create clock
  const handleClock = (values) => {
    // console.log(values);
    createClock(values)
  };

  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create</button>
      ) : (
        <button onClick={() => deleteClock(clock.id)}>Delete</button>
      )}
      {isEdit && (
        <>
          <h3>Edit Clock</h3>
          <ClockForm
            values={clock}
            handleClock={updateClock}
            title={!local}
            edit={true}
          />
        </>
      )}
      {isCreate && (
        <>
          <h3>Create Clock</h3>
          <ClockForm handleClock={handleClock} />
        </>
      )}
    </div>
  );
};

export default ClockActions;
