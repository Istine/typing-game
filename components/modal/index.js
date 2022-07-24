import styled from "@emotion/styled";
import React from "react";

const StyledModal = styled.div((props) => ({
  width: "auto",
  minWidth: "20rem",
  position: "absolute",
  top: "30%",
  left: "50%",
  display: "grid",
  transform: "translate(-50%)",
  justifyItems: "center",
  padding: "2rem 0",
  margin: "auto",
  minHeight: "10rem",
  backgroundColor: "#FFF",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  ...props.style,
}));

const StyledButton = styled.button((props) => ({
  width: "80%",
  padding: ".5rem",
  border: "none",
  boxSizing: "border-box",
  outline: "none",
  fontWeight: "700",
  backgroundColor: "#04d1bd",
  color: "#085e56",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#09edd8",
  },
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  ...props.style,
}));

const P = styled.p((props) => ({
  boxSizing: "border-box",
  width: "80%",
  fontFamily: "Arial",
  fontSize: "14px",
  height: "auto",
  ...props.style,
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: "linear-gradient(to bottom, rgba(255,0,0,0), #FFF);",
    bottom: 0,
    left: 0,
  },
}));

const Index = (props) => {
  React.useEffect(() => {}, []);

  return (
    props.open && (
      <StyledModal>
        <P>{props.message}</P>
        <StyledButton onClick={props.pasteFn}>{props.action}</StyledButton>
      </StyledModal>
    )
  );
};

export default Index;
