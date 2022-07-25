import React from "react";
import styled from "@emotion/styled";
import { useTimerContext } from "../../context/time";
import Loader from "../loader";

const StyledBody = styled.div((props) => ({
  width: "20rem",
  height: "100%",
  padding: "1rem 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}));

const StyledInput = styled.input((props) => ({
  width: "90%",
  alignSelf: "center",
  padding: ".5rem",
  outline: "none",
  boxSizing: "border-box",
}));

const Button = styled.button((props) => ({
  width: "calc(20rem / 4)",
  height: "10px",
  padding: "1rem",
  display: "flex",
  outline: "none",
  cursor: "pointer",
  border: "none",
  backgroundColor: "#05ad9d",
  justifyContent: "center",
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  alignItems: "center",
  fontWeight: "bold",
  color: "white",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#029688",
  },
  ...props.style,
}));

const Index = (props) => {
  const [, setTime] = useTimerContext();

  const [state, setState] = React.useState(0);

  const handleClick = (value) => (e) => {
    setState(+value);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setState(+value);
  };

  const close = (e) => {
    setTime(state);
    props.closeModal();
  };

  return (
    <StyledBody>
      <h3
        style={{
          margin: 0,
          textAlign: "center",
        }}
      >
        Pick a duration (mins)
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
        }}
      >
        <Button onClick={handleClick(1)}>1</Button>
        <Button onClick={handleClick(2)}>2</Button>
        <Button onClick={handleClick(5)}>5</Button>
      </div>
      <StyledInput type="number" value={state} onChange={handleChange} />
      <Button
        style={{
          width: "90%",
          alignSelf: "center",
          backgroundColor: state < 1 ? "#ccc" : "#05ad9d",
        }}
        onClick={close}
        disabled={state < 1}
      >
        Start Test
      </Button>
    </StyledBody>
  );
};

export default Index;
