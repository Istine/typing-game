import React from "react";
import WordContext from "../context/words";
import PointsContext from "../context/points";
import TimerContext from "../context/time";
import TextContext from "../context/text";

export default function Index(props) {
  return (
    <TextContext>
      <TimerContext>
        <PointsContext>
          <WordContext>{props.children}</WordContext>
        </PointsContext>
      </TimerContext>
    </TextContext>
  );
}
