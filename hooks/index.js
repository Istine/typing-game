import React from "react";
import { useTimerContext } from "../context/time";

const getReturnValues = (countDown) => {
  // calculate time left
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [minutes, seconds];
};

const useTimer = () => {
  const [time] = useTimerContext();

  const [target, setTarget] = React.useState(
    new Date(Date.now() + time * 1000 * 60).getTime()
  );

  const [countDown, setCountDown] = React.useState(
    target - new Date().getTime()
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(target - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countDown]);

  React.useEffect(() => {
    setTarget(new Date(Date.now() + time * 1000 * 60).getTime());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return getReturnValues(countDown);
};

export { useTimer };
