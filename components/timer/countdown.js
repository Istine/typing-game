import React from "react";
import styled from "@emotion/styled";
import { useTimerContext } from "../../context/time";

const StyledCountdown = styled.div((props) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
}));

const StyledSpan = styled.span((props) => ({
  fontSize: "2rem",
  color:
    props.minutes < 1 &&
    props.seconds > 1 &&
    !!props.contextTime &&
    props.contextTime !== 0
      ? "red"
      : "black",
  ...props.style,
}));

export default function Countdown(props) {
  const [time] = useTimerContext();

  return (
    <StyledCountdown>
      <StyledSpan>{props.minutes < 1 ? 0 : props.minutes}</StyledSpan>
      <StyledSpan>:</StyledSpan>
      <StyledSpan
        minutes={props.minutes}
        seconds={props.seconds}
        contextTime={time}
      >
        {props.seconds < 1 ? 0 : props.seconds}
      </StyledSpan>
    </StyledCountdown>
  );
}
