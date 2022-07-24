import styled from "@emotion/styled";
import React from "react";
import { usePointContext } from "../../context/points";
import { useWordContext } from "../../context/words";
import { buildTypedWords } from "../../utils";

const Input = styled.textarea((props) => ({
  width: "100%",
  outline: "none",
  border: "1px solid #aaa",
  padding: ".5rem",
  borderRadius: "5px",
  minHeight: "10rem",
  boxSizing: "border-box",
  fontSize: ".9rem",
  resize: "none",
  fontFamily: "Arial",
  ...props.style,
}));

const Index = () => {
  const [storedWords, setWords] = useWordContext();
  const [, setPoints] = usePointContext();

  const [currentIndex, setCurrentIndex] = React.useState(-1);

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
    const words = storedWords.filter(([, v]) => v !== "_");

    buildTypedWords(
      value,
      currentIndex,
      setCurrentIndex,
      words,
      setPoints,
      setWords,
      correctStyle,
      incorrectStyle,
      storedWords
    );

    setText(value);
  };

  return (
    <>
      <Input
        onKeyUp={handleChange}
        onKeyDown={(e) => e.key === "Backspace" && e.preventDefault()}
        onChange={handleChange}
        value={text}
      />
    </>
  );
};

export default Index;
