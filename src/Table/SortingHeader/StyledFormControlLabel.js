import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";

const StyledFormControlLabel = styled(FormControlLabel)`
  background-color:  ${props => props.isActive ? "#FFFFFF" : "#00000029"};
  width: 250px;
  border: 1px solid #F0F2F7;
  border-radius: 11px;
  padding: 2px 10px 2px 10px;
  font: normal normal 600 18px/27px Poppins;
  box-shadow: ${props => !props.isActive && "0px 3px 9px #00000029"}
  border-color: ${props => props.isActive ? "#FFFFFF" : "#F0F2F7"};
  
`;

export {StyledFormControlLabel}