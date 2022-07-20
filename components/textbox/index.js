import styled from "@emotion/styled";

const Input = styled.input((props) => ({
  width: "80%",
  outline: "none",
  border: "1px solid grey",
  padding: "1rem",
  boxSizing: "border-box",
  fontSize: "1rem",
}));

const Index = () => {
  return <Input />;
};

export default Index;
