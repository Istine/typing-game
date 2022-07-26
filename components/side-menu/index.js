import styled from "@emotion/styled";
import { FaPaste, FaUndo, FaClock, FaPowerOff } from "react-icons/fa";
import Tooltip from "../tooltip";

const StyledMenu = styled.div((props) => ({
  width: "50px",
  height: "calc(100% - 3rem)",
  //   backgroundColor: "#04d1bd",
  display: "flex",
  alignItems: "center",
  padding: "1rem 0",
  flexDirection: "column",
  "& > *": {
    cursor: "pointer",
    margin: "1rem 0",
    color: "#FFF",

    "&:hover": {
      color: "#e6e6e6",
    },

    "&:last-child": {
      color: "red",
    },

    "&:last-child:hover": {
      color: "red",
    },
  },
}));

const Index = (props) => {
  return (
    <StyledMenu>
      {props.undo ? (
        <Tooltip onClick={props.handleUndo} text="Undo">
          <FaUndo size="2em" />
        </Tooltip>
      ) : (
        <Tooltip onClick={props.handlePaste} text="Paste From Clipboard">
          <FaPaste size="2em" />
        </Tooltip>
      )}
      <Tooltip onClick={props.setTime} text="Set Timer">
        <FaClock size="2em" />
      </Tooltip>
      <Tooltip onClick={props.resetAll} text="Reset">
        <FaPowerOff size="2em" />
      </Tooltip>
    </StyledMenu>
  );
};

export default Index;
