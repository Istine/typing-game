import React from "react";
import styled from "@emotion/styled";
import Word from "./Word";
import TextBox from "../textbox";

import { buildWithUniqueIds } from "../../utils";

const Paragraph = styled.div((props) => ({
  width: "80%",
  padding: "1rem",
  display: "flex",
  flexWrap: "wrap",
  fontFamily: "Arial",
  lineHeight: ".5rem",
}));

const Wrapper = styled.p((props) => ({
  width: "100%",
  position: "relative",
  height: "auto",
  display: "grid",
  justifyItems: "center",
}));

const Index = (props) => {
  const [content, setContent] = React.useState("");

  const Words = buildWithUniqueIds(content).map(([key, word]) => {
    return <Word key={key} word={word} />;
  });

  React.useEffect(() => {
    setContent(props.randomParagraph);
    //copy function logic
  }, [content, props.randomParagraph]);

  return (
    <Wrapper>
      <Paragraph>{Words}</Paragraph>
      <TextBox />
    </Wrapper>
  );
};

export default Index;
