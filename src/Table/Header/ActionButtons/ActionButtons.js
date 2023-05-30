import { StyledActionButtons } from "./StyledActionButtons";
import Button from "@mui/material/Button";
const ActionButtons = ({ onDialog, onGenerate, enableGenerate }) => {
  return (
    <StyledActionButtons>
      <Button
        className="dialog-button"
        onClick={onDialog}
        sx={{
          border: "3px solid #89A3FA",
          height: "56px",
          borderRadius: "11px",
        }}
      >
        Change List
      </Button>
      <Button
        className="sorting-button"
        onClick={onGenerate}
        disabled={!enableGenerate}
        sx={{
          color: "#FFFFFF",
          height: "56px",
          background: "#8AA3F9",
          boxShadow: "0px 6px 12px #00000029",
          borderRadius: "25px",
          "&.MuiButtonBase-root:hover": {
            backgroundColor: "#8AA3E0",
          },
        }}
      >
        Split Groups
      </Button>
    </StyledActionButtons>
  );
};

export { ActionButtons }