import styled from "@emotion/styled";
import React from "react";
import { usePointContext } from "../../context/points";
import { useWordContext } from "../../context/words";
import { buildTypedWords } from "../../utils";
import { useTextContext } from "../../context/text";
import { useTimerContext } from "../../context/time";

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

const Index = ({ seconds, minutes }) => {
  const [time] = useTimerContext();
  const [storedWords, setWords] = useWordContext();
  const [, setPoints] = usePointContext();

  const [currentIndex, setCurrentIndex] = React.useState(-1);

  const [text, setText] = useTextContext();

  const correctStyle = {
    color: "limegreen",
  };

  const isElapsed = Boolean(time) && minutes <= 0 && seconds <= 0;

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
      storedWords
    );
    setText(value);
  };

  return (
    <>
      <Input
        onKeyDown={(e) => e.key === "Backspace" && e.preventDefault()}
        onChange={handleChange}
        value={text}
        disabled={!time || isElapsed}
        placeholder="set time to enable typing"
      />
    </>
  );
};

export default Index;
