import React from "react";
import styled from "@emotion/styled";
import Word from "./Word";
import TextBox from "../textbox";
import SideMenu from "../side-menu/index";
import Modal from "../modal";
import Timer from "../timer";
import Countdown from "../timer/countdown";
import ScoreCard from "../score";

import { buildWithUniqueIds } from "../../utils";
import { useWordContext } from "../../context/words";
import { usePointContext } from "../../context/points";
import { useTimerContext } from "../../context/time";
import { useTextContext } from "../../context/text";

import { useTimer } from "../../hooks";

const Paragraph = styled.div((props) => ({
  width: "100%",
  height: "15rem",
  maxHeight: "30rem",
  padding: "1rem",
  display: "flex",
  flexWrap: "wrap",
  fontFamily: "Arial",
  lineHeight: ".5rem",
  overflowY: "auto",
  background: `
		linear-gradient(#F0F0F0 0%, rgba(255,255,255,0)),
		linear-gradient(rgba(255,255,255,0), #F0F0F0 70%) 0 100%,
		radial-gradient(100% 0, farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)),
		radial-gradient(100% 100%,farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%`,
  background: `
		linear-gradient(#F0F0F0 0%, rgba(255,255,255,0)),
		linear-gradient(rgba(255,255,255,0), #F0F0F0 70%) 0 100%,
		
		radial-gradient(farthest-side at 100% 0, rgba(0,0,0,.2), rgba(0,0,0,0)),
		radial-gradient(farthest-side at 100% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%`,
  backgroundRepeat: "no-repeat",
  backgroundColor: "#F0F0F0",
  backgroundSize: "100% 40px, 100% 40px, 100% 14px, 100% 14px",
  backgroundAttachment: "local, local, scroll, scroll",
}));

const Wrapper = styled.div((props) => ({
  width: "100%",
  position: "relative",
  height: "40rem",
  display: "flex",
  justifyContent: "center",
}));

const Index = (props) => {
  const [splitWords, setWords] = useWordContext();
  const [points, setPoint] = usePointContext();
  const [time, setTime] = useTimerContext();
  const [, setText] = useTextContext();
  const [minutes, seconds] = useTimer();

  const [undo, setUndo] = React.useState(false);

  const [isOpen, setOpen] = React.useState(false);

  const isElapsed = Boolean(time) && minutes <= 0 && seconds <= 0;

  const handleModalOpening = (e) => {
    setOpen((prev) => !prev);
  };

  const pasteFromClipBoard = async () => {
    const clipBoardContent = await navigator.clipboard.readText();
    if (clipBoardContent) {
      const words = buildWithUniqueIds(clipBoardContent);
      setWords(words);
      setUndo(true);
    }
  };

  const handleUndo = React.useCallback(
    (e) => {
      const words = buildWithUniqueIds(props.randomParagraph);
      setWords(words);
      setUndo(false);
    },

    [props.randomParagraph, setWords]
  );

  const resetAll = (e) => {
    const words = buildWithUniqueIds(props.randomParagraph);
    setWords(words);
    setPoint(0);
    setTime(null);
    setText("");
  };

  const Words = splitWords.map(([key, word, style = {}]) => {
    return <Word key={key} word={word} style={style} />;
  });

  React.useEffect(() => {
    const effect = async () => {
      const words = buildWithUniqueIds(props.randomParagraph);
      setWords(words);
    };
    effect().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.randomParagraph]);

  return (
    <Wrapper>
      <Modal open={isOpen} fn={handleModalOpening} action="Cancel">
        <Timer closeModal={handleModalOpening} />
      </Modal>
      <SideMenu
        undo={undo}
        handleUndo={handleUndo}
        handlePaste={pasteFromClipBoard}
        resetAll={resetAll}
        setTime={handleModalOpening}
      />
      <div className="main-content">
        {isElapsed && <ScoreCard paras={props.randomParagraph} time={time} />}
        <Countdown minutes={minutes} seconds={seconds} />
        <h1 style={{ color: "#04d1bd", margin: ".7rem 0" }}>Points</h1>
        <h1 style={{ color: "#04d1bd", margin: ".7rem 0" }}>{points}</h1>
        <Paragraph>{Words}</Paragraph>
        <TextBox />
      </div>
    </Wrapper>
  );
};

export default Index;
