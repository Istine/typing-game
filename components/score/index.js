import styled from "@emotion/styled";
import { useTextContext } from "../../context/text";

const StyledComp = styled.div((props) => ({
  width: "auto",
  height: "auto",
  display: "flex",
}));

const StyledSpan = styled.span((props) => ({
  fontSize: "1rem",
  margin: "0 1rem",
  fontFamily: "Arial",
  textTransform: "capitalize",
}));

const getAccuracyAndSpace = (time, text, paras) => {
  const numberOfLettersTyped = text.split("").length;
  const numberOfOriginalLetters = paras.split("").length;
  const accuracy = (
    (numberOfLettersTyped / numberOfOriginalLetters) *
    100
  ).toFixed(2);

  const speed = (numberOfLettersTyped / 5 / time).toFixed(1);

  return [speed, accuracy];
};

const Index = (props) => {
  const [text] = useTextContext();

  const [speed, accuracy] = getAccuracyAndSpace(props.time, text, props.paras);

  return (
    <StyledComp>
      <StyledSpan>speed: {speed} WPM</StyledSpan>
      <StyledSpan>accuracy: {accuracy}%</StyledSpan>
    </StyledComp>
  );
};

export default Index;
