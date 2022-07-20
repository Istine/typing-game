import styled from "@emotion/styled";
import Letter from "./Letter";
import { buildWithUniqueIds } from "../../utils";

const StyledWord = styled.div((props) => ({
  padding: ".5rem",
  display: "flex",
}));

const Word = (props) => {
  const Letters = buildWithUniqueIds(props.word, "letter").map(
    ([key, letter], idx) => {
      return <Letter key={key} letter={letter} />;
    }
  );

  return <StyledWord>{Letters}</StyledWord>;
};

export default Word;
