import React from "react";
import styled from "@emotion/styled";
import Word from "./Word";
import TextBox from "../textbox";

import { buildWithUniqueIds } from "../../utils";
import { useWordContext } from "../../context/words";

const Paragraph = styled.div((props) => ({
  width: "80%",
  padding: "1rem",
  display: "flex",
  flexWrap: "wrap",
  fontFamily: "Arial",
  lineHeight: ".5rem",
}));

const Wrapper = styled.div((props) => ({
  width: "100%",
  position: "relative",
  height: "auto",
  display: "grid",
  justifyItems: "center",
}));

const Index = (props) => {
  const [splitWords, setWords] = useWordContext();

  const Words = splitWords.map(([key, word, style = {}]) => {
    return <Word key={key} word={word} style={style} />;
  });

  React.useEffect(() => {
    const effect = () => {
      const words = buildWithUniqueIds(props.randomParagraph);
      setWords(words);
    };
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.randomParagraph]);

  return (
    <Wrapper>
      <Paragraph>{Words}</Paragraph>
      <TextBox />
    </Wrapper>
  );
};

export default React.memo(Index);
