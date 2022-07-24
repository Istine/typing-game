import styled from "@emotion/styled";

const StyledTooltip = styled.div((props) => ({
  width: "auto",
  padding: ".5rem",
  fontSize: "14px",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  "&:hover span": {
    display: "block !important",
  },
}));

const StyledSpan = styled.span((prop) => ({
  position: "absolute",
  maxWidth: "200px",
  width: "100px",
  borderRadius: "5px",
  height: "auto",
  padding: ".3rem",
  display: "none",
  right: "-100px",
  textAlign: "center",
  color: "white",
  fontWeight: "700",
  backgroundColor: "#04d1bd",
  fontSize: "13px",
}));

const Index = (props) => {
  return (
    <StyledTooltip onClick={props.onClick}>
      {props.children}
      <StyledSpan>{props.text}</StyledSpan>
    </StyledTooltip>
  );
};

export default Index;
