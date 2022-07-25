import { createContext, useContext, useState } from "react";

const TextContext = createContext([]);

const Context = (props) => {
  const [text, dispatch] = useState("");

  return (
    <TextContext.Provider value={[text, dispatch]}>
      {props.children}
    </TextContext.Provider>
  );
};

export const useTextContext = () => {
  const [text, dispatch] = useContext(TextContext);

  return [text, dispatch];
};

export default Context;
