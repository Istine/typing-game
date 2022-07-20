import styled from "@emotion/styled";

const StyledLetter = styled.span((props) => ({
  fontSize: "auto",
  width: "auto",
  height: "auto",
}));

const Letter = (props) => {
  return <StyledLetter>{props.letter}</StyledLetter>;
};

export default Letter;
