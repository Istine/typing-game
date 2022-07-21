import React from "react";
import styled from "@emotion/styled";
import Word from "./Word";
import TextBox from "../textbox";
import Loader from "../loader";

import { buildWithUniqueIds } from "../../utils";
import { useWordContext } from "../../context/words";
import { usePointContext } from "../../context/points";

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
  minHeight: "40rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Index = (props) => {
  const [splitWords, setWords] = useWordContext();
  const [points] = usePointContext();

  const [isLoading, setLoading] = React.useState(true);

  const Words = splitWords.map(([key, word, style = {}]) => {
    return <Word key={key} word={word} style={style} />;
  });

  React.useEffect(() => {
    const effect = async () => {
      let TEXT = "";
      const clipBoardContent = await navigator.clipboard.readText();
      if (clipBoardContent) TEXT = clipBoardContent;
      else TEXT = props.randomParagraph;
      const words = buildWithUniqueIds(TEXT);
      setWords(words);
      setTimeout(() => setLoading(false), 4000);
    };
    effect().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.randomParagraph]);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Points</h1>
          <h1>{points}</h1>
          <Paragraph>{Words}</Paragraph>
          <TextBox />{" "}
        </>
      )}
    </Wrapper>
  );
};

export default React.memo(Index);
