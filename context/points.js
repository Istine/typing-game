import { createContext, useContext, useState } from "react";

const PointsContext = createContext([]);

const Context = (props) => {
  const [points, dispatch] = useState(0);

  return (
    <PointsContext.Provider value={[points, dispatch]}>
      {props.children}
    </PointsContext.Provider>
  );
};

export const usePointContext = () => {
  const [points, setPoints] = useContext(PointsContext);
  function dispatch(points) {
    setPoints(points);
  }

  return [points, dispatch];
};

export default Context;
