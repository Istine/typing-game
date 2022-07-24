import styled from "@emotion/styled";

const Index = (props) => {
  return (
    <div
      style={{ width: "80px", height: "80px", ...props.style }}
      className="lds-roller"
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Index;
