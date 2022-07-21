import React from "react";
import styled from "@emotion/styled";
import Letter from "./Letter";
import { buildWithUniqueIds } from "../../utils";

const StyledWord = styled.div((props) => ({
  padding: ".5rem",
  display: "flex",
  ...props.style,
}));

const Word = (props) => {
  const Letters = buildWithUniqueIds(props.word, "letter").map(
    ([key, letter]) => {
      return <Letter key={key} letter={letter} />;
    }
  );

  return <StyledWord style={props.style}>{Letters}</StyledWord>;
};

export default React.memo(Word);
