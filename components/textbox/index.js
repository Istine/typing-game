import styled from "@emotion/styled";
import React from "react";
import { useWordContext } from "../../context/words";

const Input = styled.input((props) => ({
  width: "80%",
  outline: "none",
  border: "1px solid grey",
  padding: "1rem",
  boxSizing: "border-box",
  fontSize: "1rem",
}));

const Index = () => {
  const [words, setWords] = useWordContext();

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [text, setText] = React.useState("");

  const correctStyle = {
    color: "limegreen",
  };

  const incorrectStyle = {
    color: "red",
    textDecoration: "underline",
  };

  const handleChange = (e) => {
    const { value } = e.target;

    if (!!value) {
      const inputArray = value.split(" ");
      const len = inputArray.length;
      for (let i = currentIndex; i < len; i++) {
        const inputWordComplete =
          inputArray[i].split("").length === words[i][1].split("").length;
        const areWordsEqual = inputArray[i] === words[i][1];
        const key = words[i][0];
        if (inputWordComplete) {
          setWords((prev) => {
            const data = prev.map(([k, v, style = {}]) =>
              k === key
                ? [k, v, areWordsEqual ? correctStyle : incorrectStyle]
                : [k, v, style]
            );
            return [...data];
          });
          setCurrentIndex(i);
        }
      }
    }

    setText(value);
  };

  return <Input onChange={handleChange} value={text} />;
};

export default Index;
