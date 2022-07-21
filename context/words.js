import { createContext, useContext, useState } from "react";

const WordContext = createContext([]);

const Context = (props) => {
  const [words, dispatch] = useState([]);

  return (
    <WordContext.Provider value={[words, dispatch]}>
      {props.children}
    </WordContext.Provider>
  );
};

export const useWordContext = () => {
  const [words, setWords] = useContext(WordContext);
  function dispatch(words) {
    setWords(words);
  }

  return [words, dispatch];
};

export default Context;
