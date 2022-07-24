import styled from "@emotion/styled";
import React from "react";

const StyledModal = styled.div((props) => ({
  width: "auto",
  minWidth: "20rem",
  position: "absolute",
  top: "30%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  transform: "translate(-50%)",
  padding: "2rem 0",
  zIndex: 999999,
  height: "15rem",
  backgroundColor: "#FFF",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  ...props.style,
}));

const Index = (props) => {
  React.useEffect(() => {}, []);

  return (
    props.open && (
      <>
        <div onClick={props.fn} className="shadow"></div>
        <StyledModal>{props.children}</StyledModal>
      </>
    )
  );
};

export default Index;
