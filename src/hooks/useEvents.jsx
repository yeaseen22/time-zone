import { useState } from "react";
import shortid from "shortid";

const useEvents = () => {
  const [state, setState] = useState({});

  const getEventsByClockId = (clockId, isArray = false) => {
   return Object.keys(state).filter((item) => item.startsWith(clockId));
    // if (!isArray) return event
    // return Object.values(event)
  };
  const getEvents = (isArray = false) => {
    if (!isArray) return state;
    return Object.values(state);
  };

  const addEvents = ({ event }) => {
    event.id = shortid.generate();
    setState((prev) => ({
      ...prev,
      [`${event.clockId}|${event.id}`]: event,
    }));

    return event
  };

  const deleteEvent = (id) => {
    const events = { ...state };
    delete events[id];
    setState(events);
  };

  const deleteEventById = (clockId) => {
    const events = Object.keys(state).filter(
      (item) => !item.startsWith(clockId)
    );

    setState(events);
  };

  const updateEvent = (updateEvent, id) => {
    const events = { ...state };
    events[id] = {
      ...events[id],
      ...updateEvent,
    };
    setState(events);
  };

  return {
    events: state,
    getEventsByClockId,
    getEvents,
    addEvents,
    deleteEvent,
    deleteEventById,
    updateEvent,
  };
};

export default useEvents;
