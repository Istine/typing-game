import { createContext, useContext, useState } from "react";

const TimerContext = createContext([]);

const Context = (props) => {
  const [time, dispatch] = useState(null);

  return (
    <TimerContext.Provider value={[time, dispatch]}>
      {props.children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const [time, setTime] = useContext(TimerContext);
  function dispatch(time) {
    setTime(time);
  }

  return [time, dispatch];
};

export default Context;
